
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Company } from '../types';

interface AuthContextType {
  user: User | null;
  company: Company | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, phone: string, clientType: string) => Promise<void>;
  logout: () => void;
  setCurrentCompany: (company: Company) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    // Cargar usuario desde localStorage al inicializar
    const savedUser = localStorage.getItem('user');
    const savedCompany = localStorage.getItem('company');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedCompany) {
      setCompany(JSON.parse(savedCompany));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulación de login - en producción esto sería una llamada a la API
    const mockUser: User = {
      id: '1',
      email,
      phone: '+1234567890',
      clientType: 'mayoreo',
      companyId: company?.id || '1'
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const register = async (email: string, password: string, phone: string, clientType: string) => {
    // Simulación de registro
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      phone,
      clientType,
      companyId: company?.id || '1'
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const setCurrentCompany = (newCompany: Company) => {
    console.log('Cambiando a tienda:', newCompany.name);
    setCompany(newCompany);
    localStorage.setItem('company', JSON.stringify(newCompany));
    
    // Limpiar el carrito al cambiar de tienda
    if (newCompany.id !== company?.id) {
      localStorage.removeItem(`cart_${company?.id}`);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      company,
      login,
      register,
      logout,
      setCurrentCompany,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

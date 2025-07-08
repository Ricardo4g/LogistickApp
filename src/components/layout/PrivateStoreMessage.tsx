
import React from 'react';
import { Lock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';

interface PrivateStoreMessageProps {
  onAuthClick: () => void;
}

export function PrivateStoreMessage({ onAuthClick }: PrivateStoreMessageProps) {
  const { company } = useAuth();

  if (!company) return null;

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div 
          className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: `${company.primaryColor}20` }}
        >
          <Lock className="h-8 w-8" style={{ color: company.primaryColor }} />
        </div>
        
        <h2 className="text-2xl font-bold mb-4" style={{ color: company.primaryColor }}>
          Tienda Privada
        </h2>
        
        <p className="text-gray-600 mb-6">
          Esta tienda es solo para clientes registrados. 
          Inicia sesión para ver nuestro catálogo de productos y precios especiales.
        </p>
        
        <Button
          onClick={onAuthClick}
          size="lg"
          style={{ backgroundColor: company.primaryColor }}
        >
          Iniciar Sesión
        </Button>
      </div>
    </div>
  );
}

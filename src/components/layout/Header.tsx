
import React from 'react';
import { ShoppingCart, User, LogOut, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface HeaderProps {
  onCartClick: () => void;
  onAuthClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function Header({ onCartClick, onAuthClick, searchTerm, onSearchChange }: HeaderProps) {
  const { user, company, logout } = useAuth();
  const { getItemCount } = useCart();

  if (!company) return null;

  const itemCount = getItemCount();

  return (
    <header 
      className="sticky top-0 z-50 bg-white shadow-md border-b"
      style={{ borderColor: company.primaryColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre de la empresa */}
          <div className="flex items-center space-x-3">
            <img 
              src={company.logo} 
              alt={company.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <h1 
              className="text-xl font-bold"
              style={{ color: company.primaryColor }}
            >
              {company.name}
            </h1>
          </div>

          {/* Buscador */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none"
              />
            </div>
          </div>

          {/* Acciones del usuario */}
          <div className="flex items-center space-x-4">
            {/* Carrito */}
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="h-4 w-4" />
              {itemCount > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 px-1 min-w-[1.25rem] h-5 text-xs"
                  style={{ backgroundColor: company.primaryColor }}
                >
                  {itemCount}
                </Badge>
              )}
            </Button>

            {/* Usuario */}
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">
                  {user.email}
                </span>
                <Badge variant="secondary" className="text-xs">
                  {user.clientType}
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={onAuthClick}
              >
                <User className="h-4 w-4 mr-2" />
                Ingresar
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

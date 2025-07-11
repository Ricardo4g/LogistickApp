
import React from 'react';
import { ShoppingCart, User, LogOut, Search, Store, Menu } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { StoreSelector } from './StoreSelector';

interface HeaderProps {
  onCartClick: () => void;
  onAuthClick: () => void;
  onMenuClick?: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function Header({ onCartClick, onAuthClick, onMenuClick, searchTerm, onSearchChange }: HeaderProps) {
  const { user, company, logout } = useAuth();
  const { getItemCount } = useCart();

  if (!company) return null;

  const itemCount = getItemCount();

  return (
    <header 
      className="sticky top-0 z-50 bg-white shadow-md border-b"
      style={{ borderColor: company.primaryColor }}
    >
      <div className="w-full px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Menu button (mobile) y Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            {onMenuClick && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onMenuClick}
                className="lg:hidden p-1 sm:p-2"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            )}
            <img 
              src={company.logo} 
              alt={company.name}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover flex-shrink-0"
            />
            <h1 
              className="text-sm sm:text-xl font-bold truncate"
              style={{ color: company.primaryColor }}
            >
              {company.name}
            </h1>
          </div>

          {/* Selector de tiendas (desktop) */}
          <div className="hidden lg:flex items-center">
            <StoreSelector />
          </div>

          {/* Buscador */}
          <div className="flex-1 max-w-xs sm:max-w-md mx-2 sm:mx-4 lg:mx-8">
            <div className="relative">
              <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-7 sm:pl-10 pr-2 sm:pr-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none"
              />
            </div>
          </div>

          {/* Acciones del usuario */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Selector de tiendas (mobile) */}
            <div className="lg:hidden">
              <StoreSelector />
            </div>

            {/* Carrito */}
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative p-1.5 sm:p-2"
            >
              <ShoppingCart className="h-4 w-4" />
              {itemCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 px-1 min-w-[1rem] h-4 text-xs leading-none"
                  style={{ backgroundColor: company.primaryColor }}
                >
                  {itemCount}
                </Badge>
              )}
            </Button>

            {/* Usuario */}
            {user ? (
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="hidden sm:flex items-center space-x-2">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 truncate max-w-20 sm:max-w-none">
                    {user.email}
                  </span>
                  <Badge variant="secondary" className="text-xs hidden sm:inline-flex">
                    {user.clientType}
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="p-1.5 sm:p-2"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={onAuthClick}
                className="p-1.5 sm:p-2"
              >
                <User className="h-4 w-4 sm:mr-1" />
                <span className="hidden sm:inline">Ingresar</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

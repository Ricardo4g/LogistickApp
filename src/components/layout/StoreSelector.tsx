
import React, { useState } from 'react';
import { Store, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { mockCompanies } from '../../data/mockData';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export function StoreSelector() {
  const { company, setCurrentCompany } = useAuth();

  const handleStoreChange = (newCompany: any) => {
    setCurrentCompany(newCompany);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm p-1.5 sm:p-2">
          <Store className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Tiendas</span>
          <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 sm:w-64">
        {mockCompanies.map((store) => (
          <DropdownMenuItem
            key={store.id}
            onClick={() => handleStoreChange(store)}
            className={`flex items-center space-x-3 p-3 cursor-pointer ${
              company?.id === store.id ? 'bg-gray-100' : ''
            }`}
          >
            <img 
              src={store.logo} 
              alt={store.name}
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate">{store.name}</div>
              {store.city && (
                <div className="text-xs text-gray-500 truncate">{store.city}</div>
              )}
            </div>
            {company?.id === store.id && (
              <div 
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: store.primaryColor }}
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

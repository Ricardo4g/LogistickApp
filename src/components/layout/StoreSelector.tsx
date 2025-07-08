
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
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <Store className="h-4 w-4" />
          <span className="hidden sm:inline">Tiendas</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
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
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="font-medium">{store.name}</div>
              {store.city && (
                <div className="text-sm text-gray-500">{store.city}</div>
              )}
            </div>
            {company?.id === store.id && (
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: store.primaryColor }}
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

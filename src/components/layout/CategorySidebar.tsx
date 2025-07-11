
import React from 'react';
import { Category } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

interface CategorySidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function CategorySidebar({ 
  categories, 
  selectedCategory, 
  onCategorySelect,
  isOpen = true,
  onClose 
}: CategorySidebarProps) {
  const { company } = useAuth();

  if (!company) return null;

  const handleCategorySelect = (categoryId: string | null) => {
    onCategorySelect(categoryId);
    // Cerrar sidebar en móvil después de seleccionar
    if (onClose && window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && onClose && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:relative top-0 left-0 h-full lg:h-auto
        w-64 sm:w-72 lg:w-64 
        bg-gray-50 border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        z-50 lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header del sidebar (móvil) */}
        <div className="flex items-center justify-between p-4 border-b lg:hidden">
          <h2 className="text-lg font-semibold" style={{ color: company.primaryColor }}>
            Categorías
          </h2>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Contenido del sidebar */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 hidden lg:block" style={{ color: company.primaryColor }}>
            Categorías
          </h2>
          
          <div className="space-y-2">
            <Button
              variant={selectedCategory === null ? "default" : "ghost"}
              className="w-full justify-start text-sm"
              onClick={() => handleCategorySelect(null)}
              style={selectedCategory === null ? { backgroundColor: company.primaryColor } : {}}
            >
              Todos los productos
            </Button>
            
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                className="w-full justify-start text-sm"
                onClick={() => handleCategorySelect(category.id)}
                style={selectedCategory === category.id ? { backgroundColor: company.primaryColor } : {}}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

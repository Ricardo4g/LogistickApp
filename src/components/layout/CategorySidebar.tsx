
import React from 'react';
import { Category } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';

interface CategorySidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

export function CategorySidebar({ categories, selectedCategory, onCategorySelect }: CategorySidebarProps) {
  const { company } = useAuth();

  if (!company) return null;

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4" style={{ color: company.primaryColor }}>
        Categorías
      </h2>
      
      <div className="space-y-2">
        <Button
          variant={selectedCategory === null ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => onCategorySelect(null)}
          style={selectedCategory === null ? { backgroundColor: company.primaryColor } : {}}
        >
          Todos los productos
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onCategorySelect(category.id)}
            style={selectedCategory === category.id ? { backgroundColor: company.primaryColor } : {}}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

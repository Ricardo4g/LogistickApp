
import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="text-center">
          <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-2">
            No se encontraron productos
          </h3>
          <p className="text-sm sm:text-base text-gray-500">
            Intenta con una búsqueda diferente o selecciona otra categoría
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-2 sm:p-4 lg:p-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

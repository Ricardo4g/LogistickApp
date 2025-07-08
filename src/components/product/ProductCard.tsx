
import React from 'react';
import { Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { user, company } = useAuth();
  const { addToCart } = useCart();

  const getProductPrice = (): number => {
    if (!user) {
      return product.publicPrice || 0;
    }
    
    const userPrice = product.prices.find(p => p.clientType === user.clientType);
    return userPrice?.price || product.publicPrice || 0;
  };

  const price = getProductPrice();
  const showPrice = user || company?.showPublic;

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {product.description}
        </p>
        
        {showPrice && (
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold" style={{ color: company?.primaryColor }}>
              ${price.toLocaleString()}
            </span>
            {user && (
              <Badge variant="secondary" className="text-xs">
                Precio {user.clientType}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        {showPrice ? (
          <Button
            onClick={handleAddToCart}
            className="w-full"
            style={{ backgroundColor: company?.primaryColor }}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar al carrito
          </Button>
        ) : (
          <div className="w-full text-center py-2 text-gray-500 text-sm">
            Inicia sesión para ver precios
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

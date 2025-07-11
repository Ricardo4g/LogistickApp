
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { user, company } = useAuth();
  const { addToCart } = useCart();

  const getBaseProductPrice = (): number => {
    if (!user) {
      return product.publicPrice || 0;
    }
    
    const userPrice = product.prices.find(p => p.clientType === user.clientType);
    return userPrice?.price || product.publicPrice || 0;
  };

  const price = getBaseProductPrice();
  const showPrice = user || company?.showPublic;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultPresentation = product.presentations?.[0]?.name;
    addToCart(product, 1, defaultPresentation);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card 
      className="group hover:shadow-lg transition-shadow duration-200 cursor-pointer h-full flex flex-col"
      onClick={handleCardClick}
    >
      <CardContent className="p-3 sm:p-4 flex-1">
        <div className="aspect-square mb-3 sm:mb-4 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        <h3 className="font-semibold text-sm sm:text-lg mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-3 leading-relaxed">
          {product.description}
        </p>
        
        {showPrice && (
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-bold" style={{ color: company?.primaryColor }}>
                ${price.toLocaleString()}
              </span>
              {product.presentations && product.presentations.length > 0 && (
                <span className="text-xs text-gray-500">
                  desde {product.presentations[0].name}
                </span>
              )}
            </div>
            {user && (
              <Badge variant="secondary" className="text-xs">
                {user.clientType}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-3 sm:p-4 pt-0">
        {showPrice ? (
          <div className="w-full space-y-2">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
              variant="outline"
              className="w-full text-xs sm:text-sm h-8 sm:h-9"
            >
              Ver detalles
            </Button>
            <Button
              onClick={handleAddToCart}
              className="w-full text-xs sm:text-sm h-8 sm:h-9"
              style={{ backgroundColor: company?.primaryColor }}
            >
              <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Agregar
            </Button>
          </div>
        ) : (
          <div className="w-full text-center py-2 text-gray-500 text-xs sm:text-sm">
            Inicia sesión para ver precios
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

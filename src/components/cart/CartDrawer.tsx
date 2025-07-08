
import React, { useState } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';
import { CheckoutModal } from './CheckoutModal';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();
  const { user, company } = useAuth();
  const [showCheckout, setShowCheckout] = useState(false);

  const getProductPrice = (productId: string): number => {
    const item = cart?.items.find(item => item.product.id === productId);
    if (!item) return 0;

    if (!user) {
      return item.product.publicPrice || 0;
    }
    
    const userPrice = item.product.prices.find(p => p.clientType === user.clientType);
    return userPrice?.price || item.product.publicPrice || 0;
  };

  const total = getTotal();
  const canProceedToCheckout = cart && cart.items.length > 0 && (user || company?.showPublic);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Carrito de Compras</SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col h-full">
            {!cart || cart.items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Tu carrito está vacío
                  </h3>
                  <p className="text-gray-500">
                    Agrega algunos productos para continuar
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="space-y-4">
                    {cart.items.map((item) => {
                      const price = getProductPrice(item.product.id);
                      const subtotal = price * item.quantity;
                      
                      return (
                        <div key={item.product.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.product.name}</h4>
                            <p className="text-sm text-gray-600">
                              ${price.toLocaleString()} c/u
                            </p>
                            <p className="font-semibold" style={{ color: company?.primaryColor }}>
                              ${subtotal.toLocaleString()}
                            </p>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            
                            <span className="px-3 py-1 bg-white border rounded">
                              {item.quantity}
                            </span>
                            
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="border-t pt-4 space-y-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span style={{ color: company?.primaryColor }}>
                      ${total.toLocaleString()}
                    </span>
                  </div>
                  
                  {canProceedToCheckout ? (
                    <Button
                      onClick={() => setShowCheckout(true)}
                      className="w-full"
                      style={{ backgroundColor: company?.primaryColor }}
                    >
                      Proceder al Checkout
                    </Button>
                  ) : (
                    <div className="text-center text-sm text-gray-500">
                      Inicia sesión para proceder con la compra
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        onOrderConfirmed={() => {
          setShowCheckout(false);
          onClose();
        }}
      />
    </>
  );
}

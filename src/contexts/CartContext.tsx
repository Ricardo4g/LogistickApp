
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Cart, CartItem, Product } from '../types';
import { useAuth } from './AuthContext';

interface CartContextType {
  cart: Cart | null;
  addToCart: (product: Product, quantity?: number, selectedPresentation?: string, selectedFlavor?: string) => void;
  removeFromCart: (productId: string, selectedPresentation?: string, selectedFlavor?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedPresentation?: string, selectedFlavor?: string) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const { company, user } = useAuth();

  useEffect(() => {
    if (company) {
      const savedCart = localStorage.getItem(`cart_${company.id}`);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        setCart({ items: [], companyId: company.id });
      }
    }
  }, [company]);

  useEffect(() => {
    if (cart) {
      localStorage.setItem(`cart_${cart.companyId}`, JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: Product, quantity: number = 1, selectedPresentation?: string, selectedFlavor?: string) => {
    if (!cart) return;

    const existingItemIndex = cart.items.findIndex(item => 
      item.product.id === product.id && 
      item.selectedPresentation === selectedPresentation &&
      item.selectedFlavor === selectedFlavor
    );
    
    if (existingItemIndex >= 0) {
      const updatedItems = [...cart.items];
      updatedItems[existingItemIndex].quantity += quantity;
      setCart({ ...cart, items: updatedItems });
    } else {
      setCart({
        ...cart,
        items: [...cart.items, { product, quantity, selectedPresentation, selectedFlavor }]
      });
    }
  };

  const removeFromCart = (productId: string, selectedPresentation?: string, selectedFlavor?: string) => {
    if (!cart) return;
    
    setCart({
      ...cart,
      items: cart.items.filter(item => 
        !(item.product.id === productId && 
          item.selectedPresentation === selectedPresentation &&
          item.selectedFlavor === selectedFlavor)
      )
    });
  };

  const updateQuantity = (productId: string, quantity: number, selectedPresentation?: string, selectedFlavor?: string) => {
    if (!cart) return;
    
    if (quantity <= 0) {
      removeFromCart(productId, selectedPresentation, selectedFlavor);
      return;
    }

    setCart({
      ...cart,
      items: cart.items.map(item => 
        item.product.id === productId && 
        item.selectedPresentation === selectedPresentation &&
        item.selectedFlavor === selectedFlavor
          ? { ...item, quantity }
          : item
      )
    });
  };

  const clearCart = () => {
    if (!cart) return;
    setCart({ ...cart, items: [] });
  };

  const getItemCount = () => {
    return cart?.items.reduce((total, item) => total + item.quantity, 0) || 0;
  };

  const getTotal = () => {
    if (!cart) return 0;
    
    return cart.items.reduce((total, item) => {
      const price = getProductPrice(item.product, item.selectedPresentation);
      return total + (price * item.quantity);
    }, 0);
  };

  const getProductPrice = (product: Product, selectedPresentation?: string): number => {
    let basePrice = 0;
    
    if (!user) {
      basePrice = product.publicPrice || 0;
    } else {
      const userPrice = product.prices.find(p => p.clientType === user.clientType);
      basePrice = userPrice?.price || product.publicPrice || 0;
    }

    // Apply presentation multiplier if applicable
    if (selectedPresentation && product.presentations) {
      const presentationData = product.presentations.find(p => p.name === selectedPresentation);
      if (presentationData) {
        basePrice = basePrice * presentationData.priceMultiplier;
      }
    }

    return basePrice;
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getItemCount,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

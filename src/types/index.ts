
export interface Company {
  id: string;
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  showPublic: boolean;
  paymentMethods: ('transfer' | 'cash_on_delivery')[];
  deliveryMethods: ('local' | 'shipping')[];
  city?: string;
}

export interface Category {
  id: string;
  name: string;
  companyId: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  categoryId: string;
  companyId: string;
  publicPrice?: number;
  prices: {
    clientType: string;
    price: number;
  }[];
  nutritionalInfo?: {
    servingSize?: string;
    calories?: number;
    protein?: string;
    totalFat?: string;
    carbohydrates?: string;
    sugars?: string;
    sodium?: string;
    vitaminA?: string;
    vitaminD?: string;
  };
  presentations?: {
    name: string;
    priceMultiplier: number;
  }[];
  flavors?: string[];
}

export interface User {
  id: string;
  email: string;
  phone: string;
  clientType: string;
  companyId: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedPresentation?: string;
}

export interface Cart {
  items: CartItem[];
  companyId: string;
}

export interface Order {
  id: string;
  userId: string;
  companyId: string;
  items: CartItem[];
  total: number;
  paymentMethod: 'transfer' | 'cash_on_delivery';
  deliveryMethod: 'local' | 'shipping';
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: Date;
}

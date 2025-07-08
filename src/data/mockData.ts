import { Company, Category, Product, User } from '../types';

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechMart Store',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face',
    primaryColor: '#3B82F6',
    secondaryColor: '#1E40AF',
    showPublic: true,
    paymentMethods: ['transfer', 'cash_on_delivery'],
    deliveryMethods: ['local', 'shipping'],
    city: 'Ciudad de México'
  },
  {
    id: '2',
    name: 'Fashion Boutique',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=face',
    primaryColor: '#EC4899',
    secondaryColor: '#BE185D',
    showPublic: false,
    paymentMethods: ['transfer'],
    deliveryMethods: ['shipping'],
    city: 'Guadalajara'
  },
  {
    id: '3', 
    name: 'FreshMarket',
    logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&h=100&fit=crop&crop=face',
    primaryColor: '#10B981',
    secondaryColor: '#047857',
    showPublic: true,
    paymentMethods: ['cash_on_delivery'],
    deliveryMethods: ['local'],
    city: 'Monterrey'
  },
  {
    id: '4',
    name: 'HomeDecor Plus',
    logo: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop&crop=face',
    primaryColor: '#F59E0B',
    secondaryColor: '#D97706',
    showPublic: true,
    paymentMethods: ['transfer', 'cash_on_delivery'],
    deliveryMethods: ['local', 'shipping'],
    city: 'Puebla'
  }
];

export const mockCategories: Category[] = [
  // TechMart Store categories
  { id: '1', name: 'Smartphones', companyId: '1' },
  { id: '2', name: 'Laptops', companyId: '1' },
  { id: '3', name: 'Accesorios', companyId: '1' },
  
  // Fashion Boutique categories
  { id: '4', name: 'Vestidos', companyId: '2' },
  { id: '5', name: 'Zapatos', companyId: '2' },
  { id: '6', name: 'Accesorios', companyId: '2' },
  
  // FreshMarket categories
  { id: '7', name: 'Frutas', companyId: '3' },
  { id: '8', name: 'Verduras', companyId: '3' },
  { id: '9', name: 'Lácteos', companyId: '3' },
  
  // HomeDecor Plus categories
  { id: '10', name: 'Muebles', companyId: '4' },
  { id: '11', name: 'Decoración', companyId: '4' },
  { id: '12', name: 'Iluminación', companyId: '4' }
];

export const mockProducts: Product[] = [
  // TechMart Store products
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'El último iPhone con chip A17 Pro',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=300&h=300&fit=crop',
    categoryId: '1',
    companyId: '1',
    publicPrice: 25000,
    prices: [
      { clientType: 'mayoreo', price: 22000 },
      { clientType: 'distribuidor', price: 23000 },
      { clientType: 'tiendita', price: 24000 }
    ]
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    description: 'Laptop ultradelgada con chip M2',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
    categoryId: '2',
    companyId: '1',
    publicPrice: 30000,
    prices: [
      { clientType: 'mayoreo', price: 27000 },
      { clientType: 'distribuidor', price: 28000 },
      { clientType: 'tiendita', price: 29000 }
    ]
  },
  
  // Fashion Boutique products
  {
    id: '3',
    name: 'Vestido Elegante',
    description: 'Vestido negro perfecto para ocasiones especiales',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop',
    categoryId: '4',
    companyId: '2',
    prices: [
      { clientType: 'mayoreo', price: 800 },
      { clientType: 'distribuidor', price: 900 },
      { clientType: 'tiendita', price: 1000 }
    ]
  },
  {
    id: '4',
    name: 'Zapatos de Tacón',
    description: 'Zapatos elegantes de tacón alto',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop',
    categoryId: '5',
    companyId: '2',
    prices: [
      { clientType: 'mayoreo', price: 600 },
      { clientType: 'distribuidor', price: 700 },
      { clientType: 'tiendita', price: 800 }
    ]
  },
  
  // FreshMarket products
  {
    id: '5',
    name: 'Manzanas Rojas',
    description: 'Manzanas frescas del huerto, por kg',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=300&h=300&fit=crop',
    categoryId: '7',
    companyId: '3',
    publicPrice: 45,
    prices: [
      { clientType: 'mayoreo', price: 35 },
      { clientType: 'distribuidor', price: 40 },
      { clientType: 'tiendita', price: 42 }
    ]
  },
  {
    id: '6',
    name: 'Leche Entera',
    description: 'Leche fresca entera de 1 litro',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop',
    categoryId: '9',
    companyId: '3',
    publicPrice: 25,
    prices: [
      { clientType: 'mayoreo', price: 20 },
      { clientType: 'distribuidor', price: 22 },
      { clientType: 'tiendita', price: 23 }
    ]
  },
  
  // HomeDecor Plus products
  {
    id: '7',
    name: 'Sofá Moderno',
    description: 'Sofá de 3 plazas con diseño contemporáneo',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
    categoryId: '10',
    companyId: '4',
    publicPrice: 12000,
    prices: [
      { clientType: 'mayoreo', price: 10000 },
      { clientType: 'distribuidor', price: 11000 },
      { clientType: 'tiendita', price: 11500 }
    ]
  },
  {
    id: '8',
    name: 'Lámpara de Mesa',
    description: 'Lámpara moderna para escritorio',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop',
    categoryId: '12',
    companyId: '4',
    publicPrice: 800,
    prices: [
      { clientType: 'mayoreo', price: 650 },
      { clientType: 'distribuidor', price: 700 },
      { clientType: 'tiendita', price: 750 }
    ]
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'cliente@example.com',
    phone: '+52 55 1234 5678',
    clientType: 'mayoreo',
    companyId: '1'
  }
];

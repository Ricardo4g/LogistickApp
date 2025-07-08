
import { Company, Category, Product } from '../types';

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechStore México',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
    primaryColor: '#2563eb',
    secondaryColor: '#1e40af',
    showPublic: true,
    paymentMethods: ['transfer', 'cash_on_delivery'],
    deliveryMethods: ['local', 'shipping'],
    city: 'Ciudad de México'
  },
  {
    id: '2',
    name: 'FashionHub',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center',
    primaryColor: '#ec4899',
    secondaryColor: '#db2777',
    showPublic: false,
    paymentMethods: ['transfer'],
    deliveryMethods: ['shipping'],
  }
];

export const mockCategories: Category[] = [
  { id: '1', name: 'Smartphones', companyId: '1' },
  { id: '2', name: 'Laptops', companyId: '1' },
  { id: '3', name: 'Accesorios', companyId: '1' },
  { id: '4', name: 'Ropa Mujer', companyId: '2' },
  { id: '5', name: 'Ropa Hombre', companyId: '2' },
  { id: '6', name: 'Zapatos', companyId: '2' },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'El iPhone más avanzado con chip A17 Pro y cámara de 48MP',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center',
    categoryId: '1',
    companyId: '1',
    publicPrice: 25000,
    prices: [
      { clientType: 'mayoreo', price: 22000 },
      { clientType: 'distribuidor', price: 20000 },
      { clientType: 'tiendita', price: 23000 }
    ]
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    description: 'Laptop ultradelgada con chip M2 y hasta 18 horas de batería',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop&crop=center',
    categoryId: '2',
    companyId: '1',
    publicPrice: 28000,
    prices: [
      { clientType: 'mayoreo', price: 25000 },
      { clientType: 'distribuidor', price: 23000 },
      { clientType: 'tiendita', price: 26000 }
    ]
  },
  {
    id: '3',
    name: 'AirPods Pro',
    description: 'Audífonos inalámbricos con cancelación activa de ruido',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop&crop=center',
    categoryId: '3',
    companyId: '1',
    publicPrice: 5500,
    prices: [
      { clientType: 'mayoreo', price: 4800 },
      { clientType: 'distribuidor', price: 4500 },
      { clientType: 'tiendita', price: 5000 }
    ]
  },
  {
    id: '4',
    name: 'Samsung Galaxy S24',
    description: 'Smartphone Android con inteligencia artificial integrada',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&crop=center',
    categoryId: '1',
    companyId: '1',
    publicPrice: 22000,
    prices: [
      { clientType: 'mayoreo', price: 19000 },
      { clientType: 'distribuidor', price: 17500 },
      { clientType: 'tiendita', price: 20000 }
    ]
  },
  {
    id: '5',
    name: 'Vestido Elegante',
    description: 'Vestido de diseñador para ocasiones especiales',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center',
    categoryId: '4',
    companyId: '2',
    prices: [
      { clientType: 'mayoreo', price: 800 },
      { clientType: 'distribuidor', price: 700 },
      { clientType: 'tiendita', price: 850 }
    ]
  },
  {
    id: '6',
    name: 'Camisa Casual',
    description: 'Camisa de algodón para uso diario',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&crop=center',
    categoryId: '5',
    companyId: '2',
    prices: [
      { clientType: 'mayoreo', price: 300 },
      { clientType: 'distribuidor', price: 250 },
      { clientType: 'tiendita', price: 320 }
    ]
  }
];

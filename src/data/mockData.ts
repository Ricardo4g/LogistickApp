
import { Company, Category, Product, User } from '../types';

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Lechería San José',
    logo: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=100&h=100&fit=crop&crop=face',
    primaryColor: '#3B82F6',
    secondaryColor: '#1E40AF',
    showPublic: true,
    paymentMethods: ['transfer', 'cash_on_delivery'],
    deliveryMethods: ['local', 'shipping'],
    city: 'Ciudad de México'
  },
  {
    id: '2',
    name: 'Dulcería La Esperanza',
    logo: 'https://images.unsplash.com/photo-1514517220017-8ce97d9e6b85?w=100&h=100&fit=crop&crop=face',
    primaryColor: '#EC4899',
    secondaryColor: '#BE185D',
    showPublic: false,
    paymentMethods: ['transfer'],
    deliveryMethods: ['shipping'],
    city: 'Guadalajara'
  },
  {
    id: '3', 
    name: 'Cremería Don Alberto',
    logo: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=100&h=100&fit=crop&crop=face',
    primaryColor: '#10B981',
    secondaryColor: '#047857',
    showPublic: true,
    paymentMethods: ['cash_on_delivery'],
    deliveryMethods: ['local'],
    city: 'Monterrey'
  },
  {
    id: '4',
    name: 'Ferretería El Martillo',
    logo: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=100&h=100&fit=crop&crop=face',
    primaryColor: '#F59E0B',
    secondaryColor: '#D97706',
    showPublic: true,
    paymentMethods: ['transfer', 'cash_on_delivery'],
    deliveryMethods: ['local', 'shipping'],
    city: 'Puebla'
  }
];

export const mockCategories: Category[] = [
  // Lechería San José categories
  { id: '1', name: 'Lácteos', companyId: '1' },
  { id: '2', name: 'Huevos', companyId: '1' },
  { id: '3', name: 'Embutidos', companyId: '1' },
  
  // Dulcería La Esperanza categories
  { id: '4', name: 'Dulces Mexicanos', companyId: '2' },
  { id: '5', name: 'Chocolates', companyId: '2' },
  { id: '6', name: 'Gomitas', companyId: '2' },
  
  // Cremería Don Alberto categories
  { id: '7', name: 'Quesos', companyId: '3' },
  { id: '8', name: 'Cremas', companyId: '3' },
  { id: '9', name: 'Yogurts', companyId: '3' },
  
  // Ferretería El Martillo categories
  { id: '10', name: 'Herramientas', companyId: '4' },
  { id: '11', name: 'Tornillería', companyId: '4' },
  { id: '12', name: 'Materiales', companyId: '4' }
];

export const mockProducts: Product[] = [
  // Lechería San José products
  {
    id: '1',
    name: 'Leche Entera 1L',
    description: 'Leche fresca entera pasteurizada de vaca',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop',
    categoryId: '1',
    companyId: '1',
    publicPrice: 28,
    prices: [
      { clientType: 'mayoreo', price: 24 },
      { clientType: 'distribuidor', price: 25 },
      { clientType: 'tiendita', price: 26 }
    ]
  },
  {
    id: '2',
    name: 'Huevos Rojos 18 pzs',
    description: 'Huevos frescos de gallina, cartón de 18 piezas',
    image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=300&h=300&fit=crop',
    categoryId: '2',
    companyId: '1',
    publicPrice: 65,
    prices: [
      { clientType: 'mayoreo', price: 55 },
      { clientType: 'distribuidor', price: 58 },
      { clientType: 'tiendita', price: 62 }
    ]
  },
  
  // Dulcería La Esperanza products
  {
    id: '3',
    name: 'Dulce de Tamarindo',
    description: 'Pulpa de tamarindo enchilada con chile piquín',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=300&h=300&fit=crop',
    categoryId: '4',
    companyId: '2',
    prices: [
      { clientType: 'mayoreo', price: 12 },
      { clientType: 'distribuidor', price: 15 },
      { clientType: 'tiendita', price: 18 }
    ]
  },
  {
    id: '4',
    name: 'Chocolate Abuelita',
    description: 'Tablilla de chocolate para bebida caliente',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300&h=300&fit=crop',
    categoryId: '5',
    companyId: '2',
    prices: [
      { clientType: 'mayoreo', price: 22 },
      { clientType: 'distribuidor', price: 25 },
      { clientType: 'tiendita', price: 28 }
    ]
  },
  
  // Cremería Don Alberto products
  {
    id: '5',
    name: 'Queso Oaxaca 500g',
    description: 'Queso Oaxaca fresco artesanal, medio kilo',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=300&fit=crop',
    categoryId: '7',
    companyId: '3',
    publicPrice: 85,
    prices: [
      { clientType: 'mayoreo', price: 70 },
      { clientType: 'distribuidor', price: 75 },
      { clientType: 'tiendita', price: 80 }
    ]
  },
  {
    id: '6',
    name: 'Crema Ácida 200ml',
    description: 'Crema ácida natural para acompañar platillos',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop',
    categoryId: '8',
    companyId: '3',
    publicPrice: 35,
    prices: [
      { clientType: 'mayoreo', price: 28 },
      { clientType: 'distribuidor', price: 30 },
      { clientType: 'tiendita', price: 32 }
    ]
  },
  
  // Ferretería El Martillo products
  {
    id: '7',
    name: 'Martillo de Carpintero',
    description: 'Martillo profesional mango de madera 16 oz',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=300&fit=crop',
    categoryId: '10',
    companyId: '4',
    publicPrice: 250,
    prices: [
      { clientType: 'mayoreo', price: 200 },
      { clientType: 'distribuidor', price: 220 },
      { clientType: 'tiendita', price: 235 }
    ]
  },
  {
    id: '8',
    name: 'Tornillos Phillips 1/4"',
    description: 'Pack de 100 tornillos Phillips galvanizados',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=300&h=300&fit=crop',
    categoryId: '11',
    companyId: '4',
    publicPrice: 45,
    prices: [
      { clientType: 'mayoreo', price: 35 },
      { clientType: 'distribuidor', price: 38 },
      { clientType: 'tiendita', price: 42 }
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

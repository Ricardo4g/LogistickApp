import { Company, Category, Product, User } from '../types';

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Cremería Aguascalientes',
    logo: '/lovable-uploads/be2706dc-c944-44d5-af03-6d0fea796d27.png',
    primaryColor: '#dc2626',
    secondaryColor: '#991b1b',
    showPublic: true,
    paymentMethods: ['transfer', 'cash_on_delivery'],
    deliveryMethods: ['local', 'shipping'],
    city: 'Aguascalientes'
  },
  {
    id: '2',
    name: 'Oishi Onigiri',
    logo: 'https://images.unsplash.com/photo-1617195737496-bc30194e3a19?w=100&h=100&fit=crop&crop=face',
    primaryColor: '#059669',
    secondaryColor: '#047857',
    showPublic: true,
    paymentMethods: ['transfer', 'cash_on_delivery'],
    deliveryMethods: ['local', 'shipping'],
    city: 'Ciudad de México'
  },
  {
    id: '3',
    name: 'Dulcería San Marcos',
    logo: 'https://images.unsplash.com/photo-1514517220017-8ce97d9e6b85?w=100&h=100&fit=crop&crop=face',
    primaryColor: '#7c3aed',
    secondaryColor: '#5b21b6',
    showPublic: true,
    paymentMethods: ['transfer', 'cash_on_delivery'],
    deliveryMethods: ['local', 'shipping'],
    city: 'Guadalajara'
  },
  {
    id: '4',
    name: 'Hielo Crystal Don Frío',
    logo: '/lovable-uploads/686ed8fe-3d6f-41a6-93af-e62565c450f2.png',
    primaryColor: '#0ea5e9',
    secondaryColor: '#0284c7',
    showPublic: true,
    paymentMethods: ['transfer', 'cash_on_delivery'],
    deliveryMethods: ['local', 'shipping'],
    city: 'Monterrey'
  },
  {
    id: '5',
    name: 'Helados Nestlé',
    logo: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=100&h=100&fit=crop&crop=face',
    primaryColor: '#dc2626',
    secondaryColor: '#991b1b',
    showPublic: true,
    paymentMethods: ['transfer', 'cash_on_delivery'],
    deliveryMethods: ['local', 'shipping'],
    city: 'Ciudad de México'
  }
];

export const mockCategories: Category[] = [
  // Cremería Aguascalientes categories
  { id: '1', name: 'Lácteos', companyId: '1' },
  { id: '2', name: 'Yogurts', companyId: '1' },
  { id: '3', name: 'Quesos', companyId: '1' },
  
  // Oishi Onigiri categories
  { id: '4', name: 'Onigiris', companyId: '2' },
  { id: '5', name: 'Snacks Japoneses', companyId: '2' },
  
  // Dulcería San Marcos categories
  { id: '6', name: 'Dulces Mexicanos', companyId: '3' },
  { id: '7', name: 'Chocolates', companyId: '3' },
  
  // Hielo Crystal Don Frío categories
  { id: '8', name: 'Hielo en Bolsa', companyId: '4' },
  { id: '9', name: 'Hielo en Barra', companyId: '4' },
  { id: '10', name: 'Hielo Especializado', companyId: '4' },
  
  // Helados Nestlé categories
  { id: '11', name: 'Helados', companyId: '5' },
  { id: '12', name: 'Paletas', companyId: '5' }
];

export const mockProducts: Product[] = [
  // Cremería Aguascalientes products
  {
    id: '1',
    name: 'Leche Descremada Light',
    description: 'Disfruta de una leche descremada con el 50% menos de grasas y calorías, sin perder sabor. La Leche Descremada Light es una opción saludable para satisfacer tu antojo sin sentirte culpable.',
    image: '/lovable-uploads/3ab6e166-f87e-41b6-9a7f-cd4bc3438207.png',
    categoryId: '1',
    companyId: '1',
    publicPrice: 22.50,
    prices: [
      { clientType: 'mayoreo', price: 20 },
      { clientType: 'distribuidor', price: 21 },
      { clientType: 'tiendita', price: 22 }
    ],
    nutritionalInfo: {
      servingSize: '100ml',
      calories: 37,
      protein: '3g',
      totalFat: '0.5g',
      carbohydrates: '5g',
      sugars: '5g',
      sodium: '49mg',
      vitaminA: '60ug',
      vitaminD: '0.5pg'
    },
    presentations: ['1 litro', 'Caja 12 litros', 'Caja 6 litros']
  },
  {
    id: '2',
    name: 'Yogurt 220ml',
    description: 'Saborea nuestro delicioso Yogurt 220ml hecho con ingredientes 100% naturales y de diferentes sabores. Nuestro yogurt es rico en nutrientes y disfruta de la frescura y sabor natural.',
    image: '/lovable-uploads/bb577254-7f09-482b-b055-fdc61de7d8c6.png',
    categoryId: '2',
    companyId: '1',
    publicPrice: 12.00,
    prices: [
      { clientType: 'mayoreo', price: 10 },
      { clientType: 'distribuidor', price: 11 },
      { clientType: 'tiendita', price: 11.50 }
    ],
    flavors: ['Fresa', 'Durazno', 'Mango', 'Nuez con cereal', 'Guayaba']
  },
  {
    id: '3',
    name: 'Requesón 220grs',
    description: 'Requesón fresco y cremoso, perfecto para acompañar tus comidas o como ingrediente en tus recetas favoritas.',
    image: '/lovable-uploads/a67f5730-ddcd-4f4d-9795-fe069ff11d87.png',
    categoryId: '3',
    companyId: '1',
    publicPrice: 39.00,
    prices: [
      { clientType: 'mayoreo', price: 35 },
      { clientType: 'distribuidor', price: 37 },
      { clientType: 'tiendita', price: 38 }
    ]
  },
  {
    id: '4',
    name: 'Queso Asadero Botanita 225grs',
    description: 'Queso asadero ideal para derretir, perfecto para quesadillas, nachos y botanas.',
    image: '/lovable-uploads/5a18934c-4829-428a-b059-e38ebf26aadd.png',
    categoryId: '3',
    companyId: '1',
    publicPrice: 52.00,
    prices: [
      { clientType: 'mayoreo', price: 46 },
      { clientType: 'distribuidor', price: 49 },
      { clientType: 'tiendita', price: 50 }
    ]
  },
  {
    id: '5',
    name: 'Crema Pasteurizada 240ml',
    description: 'Crema pasteurizada fresca y cremosa, ideal para cocinar y acompañar tus platillos.',
    image: '/lovable-uploads/448e9da2-c921-4322-b3a3-d323db7668aa.png',
    categoryId: '1',
    companyId: '1',
    publicPrice: 22.00,
    prices: [
      { clientType: 'mayoreo', price: 19 },
      { clientType: 'distribuidor', price: 20 },
      { clientType: 'tiendita', price: 21 }
    ],
    presentations: ['240ml', '480ml']
  },

  // Hielo Crystal Don Frío products
  {
    id: '6',
    name: 'Hielo Clásico - Bolsa 5 KG',
    description: 'EL QUE NUNCA FALLA EN TUS REUNIONES. Hielo de alta calidad para todo tipo de bebidas y eventos.',
    image: '/lovable-uploads/07f5c242-fd94-4623-afb0-c1ec4c4cf61d.png',
    categoryId: '8',
    companyId: '4',
    publicPrice: 25.00,
    prices: [
      { clientType: 'mayoreo', price: 20 },
      { clientType: 'distribuidor', price: 22 },
      { clientType: 'tiendita', price: 24 }
    ]
  },
  {
    id: '7',
    name: 'Hielo Fiesta - Bolsa 15 KG',
    description: 'IDEAL PARA EVENTOS MÁS GRANDES. Bolsa de hielo de 15kg perfecta para fiestas y eventos grandes.',
    image: '/lovable-uploads/775d7a9a-e1ad-4905-a8c8-ae79383bbe96.png',
    categoryId: '8',
    companyId: '4',
    publicPrice: 65.00,
    prices: [
      { clientType: 'mayoreo', price: 55 },
      { clientType: 'distribuidor', price: 60 },
      { clientType: 'tiendita', price: 62 }
    ]
  },
  {
    id: '8',
    name: 'Hielo Gourmet - Bolsa 5 KG',
    description: 'DALE UN TOQUE A TUS BEBIDAS. Hielo premium para bebidas especiales y cócteles.',
    image: '/lovable-uploads/926ebffe-fea9-41c4-a418-be12a91fa93a.png',
    categoryId: '8',
    companyId: '4',
    publicPrice: 35.00,
    prices: [
      { clientType: 'mayoreo', price: 30 },
      { clientType: 'distribuidor', price: 32 },
      { clientType: 'tiendita', price: 34 }
    ]
  },
  {
    id: '9',
    name: 'Hielo Cocktail - Hielo Molido',
    description: 'LA MEJOR OPCIÓN PARA TUS BEBIDAS O RASPADOS. Hielo finamente molido perfecto para cócteles y raspados.',
    image: '/lovable-uploads/48375f00-c6d9-4b34-b1fb-6697c09d2d4e.png',
    categoryId: '10',
    companyId: '4',
    publicPrice: 30.00,
    prices: [
      { clientType: 'mayoreo', price: 25 },
      { clientType: 'distribuidor', price: 27 },
      { clientType: 'tiendita', price: 29 }
    ]
  },
  {
    id: '10',
    name: 'Barra de Hielo 20 KG',
    description: 'EL PROTAGONISTA DE TU EVENTO. Barra sólida de hielo de 20kg para eventos especiales.',
    image: '/lovable-uploads/bbc0e20a-d5d5-42db-8313-ff765c225454.png',
    categoryId: '9',
    companyId: '4',
    publicPrice: 85.00,
    prices: [
      { clientType: 'mayoreo', price: 75 },
      { clientType: 'distribuidor', price: 80 },
      { clientType: 'tiendita', price: 82 }
    ]
  },
  {
    id: '11',
    name: 'Barra de Hielo 75 KG',
    description: 'RESISTENCIA Y FRESCURA PARA GRANDES OCASIONES. Barra industrial de hielo para eventos masivos.',
    image: '/lovable-uploads/7b15c5d7-0efe-4c3f-96b3-603f1df71c90.png',
    categoryId: '9',
    companyId: '4',
    publicPrice: 280.00,
    prices: [
      { clientType: 'mayoreo', price: 250 },
      { clientType: 'distribuidor', price: 265 },
      { clientType: 'tiendita', price: 275 }
    ]
  },
  {
    id: '12',
    name: 'Hielo en Ojuelas',
    description: 'TU ALIADO PERFECTO. Hielo en ojuelas ideal para conservación y presentación de productos.',
    image: '/lovable-uploads/e682f99b-2081-42af-82e4-8109d403251c.png',
    categoryId: '10',
    companyId: '4',
    publicPrice: 45.00,
    prices: [
      { clientType: 'mayoreo', price: 38 },
      { clientType: 'distribuidor', price: 42 },
      { clientType: 'tiendita', price: 44 }
    ]
  },

  // Oishi Onigiri products - Updated
  {
    id: '13',
    name: 'Oishi Onigiri Chuleta Ahumada Teriyaki',
    description: 'Snack tipo sushi en forma de triángulo, listo para comer. 125 gramos.',
    image: '/lovable-uploads/e8d3f4ff-365a-4574-b7de-fe2d0ef7b65d.png',
    categoryId: '4',
    companyId: '2',
    publicPrice: 35.00,
    prices: [
      { clientType: 'mayoreo', price: 30 },
      { clientType: 'distribuidor', price: 32 },
      { clientType: 'tiendita', price: 34 }
    ]
  },
  {
    id: '14',
    name: 'Oishi Onigiri Arrachera',
    description: 'Snack tipo sushi en forma de triángulo, listo para comer. 125 gramos.',
    image: '/lovable-uploads/e8d3f4ff-365a-4574-b7de-fe2d0ef7b65d.png',
    categoryId: '4',
    companyId: '2',
    publicPrice: 35.00,
    prices: [
      { clientType: 'mayoreo', price: 30 },
      { clientType: 'distribuidor', price: 32 },
      { clientType: 'tiendita', price: 34 }
    ]
  },
  {
    id: '15',
    name: 'Oishi Onigiri Atún',
    description: 'Snack tipo sushi en forma de triángulo, listo para comer. 125 gramos.',
    image: '/lovable-uploads/ac46bd87-3482-4774-ad07-921b3ac005ce.png',
    categoryId: '4',
    companyId: '2',
    publicPrice: 35.00,
    prices: [
      { clientType: 'mayoreo', price: 30 },
      { clientType: 'distribuidor', price: 32 },
      { clientType: 'tiendita', price: 34 }
    ]
  },
  {
    id: '16',
    name: 'Oishi Onigiri Atún Picante',
    description: 'Snack tipo sushi en forma de triángulo, listo para comer. 125 gramos.',
    image: '/lovable-uploads/92c4711b-bcbf-4b06-a0fb-6b61bcc052a4.png',
    categoryId: '4',
    companyId: '2',
    publicPrice: 35.00,
    prices: [
      { clientType: 'mayoreo', price: 30 },
      { clientType: 'distribuidor', price: 32 },
      { clientType: 'tiendita', price: 34 }
    ]
  },
  {
    id: '17',
    name: 'Oishi Onigiri Salmón Ahumado',
    description: 'Snack tipo sushi en forma de triángulo, listo para comer. 125 gramos.',
    image: '/lovable-uploads/92c4711b-bcbf-4b06-a0fb-6b61bcc052a4.png',
    categoryId: '4',
    companyId: '2',
    publicPrice: 35.00,
    prices: [
      { clientType: 'mayoreo', price: 30 },
      { clientType: 'distribuidor', price: 32 },
      { clientType: 'tiendita', price: 34 }
    ]
  },

  // Dulcería San Marcos products
  {
    id: '15',
    name: 'Dulce de Tamarindo Enchilado',
    description: 'Pulpa de tamarindo enchilada con chile piquín, un clásico de la dulcería mexicana.',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=300&h=300&fit=crop',
    categoryId: '6',
    companyId: '3',
    publicPrice: 15.00,
    prices: [
      { clientType: 'mayoreo', price: 12 },
      { clientType: 'distribuidor', price: 13 },
      { clientType: 'tiendita', price: 14 }
    ]
  },
  {
    id: '16',
    name: 'Chocolate de Mesa Abuelita',
    description: 'Tradicional chocolate de mesa mexicano, perfecto para preparar chocolate caliente.',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300&h=300&fit=crop',
    categoryId: '7',
    companyId: '3',
    publicPrice: 28.00,
    prices: [
      { clientType: 'mayoreo', price: 22 },
      { clientType: 'distribuidor', price: 25 },
      { clientType: 'tiendita', price: 27 }
    ]
  },

  // Helados Nestlé products
  {
    id: '17',
    name: 'Helado Magnum Clásico',
    description: 'Helado premium cubierto de chocolate belga, una experiencia única de sabor.',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300&h=300&fit=crop',
    categoryId: '11',
    companyId: '5',
    publicPrice: 65.00,
    prices: [
      { clientType: 'mayoreo', price: 55 },
      { clientType: 'distribuidor', price: 60 },
      { clientType: 'tiendita', price: 62 }
    ]
  },
  {
    id: '18',
    name: 'Paleta Solero',
    description: 'Refrescante paleta de limón con trozos de fruta real, perfecta para el calor.',
    image: 'https://images.unsplash.com/photo-1567558146042-eb6c7eb81071?w=300&h=300&fit=crop',
    categoryId: '12',
    companyId: '5',
    publicPrice: 25.00,
    prices: [
      { clientType: 'mayoreo', price: 20 },
      { clientType: 'distribuidor', price: 22 },
      { clientType: 'tiendita', price: 24 }
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

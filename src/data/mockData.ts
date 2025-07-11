
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
    logo: '/lovable-uploads/78839ca0-8a2d-4f8e-9774-988999d56e10.png',
    primaryColor: '#ea580c',
    secondaryColor: '#c2410c',
    showPublic: true,
    paymentMethods: ['transfer', 'cash_on_delivery'],
    deliveryMethods: ['local', 'shipping'],
    city: 'Ciudad de México'
  },
  {
    id: '3',
    name: 'Dulcería San Marcos',
    logo: '/lovable-uploads/ac939e7b-7e91-450e-981b-52bea75da07e.png',
    primaryColor: '#ca8a04',
    secondaryColor: '#a16207',
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
    logo: '/lovable-uploads/56d98857-f691-4c4d-9643-698d086f530e.png',
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
    presentations: [
      { name: '1 litro', priceMultiplier: 1 },
      { name: 'Caja 12 litros', priceMultiplier: 11.5 },
      { name: 'Caja 6 litros', priceMultiplier: 5.8 }
    ]
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
    presentations: [
      { name: '240ml', priceMultiplier: 1 },
      { name: '480ml', priceMultiplier: 1.9 }
    ]
  },
  
  // Hielo Crystal Don Frío products - CORREGIDAS LAS IMÁGENES
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

  // Oishi Onigiri products
  {
    id: '13',
    name: 'Oishi Onigiri Chuleta Ahumada Teriyaki',
    description: 'Snack tipo sushi en forma de triángulo, listo para comer. 125 gramos.',
    image: '/lovable-uploads/b50f28aa-2cda-4b41-bfa2-2223bce18619.png',
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
    image: '/lovable-uploads/eba86584-31e7-4848-96c1-befac3d76586.png',
    categoryId: '4',
    companyId: '2',
    publicPrice: 35.00,
    prices: [
      { clientType: 'mayoreo', price: 30 },
      { clientType: 'distribuidor', price: 32 },
      { clientType: 'tiendita', price: 34 }
    ]
  },

  // Dulcería San Marcos products - ACTUALIZADOS
  {
    id: '18',
    name: 'Paquete 3 Vitroleros de dulce de leche de 90 piezas',
    description: 'Paquete especial de 3 vitroleros con dulce de leche artesanal, perfecto para eventos y celebraciones.',
    image: '/lovable-uploads/d67045ac-6a5f-4c5d-83e7-944fc895c97d.png',
    categoryId: '6',
    companyId: '3',
    publicPrice: 285.00,
    prices: [
      { clientType: 'mayoreo', price: 260 },
      { clientType: 'distribuidor', price: 270 },
      { clientType: 'tiendita', price: 280 }
    ]
  },
  {
    id: '19',
    name: 'Barrita de leche con nuez 80grs',
    description: 'Deliciosa barrita de leche con trozos de nuez, un dulce tradicional mexicano.',
    image: '/lovable-uploads/1be1c62b-69ec-4e63-bc35-d0621536889c.png',
    categoryId: '6',
    companyId: '3',
    publicPrice: 13.00,
    prices: [
      { clientType: 'mayoreo', price: 10 },
      { clientType: 'distribuidor', price: 11 },
      { clientType: 'tiendita', price: 12 }
    ]
  },
  {
    id: '20',
    name: 'Vitrolero macarrón 90 pzs',
    description: 'Dulce de leche artesanal con 85 porciones de 10 grs cada una, presentado en vitrolero.',
    image: '/lovable-uploads/81b3339b-da51-4acc-b96a-00a764d6a614.png',
    categoryId: '6',
    companyId: '3',
    publicPrice: 95.00,
    prices: [
      { clientType: 'mayoreo', price: 85 },
      { clientType: 'distribuidor', price: 90 },
      { clientType: 'tiendita', price: 93 }
    ]
  },
  {
    id: '21',
    name: 'Cajeta 250 gramos',
    description: 'Deliciosa cajeta natural casera, elaborada con ingredientes tradicionales.',
    image: '/lovable-uploads/d67045ac-6a5f-4c5d-83e7-944fc895c97d.png',
    categoryId: '6',
    companyId: '3',
    publicPrice: 25.00,
    prices: [
      { clientType: 'mayoreo', price: 20 },
      { clientType: 'distribuidor', price: 22 },
      { clientType: 'tiendita', price: 24 }
    ]
  },

  // Helados Nestlé products - NUEVOS CON IMÁGENES
  {
    id: '22',
    name: 'Helado Nestlé Crunch con trozos de chocolate 714 g',
    description: 'Helado cremoso con deliciosos trozos de chocolate Crunch. Disfrútalo como postre, ideal para compartir.',
    image: '/lovable-uploads/59144bf7-89ff-4275-9604-afdf6ed537bb.png',
    categoryId: '11',
    companyId: '5',
    publicPrice: 75.00,
    prices: [
      { clientType: 'mayoreo', price: 65 },
      { clientType: 'distribuidor', price: 70 },
      { clientType: 'tiendita', price: 72 }
    ]
  },
  {
    id: '23',
    name: 'Helado Nestlé Galáctea sabor Leche Condensada 527 g',
    description: 'Ideal para consentirte en todo momento. Disfruta de un postre delicioso y cremoso. Explora y encuentra la gran variedad de Helados Nestlé.',
    image: '/lovable-uploads/edb8d606-e701-42fe-b33f-283c94c321a3.png',
    categoryId: '11',
    companyId: '5',
    publicPrice: 80.00,
    prices: [
      { clientType: 'mayoreo', price: 70 },
      { clientType: 'distribuidor', price: 75 },
      { clientType: 'tiendita', price: 78 }
    ]
  },
  {
    id: '24',
    name: 'Helado Nestlé napolitano 3L',
    description: 'Tamaño ideal para compartir. La perfecta combinación de sabor. Delicioso sabor chocolate, fresa y vainilla.',
    image: '/lovable-uploads/c7eb4f74-716d-43cb-bd96-1d04117ccfa4.png',
    categoryId: '11',
    companyId: '5',
    publicPrice: 180.00,
    prices: [
      { clientType: 'mayoreo', price: 160 },
      { clientType: 'distribuidor', price: 170 },
      { clientType: 'tiendita', price: 175 }
    ]
  },
  {
    id: '25',
    name: 'Helado Nestlé pasión de mokaccino con chispas de chocolate 738 g',
    description: 'Helado cremoso con delicioso sabor mokaccino y chispas de chocolate. Disfrútalo como postre, ideal para compartir.',
    image: '/lovable-uploads/c579bd28-9845-4b4d-9492-c8b402edcc3a.png',
    categoryId: '11',
    companyId: '5',
    publicPrice: 75.00,
    prices: [
      { clientType: 'mayoreo', price: 65 },
      { clientType: 'distribuidor', price: 70 },
      { clientType: 'tiendita', price: 72 }
    ]
  },
  {
    id: '26',
    name: 'Paleta helada Nestlé sabor fresa de 83 g',
    description: 'Disfrútalo como postre. Con trozos de fruta. Almacenar a una temperatura de -18° C.',
    image: '/lovable-uploads/b7afd1d3-8981-42d4-b871-e58a2d48207c.png',
    categoryId: '12',
    companyId: '5',
    publicPrice: 32.00,
    prices: [
      { clientType: 'mayoreo', price: 28 },
      { clientType: 'distribuidor', price: 30 },
      { clientType: 'tiendita', price: 31 }
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

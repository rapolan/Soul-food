import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'cajeta-clasica',
    name: 'Clásica',
    tagline: 'The Goat Milk Original',
    description: 'Slow-cooked goat milk caramel using a recipe passed down through four generations. Rich, creamy, and undeniably authentic.',
    price: 12.00,
    weight: '320g',
    image: 'https://picsum.photos/400/600?random=1', // Placeholder for jar
    bgColor: '#b45309', // Caramel color
    ingredients: [
      { name: 'Goat Milk', isAllergen: true },
      { name: 'Cane Sugar' },
      { name: 'Cinnamon' },
      { name: 'Baking Soda' }
    ],
    story: 'Our Clásica brings the heart of Celaya to your table. Stirred in copper pots for 8 hours until the perfect golden hue is achieved.'
  },
  {
    id: 'cajeta-envinada',
    name: 'Envinada',
    tagline: 'Infused with Aged Rum',
    description: 'A sophisticated twist on the classic. We add a splash of aged Mexican rum during the final cooling process for a warm, complex finish.',
    price: 14.00,
    weight: '320g',
    image: 'https://picsum.photos/400/600?random=2', 
    bgColor: '#78350f', // Darker
    ingredients: [
      { name: 'Goat Milk', isAllergen: true },
      { name: 'Cane Sugar' },
      { name: 'Aged Rum' },
      { name: 'Vanilla Bean' }
    ],
    story: 'Inspired by the festive spirits of late-night fiestas. The alcohol cooks off, leaving behind oaky notes that pair perfectly with hard cheeses.'
  },
  {
    id: 'cajeta-vainilla',
    name: 'Vainilla',
    tagline: 'Real Papantla Vanilla',
    description: 'Infused with whole vanilla beans from Papantla. A floral, aromatic experience that transforms simple toast into a delicacy.',
    price: 13.50,
    weight: '320g',
    image: 'https://picsum.photos/400/600?random=3', 
    bgColor: '#d97706', // Golden
    ingredients: [
      { name: 'Goat Milk', isAllergen: true },
      { name: 'Cane Sugar' },
      { name: 'Papantla Vanilla Bean' }
    ],
    story: 'We source our vanilla directly from family farms in Veracruz. You can see the specks of real vanilla bean in every spoonful.'
  },
  {
    id: 'cajeta-quemada',
    name: 'Quemada',
    tagline: 'Dark Roast & Smoky',
    description: 'Cooked past the breaking point to achieve a bittersweet, smoky flavor profile. Not for the faint of heart.',
    price: 13.00,
    weight: '320g',
    image: 'https://picsum.photos/400/600?random=4', 
    bgColor: '#451a03', // Almost black/brown
    ingredients: [
      { name: 'Goat Milk', isAllergen: true },
      { name: 'Brown Sugar' },
      { name: 'Sea Salt' }
    ],
    story: 'Known as the "Baker\'s Choice", this robust cajeta stands up to strong flavors like coffee and chocolate.'
  }
];

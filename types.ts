export interface Ingredient {
  name: string;
  isAllergen?: boolean;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  weight: string;
  image: string; // URL
  bgColor: string; // Tailwind class equivalent hex or specific color for the card
  ingredients: Ingredient[];
  story: string;
}

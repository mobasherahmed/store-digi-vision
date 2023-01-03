export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: rate;
}

interface rate {
  rate: number;
  count: number;
}

export const intialProduct: Product = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  image: '',
  category: '',
  rating: { rate: 0, count: 0 },
}

export interface Product {
  _id: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  quantity: number;
  images: string[];
  location?: string;
}

export enum ProductView {
  BIG = "BIG",
  SMALL = "SMALL",
}

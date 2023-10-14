export interface Product {
  _id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  quantity: number;
  images?: string[];
  location?: string;
}

//need to add active and inactive property to users and products

export interface ProductImage {
  link: "string";
}

export enum ProductView {
  BIG = "BIG",
  SMALL = "SMALL",
}

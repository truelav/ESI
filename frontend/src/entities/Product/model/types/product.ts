export interface Product {
  updatedAt: string;
  map(
    arg0: (
      product: import("./product").Product
    ) => import("react/jsx-runtime").JSX.Element
  ): import("react/jsx-runtime").JSX.Element;
  _id: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  quantity: number;
  images: string;
  model: string;
  upc: string;
}

//need to add active and inactive property to users and products

export interface ProductImage {
  link: "string";
}

export enum ProductView {
  BIG = "BIG",
  SMALL = "SMALL",
}

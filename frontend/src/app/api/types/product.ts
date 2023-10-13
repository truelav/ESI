export interface Product {
  map(
    arg0: (
      product: import("../../../entities/Product/model/types/product").Product
    ) => import("react/jsx-runtime").JSX.Element
  ): import("react/jsx-runtime").JSX.Element;
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

export interface GroupedProducts {
    brand: string;
    products: ProductN[]
}

export interface Brand {
    
}

export interface ProductN {
    map(
      arg0: (
        product: import("./product").ProductN
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
    updatedAt: string;
  }
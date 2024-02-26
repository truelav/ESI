export interface Product {
    map(
        arg0: (
            product: import("./product").Product
        ) => import("react/jsx-runtime").JSX.Element
    ): import("react/jsx-runtime").JSX.Element;
    _id?: string;
    name: string;
    brand: string;
    updatedAt: string;
    description: string;
    category: string;
    subcategory: string;
    price?: string;
    quantity?: number;
    images?: File | null | Blob | string;
    model: string;
    upc: string;
}

export interface filterCategory {
    name: string;
    subcategories: string[]
}

export interface ProductsAPIData extends Product {
    allProducts: Product[];
    categories: filterCategory[];
}

//need to add active and inactive property to users and products

export interface ProductImage {
    link: "string";
}

export enum ProductView {
    BIG = "BIG",
    SMALL = "SMALL",
}


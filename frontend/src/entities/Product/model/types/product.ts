export interface Product {
    _id?: string;
    name: string;
    brand: string;
    updatedAt: string;
    description: string;
    category: string;
    subcategory: string;
    price?: string;
    quantity?: number;
    images?: string | undefined;
    model: string;
    upc: string;
    isActive: boolean;
}

export interface filterCategory {
    name: string;
    subcategories: string[];
}

export interface ProductsAPIData extends Product {
    allProducts: Product[];
    categories: filterCategory[];
}

export interface GroupedProducts {}

//need to add active and inactive property to users and products

export interface ProductImage {
    link: "string";
}

export enum ProductView {
    BIG = "BIG",
    SMALL = "SMALL",
}

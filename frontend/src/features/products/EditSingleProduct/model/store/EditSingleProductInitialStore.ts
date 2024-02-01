export interface productInitialStoreTypes {
    _id: string,
    brand: string,
    model: string,
    description: string,
    category: string,
    subcategory: string,
    price: string,
    quantity: string,
    upc: string,
    images: null | string | Blob,
    newImage: string,
    features: Array<string>,
    newFeature: string
}

export const initialStore = {
    _id: "",
    brand: "",
    model: "",
    description: "",
    category: "",
    subcategory: "",
    price: "",
    quantity: "",
    upc: "",
    images: null,
    newImage: "",
    features: [],
    newFeature: ""
}
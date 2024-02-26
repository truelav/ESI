import { Product } from "../types/product";

export const updateProductsBySearchTerm = (products: Product[], searchTerm: string) => {
    const filteredProducts = products.filter((product: Product) =>
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) || product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredProducts
}

export const updateProductsByFilter = (products: Product[], selectedFilters: string[]) => {
    const filteredProducts = products.filter((product: Product) =>
        selectedFilters.includes(product.subcategory)
    );
    return filteredProducts
}

export const updateProductsByFilterCategoryAndSubcategory = () => {

}

export const updateProductsBySort = (products: Product[], selectedSort) => {
    const filteredProducts = [...products];
    const sortBy: string = selectedSort.name

    filteredProducts.sort((a: Product, b: Product) => {
        if(selectedSort.ascending){
            return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
            return a[sortBy] > b[sortBy] ? -1 : 1;
        }
    });
    return filteredProducts
}


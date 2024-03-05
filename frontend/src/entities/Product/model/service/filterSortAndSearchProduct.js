export const updateProductsBySearchTerm = (products, searchTerm) => {
    const filteredProducts = products.filter((product) => product.description.toLowerCase().includes(searchTerm.toLowerCase()) || product.brand.toLowerCase().includes(searchTerm.toLowerCase()));
    return filteredProducts;
};
export const updateProductsByFilter = (products, selectedFilters) => {
    const filteredProducts = products.filter((product) => selectedFilters.includes(product.subcategory));
    return filteredProducts;
};
export const updateProductsByFilterCategoryAndSubcategory = (products, selectedCategories, selectedSubcategories) => {
    const filteredProducts = products.filter((product) => selectedCategories.includes(product.category) || selectedSubcategories.includes(product.subcategory));
    console.log(filteredProducts);
    return filteredProducts;
};
export const updateProductsBySort = (products, selectedSort) => {
    const filteredProducts = [...products];
    const sortBy = selectedSort.name;
    filteredProducts.sort((a, b) => {
        if (selectedSort.ascending) {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        }
        else {
            return a[sortBy] > b[sortBy] ? -1 : 1;
        }
    });
    return filteredProducts;
};

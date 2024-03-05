import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import { updateProductsBySearchTerm, updateProductsBySort, updateProductsByFilterCategoryAndSubcategory } from "../../model/service/filterSortAndSearchProduct";
const ProductList = (props) => {
    const { products, searchTerm } = props;
    const selectedCategories = useSelector(state => state.filter.categories);
    const selectedSubCategories = useSelector(state => state.filter.subcategories);
    const selectedSort = useSelector(state => state.sort.selectedSort);
    const filteredAndSortedProducts = useMemo(() => {
        let filteredProducts = products || [];
        if (searchTerm) {
            filteredProducts = updateProductsBySearchTerm(filteredProducts, searchTerm);
        }
        if (selectedCategories.length || selectedSubCategories.length) {
            filteredProducts = updateProductsByFilterCategoryAndSubcategory(filteredProducts, selectedCategories, selectedSubCategories);
        }
        if (selectedSort.name) {
            filteredProducts = updateProductsBySort(filteredProducts, selectedSort);
        }
        return filteredProducts;
    }, [searchTerm, products, selectedSort, selectedCategories, selectedSubCategories]);
    return (_jsxs(_Fragment, { children: [_jsx("h2", { children: "Product List: " }), _jsx("div", { children: filteredAndSortedProducts.map((product) => (_jsx(ProductListItem, { product: product }, "" + product._id))) })] }));
};
export default ProductList;

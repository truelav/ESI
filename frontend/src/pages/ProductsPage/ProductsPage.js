import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid, GridItem } from "@chakra-ui/react";
import { useGetAllProductsQuery } from "../../app/api/apiSlice";
import { setFilters } from "../../features/products/FilterProducts/model/slice/filterSlice";
import { ProductSearchBar } from "../../entities/Product/ui/ProductSearchBar/ProductSearchBar";
import { ProductSortBar } from "../../entities/Product/ui/ProductSortBar/ProductSortBar";
import ProductList from "../../entities/Product/ui/ProductList/ProductList";
import FilterBar from "../../features/products/FilterProducts/ui/FilterBar/FilterBar";
const ProductsPage = () => {
    const dispatch = useDispatch();
    const { data, isLoading, isSuccess, isError, error, } = useGetAllProductsQuery();
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        if (data) {
            const filterList = data.categories;
            dispatch(setFilters(filterList));
        }
    }, [data, dispatch]);
    let content = _jsx("div", {});
    if (isLoading) {
        content = _jsx(_Fragment, { children: "Loading Products..." });
    }
    if (isError) {
        content = _jsxs(_Fragment, { children: ["No Products Found : ", JSON.stringify(error)] });
    }
    if (isSuccess) {
        content = (_jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 3, children: _jsx(FilterBar, {}) }), _jsxs(GridItem, { colSpan: 9, children: [_jsx(ProductSearchBar, { searchTerm: searchTerm, setSearchTerm: setSearchTerm }), _jsx(ProductSortBar, {}), _jsx(ProductList, { products: data.allProducts, searchTerm: searchTerm })] })] }));
    }
    return content;
};
export default ProductsPage;

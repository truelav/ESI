import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { selectAllProducts, deselectAllProducts } from "../../../entities/Product/model/slice/productSlice";
import { DashProductListHead } from "./DashProductListHead";
import { useGetAllProductsQuery } from "../../../app/api/apiSlice";
import { ProductItem } from "../../../shared/ui/Product/ProductItem/ProductItem";
export const DashProductsList = memo(() => {
    const dispatch = useDispatch();
    const { data, isLoading, isSuccess, isError, error, } = useGetAllProductsQuery();
    const [areAllProductsSelected, setAreAllProductsSelected] = useState(false);
    const allProductIds = data?.allProducts.map((product) => product._id);
    const handleToggleSelectAllProducts = () => {
        if (areAllProductsSelected) {
            dispatch(deselectAllProducts());
            setAreAllProductsSelected(false);
        }
        else {
            dispatch(selectAllProducts(allProductIds));
            setAreAllProductsSelected(true);
        }
    };
    let content = _jsx("div", {});
    if (isLoading) {
        content = _jsx(_Fragment, { children: "Loading..." });
    }
    if (isError) {
        content = _jsxs(_Fragment, { children: ["No Products Found : ", JSON.stringify(error)] });
    }
    if (isSuccess) {
        content = (_jsxs(_Fragment, { children: [_jsx(DashProductListHead, {}), data?.allProducts?.length > 0 && (_jsx(Button, { onClick: () => handleToggleSelectAllProducts(), children: _jsx(Text, { children: areAllProductsSelected ? `Deselect All Products` : `Select All Products` }) })), data?.allProducts?.map((product) => (_jsx(ProductItem, { product: product }, product._id)))] }));
    }
    return (_jsx(_Fragment, { children: content }));
});

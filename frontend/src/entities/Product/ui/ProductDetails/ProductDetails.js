import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../../app/api/apiSlice";
import { ProductDetailsImage } from "./ProductsDetailsImage";
import { ProductDetailsInfo } from "./ProductDetailsInfo";
export const ProductDetails = memo(() => {
    const { id } = useParams();
    const { data: product, isLoading, isSuccess, isError, error, } = useGetSingleProductQuery(id);
    let content = _jsx("div", {});
    if (isLoading) {
        content = _jsx(_Fragment, { children: "Loading..." });
    }
    if (isError) {
        content = _jsxs(_Fragment, { children: ["No Products Found : ", error] });
    }
    if (isSuccess) {
        content = (_jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 6, children: _jsx(ProductDetailsImage, { images: [product?.images] || [] }) }), _jsx(GridItem, { colSpan: 6, children: _jsx(ProductDetailsInfo, { product: product }) })] }));
    }
    return (_jsx(_Fragment, { children: _jsx("div", { children: content }) }));
});

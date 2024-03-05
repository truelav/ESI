import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { DashProductDetails } from "../../../components/products/DashProductDetails/DashProductDetails";
import { useGetSingleProductQuery } from "../../../app/api/apiSlice";
const DashProductDetailsPage = memo(() => {
    const { id } = useParams() || "";
    const { data: product, isLoading, isSuccess, isError, error, } = useGetSingleProductQuery(id);
    let content = _jsx("div", {});
    if (isLoading) {
        content = _jsx(_Fragment, { children: "Loading..." });
    }
    if (isError) {
        content = _jsxs(_Fragment, { children: ["No Products Found : ", error] });
    }
    if (isSuccess) {
        content = _jsx(DashProductDetails, { product: product });
    }
    return (_jsx("div", { className: "dash_products_page_wrapper", children: content }));
});
export default DashProductDetailsPage;

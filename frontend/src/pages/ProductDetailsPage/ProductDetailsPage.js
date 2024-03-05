import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
// Product Item Page
import { Container } from "@chakra-ui/react";
import { ProductDetails } from "../../entities/Product/ui/ProductDetails/ProductDetails";
function ProductDetailsPage() {
    return (_jsx(_Fragment, { children: _jsx(Container, { maxW: "full", minH: "700px", mt: "100px", centerContent: true, overflow: "hidden", children: _jsx(ProductDetails, {}) }) }));
}
export default ProductDetailsPage;

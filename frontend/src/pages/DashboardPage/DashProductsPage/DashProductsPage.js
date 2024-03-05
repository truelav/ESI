import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ButtonGroup, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useDeleteMultipleProductsMutation } from "../../../app/api/apiSlice";
import { deselectAllProducts } from "../../../entities/Product/model/slice/productSlice";
import { DashProductsList } from "../../../components/products/DashProductsList/DashProductsList";
import ImportProductsModal from "../../../shared/ui/Modals/ImportProducts/ImportProductsModal";
import "./styles.css";
import ErrorText from "../../../shared/ui/Error/ErrorText";
function DashProductsPage() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedProductIds = useSelector((state) => state.product.selectedProductIds);
    const dispatch = useDispatch();
    const [deleteMultipleProducts, { isLoading, isError, isSuccess, error }] = useDeleteMultipleProductsMutation();
    const handleDeleteProducts = () => {
        deleteMultipleProducts(selectedProductIds);
        dispatch(deselectAllProducts());
    };
    // console.log(selectedProductIds)
    let content = (_jsx(_Fragment, {}));
    if (isError) {
        content = (_jsxs(_Fragment, { children: [_jsx(ErrorText, { errorMessage: "There was an error fetching products " }), console.log(error)] }));
    }
    if (isLoading) {
        content = _jsx("div", { children: "...Loading Dashboard Products" });
    }
    if (isSuccess) {
        content = _jsx("div", { children: "Deleted" });
    }
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "dash_products_page_wrapper", children: [_jsxs(Grid, { templateColumns: 'repeat(12, 1fr)', gap: 4, children: [_jsx(GridItem, { colSpan: 8 }), _jsx(GridItem, { colSpan: 4, children: _jsxs(ButtonGroup, { children: [_jsx(ImportProductsModal, {}), _jsx(Link, { to: "addSingleProduct", children: _jsx(Button, { className: "dash_products_nav_button", colorScheme: 'blue', children: _jsx(Text, { children: "Add Product" }) }) }), _jsx(Button, { className: "dash_products_nav_button", colorScheme: 'red', onClick: () => handleDeleteProducts(), children: _jsx(Text, { children: "Delete Products" }) })] }) })] }), content, _jsx(DashProductsList, {})] }) }));
}
export default DashProductsPage;

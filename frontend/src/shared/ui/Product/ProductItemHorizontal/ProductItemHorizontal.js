import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, GridItem, Image, Button, Checkbox, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useDeleteSingleProductMutation } from "../../../../app/api/apiSlice";
import { addSelectedProduct, removeSelectedProduct } from "../../../../entities/Product/model/slice/productSlice";
import CardComponent, { CardVariants } from "../Card/CardComponent";
import { CardTextComponent } from "../Card/CardText";
import fallback_image from "/fallback_image.jpeg";
export const ProductItemHorizontal = memo((props) => {
    const dispatch = useDispatch();
    const { product, isSelected } = props;
    const [deleteSingleProduct, { isLoading, isError, isSuccess }] = useDeleteSingleProductMutation();
    const handleAddRemoveId = (id) => {
        if (isSelected) {
            dispatch(removeSelectedProduct(id));
        }
        else {
            dispatch(addSelectedProduct(id));
        }
    };
    if (isError) {
        return _jsx("div", { children: "...Some Error Has Occured with this Product" });
    }
    if (isLoading) {
        return _jsx("div", { children: "...Loading" });
    }
    if (isSuccess) {
        return _jsx("div", { children: "Deleted" });
    }
    return (_jsx(CardComponent, { cardVariant: CardVariants.outline, additionalClassNames: "Dash_ProductListItem", children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 1, children: _jsx(Box, { children: _jsx(Checkbox, { size: "lg", isChecked: isSelected, onChange: () => 
                            // handleToggleSelectProducts(product?._id)
                            handleAddRemoveId(product?._id), children: "Check" }) }) }), _jsx(GridItem, { colSpan: 10, children: _jsx(Link, { to: `/dashboard/products/${product?._id}`, children: _jsxs(Grid, { templateColumns: "repeat(6, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 1, children: _jsx(Image
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    , { 
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        src: product?.images, fallbackSrc: fallback_image, alt: product?.brand, boxSize: "100px", objectFit: "contain" }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: product?.brand }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: product?.model }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Active" }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: product?.quantity }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: product?.updatedAt }) })] }) }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(Button, { onClick: () => deleteSingleProduct(product._id), children: _jsx(FaTrash, {}) }) })] }) }));
});

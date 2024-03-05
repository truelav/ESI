import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { deleteFromCart } from "../../../Profile/model/profileSlice";
import CardComponent, { CardVariants } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import fallback_image from "/fallback_image.jpeg";
export const CartListItem = (props) => {
    const dispatch = useDispatch();
    const { product } = props;
    const handleRemoveProductFromCart = () => {
        dispatch(deleteFromCart(product._id));
    };
    return (_jsx(CardComponent, { cardVariant: CardVariants.outline, additionalClassNames: "Dash_ProductListItem", children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 2, children: _jsx(Image
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    , { 
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        src: product?.images, fallbackSrc: fallback_image, alt: product?.brand, boxSize: "100px", objectFit: "contain" }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: product?.brand }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: product?.model }) }), _jsx(GridItem, { colSpan: 1 }), _jsx(GridItem, { colSpan: 2, children: _jsxs(CardTextComponent, { children: ["$", product.price, ".00"] }) }), _jsx(GridItem, { colSpan: 2, children: _jsxs(CardTextComponent, { children: ["$", product.upc] }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(Button, { onClick: handleRemoveProductFromCart, children: _jsx(FaTrash, {}) }) })] }) }));
};

import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Button, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../entities/Profile/model/profileSlice";
const AddToCart = (props) => {
    const { product } = props;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.profile.cart);
    const isProductsInCart = cart.includes(product);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    let content = _jsx(_Fragment, {});
    if (isProductsInCart) {
        content = (_jsx(Button, { variant: 'solid', colorScheme: 'blue', isDisabled: true, children: "Product Added" }));
    }
    else {
        content = (_jsx(Button, { variant: 'solid', colorScheme: 'blue', onClick: () => handleAddToCart(product), children: "Add to cart" }));
    }
    return (_jsx(Box, { children: content }));
};
export default AddToCart;

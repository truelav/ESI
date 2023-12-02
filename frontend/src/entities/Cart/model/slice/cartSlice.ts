import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../Product/model/types/product";

interface cartProductTypes extends Product {
    quantity: number
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalAmount: 0
    },
    reducers: {
        addProductToCart: (state, action) => {
            const cartProduct: cartProductTypes = action.payload;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (cartProduct) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
                cartProduct.quantity = quantity;
              } else {
                // If the product is not in the cart, add it
                state.products.push(cartProduct);
              }
        },
        removeProductFromCart: (state, action) => {
            state.products = state.products.filter(
                (id) => id !== action.payload
            );
        },
        setProductNumber: (state, action) => {
            const { productId, quantity } = action.payload;
            const cartItem = state.products.find((product: Product) => product._id === productId);
      
            if (cartItem) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
              cartItem.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.products = [];
        },
    },
});

export const {  addProductToCart,  removeProductFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

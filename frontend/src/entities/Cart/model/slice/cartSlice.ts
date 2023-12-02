import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../Product/model/types/product";

export interface cartProductType extends Product {
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
            const cartProduct: cartProductType = action.payload.product;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            console.log(cartProduct)
            cartProduct.quantity = action.payload.quantity;
            state.products.push(cartProduct);
            if (cartProduct) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
              } else {
                // If the product is not in the cart, add it
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

export const {  addProductToCart,  removeProductFromCart, setProductNumber, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    totalAmount: 0,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const cartProd = action.payload;
            const { cartQuantity } = cartProd;
            const { price } = cartProd.product;
            const subTotal = price * cartQuantity;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const index = state.products.findIndex(({ product }) => product._id === cartProd.product._id);
            // console.log(index)
            if (index > -1) {
                state.totalAmount += subTotal;
                state.products[index].cartQuantity++;
            }
            else {
                // state.products.push({id: cartProd.product._id});
                state.products.push(cartProd);
                state.totalAmount += subTotal;
            }
        },
        removeProductFromCart: (state, action) => {
            const prodId = action.payload;
            state.products = state.products.filter(({ product }) => product._id !== prodId);
        },
        updateCart: (state, action) => {
            const { productId, quantity } = action.payload;
            const cartItem = state.products.find((product) => product._id === productId);
            if (cartItem) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                cartItem.quantity = quantity;
            }
        },
        clearCart: (state) => {
            console.log(state);
            state.products = [];
            state.totalAmount = 0;
        },
    },
});
export const { addProductToCart, removeProductFromCart, updateCart, clearCart, } = cartSlice.actions;
export default cartSlice.reducer;

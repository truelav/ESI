import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
    isAuthenticated: false,
    cart: [],
    orders: []
};
const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setAuthenticated(state, action) {
            state.isAuthenticated = action.payload;
        },
        addToCart(state, action) {
            if (!state.cart.includes(action.payload)) {
                state.cart.push(action.payload);
            }
        },
        deleteFromCart(state, action) {
            const cartProducts = state.cart;
            console.log(cartProducts, action.payload);
            state.cart = cartProducts.filter((product) => product._id !== action.payload);
        },
        clearCart(state) {
            state.cart = [];
        },
        addOrder(state, action) {
            state.orders.push(action.payload);
        }
    },
});
export const { setUser, setAuthenticated, addToCart, addOrder, deleteFromCart, clearCart } = profileSlice.actions;
export default profileSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, CartItem, Order, ProfileState } from "./profile.types"

const initialState: ProfileState = {
    user: null,
    isAuthenticated: false,
    cart: [],
    orders: []
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        setAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
        },
        addToCart(state, action: PayloadAction<CartItem>) {
            state.cart.push(action.payload);
        },
        addOrder(state, action: PayloadAction<Order>) {
            state.orders.push(action.payload);
        }
    },
});

export const {
    setUser, setAuthenticated, addToCart, addOrder
} = profileSlice.actions;

export default profileSlice.reducer;

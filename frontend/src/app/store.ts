import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "../features/auth/slice/authSlice";
import cartSlice from "../entities/Cart/model/slice/cartSlice";
import productSlice from "../entities/Product/model/slice/productSlice";
import filterSlice from "../features/products/FilterProducts/model/slice/filterSlice";
import sortSlice from "../features/products/SortProducts/model/slice/sortSlice";
import editSingleProductSlice from "../features/products/EditSingleProduct/model/slice/editSingleProductSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        product: productSlice,
        filter: filterSlice,
        sort: sortSlice,
        cart: cartSlice,
        editSingleProduct: editSingleProductSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user: UserState, ticket: TicketState}
export type AppDispatch = typeof store.dispatch;

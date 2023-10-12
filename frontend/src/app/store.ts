import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
// import { userSlice } from "../entities/User/model/slice/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user: UserState, ticket: TicketState}
export type AppDispatch = typeof store.dispatch;
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        totalProducts: 0,
        totalBrands: 0,
        totalCategories: 0,
        products: [],
    },
    reducers: {
        setTotalProducts: (state, action) => {
            state.totalProducts = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setTotalProducts } = productSlice.actions;
export default productSlice.reducer;

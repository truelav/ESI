import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        categoryProducts: {},
        metadataProducts: {
            totalProducts: 0,
            totalBrands: 0,
            totalCategories: 0
        }
    },
    reducers: {
        setTotalProducts: (state, action) => {
            state.metadataProducts = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setCategoryProducts: (state, action) => {
            state.categoryProducts = action.payload
        }
    },
});

export const { setTotalProducts, setProducts, setCategoryProducts } = productSlice.actions;
export default productSlice.reducer;

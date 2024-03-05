import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        selectedProductIds: [],
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
            state.categoryProducts = action.payload;
        },
        addSelectedProduct: (state, action) => {
            state.selectedProductIds.push(action.payload);
        },
        removeSelectedProduct: (state, action) => {
            state.selectedProductIds = state.selectedProductIds.filter((id) => id !== action.payload);
        },
        addSelectedProductCategory: (state, action) => {
            const newIds = action.payload.filter((id) => !state.selectedProductIds.includes(id));
            state.selectedProductIds = [...state.selectedProductIds, ...newIds];
        },
        removeSelectedProductCategory: (state, action) => {
            // Remove the specified ids
            state.selectedProductIds = state.selectedProductIds.filter((id) => !action.payload.includes(id));
        },
        selectAllProducts: (state, action) => {
            state.selectedProductIds = [];
            state.selectedProductIds = [...action.payload];
        },
        deselectAllProducts: (state) => {
            state.selectedProductIds = [];
        },
    },
});
export const { setTotalProducts, setProducts, setCategoryProducts, addSelectedProduct, removeSelectedProduct, addSelectedProductCategory, removeSelectedProductCategory, selectAllProducts, deselectAllProducts, } = productSlice.actions;
export default productSlice.reducer;

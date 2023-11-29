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
            state.categoryProducts = action.payload
        },
        addSelectedProduct: (state, action) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            state.selectedProductIds.push(action.payload);
          },
        removeSelectedProduct: (state, action) => {
            state.selectedProductIds = state.selectedProductIds.filter(
                (id) => id !== action.payload
            );
        },
        clearSelectedProducts: (state) => {
            state.selectedProductIds = [];
        },
    },
});

export const { setTotalProducts, setProducts, setCategoryProducts, addSelectedProduct,  removeSelectedProduct, clearSelectedProducts} = productSlice.actions;
export default productSlice.reducer;

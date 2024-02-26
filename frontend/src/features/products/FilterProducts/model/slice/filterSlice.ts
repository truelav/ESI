import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filters: [],
        categories: [], 
        subcategories: [] 
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        viewAllCategories: (state) => {
            state.categories = [];
            state.subcategories = []
        },
        toggleCategory(state, action) {
            const { category, subcategories } = action.payload;
            if (state.categories.includes(category)) {
              // Deselect category and its subcategories
              state.categories = state.categories.filter(cat => cat !== category);
              state.subcategories = state.subcategories.filter(subcat => !subcategories.includes(subcat));
            } else {
              // Select category and its subcategories
              state.categories.push(category);
              state.subcategories.push(...subcategories);
            }
          },
          toggleSubcategory(state, action) {
            const { category, subcategory } = action.payload;
            if (state.subcategories.includes(subcategory)) {
              state.subcategories = state.subcategories.filter(subcat => subcat !== subcategory);
            } else {
              state.subcategories.push(subcategory);
            }
          }
    },
});

export const { 

    setFilters,
    viewAllCategories,
    toggleCategory,
    toggleSubcategory

} = filterSlice.actions;
    
export default filterSlice.reducer;

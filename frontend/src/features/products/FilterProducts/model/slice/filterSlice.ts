import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filters: [],
        selectedFilters: [],
        selectedSubcategories: [],
        categories: [], // Array of selected categories
        subcategories: [] // Array of selected subcategories
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        addSelectedFilter: (state, action) => {
            const category = action.payload
            state.selectedFilters.push(category);
        },
        removeSelectedFilter: (state, action) => {
            state.selectedFilters = state.selectedFilters.filter((filter) => filter !== action.payload);
        },
        deselectAllFilters: (state) => {
            state.selectedFilters = [];
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
    addSelectedFilter,
    removeSelectedFilter,
    deselectAllFilters,
    toggleCategory,
    toggleSubcategory

} = filterSlice.actions;
    
export default filterSlice.reducer;

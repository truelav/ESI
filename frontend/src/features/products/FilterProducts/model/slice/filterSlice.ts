import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filters: [],
        selectedFilters: [],
        selectedSubcategories: [],
        metadataFilters: {
            totalFilters: 0,
        }
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
    },
});

export const { 
    setFilters,
    addSelectedFilter,
    removeSelectedFilter,
    deselectAllFilters

} = filterSlice.actions;
    
export default filterSlice.reducer;

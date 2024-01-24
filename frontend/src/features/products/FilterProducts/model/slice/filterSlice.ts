import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filters: [],
        selectedFilters: [],
        metadataFilters: {
            totalFilters: 0,
        }
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        addSelectedFilter: (state, action) => {
            state.selectedFilters.push(action.payload);
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

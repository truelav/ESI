import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: "sort",
    initialState: {
        sortList: ["brand", "model", "inventory", "price", "upc"],
        selectedSort: {
            name: null, 
            ascending: false,
            descending: false
        },
        metadataSort: {
            totalSort: 0,
        }
    },
    reducers: {
        setSort: (state, action) => {
            const newSort = action.payload;
            if(state.selectedSort.name === newSort){
                if(state.selectedSort.ascending){
                    state.selectedSort.ascending = false
                    state.selectedSort.descending = true
                } else {
                    state.selectedSort.ascending = true
                    state.selectedSort.descending = false
                }
            } else {
                state.selectedSort.name = newSort
                state.selectedSort.ascending = true
            }
        },
    },
});

export const { setSort } = sortSlice.actions;
    
export default sortSlice.reducer;

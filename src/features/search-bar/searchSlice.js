import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: '',
    reducers: {
        setSearchTerm: (state, {payload}) => {
            return payload;
        }
    },
});


export default searchSlice.reducer;
export const {setSearchTerm} = searchSlice.actions;
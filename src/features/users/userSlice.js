import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        userEmail: null,
        userName: null, 
        userUid: null,
    },
    reducers: {
        setUser (state, {payload}) {
            state.userEmail = payload.userEmail;
            state.userUid = payload.userUid;
        },
    }
})


export const { setUser } = userSlice.actions;
export default userSlice.reducer;
export const getUser = (state) => state.user;
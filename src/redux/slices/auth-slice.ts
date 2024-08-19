import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceInitialState } from "../../types/initialStateTypes";

// eslint-disable-next-line
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: AuthSliceInitialState = {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user") as string),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;

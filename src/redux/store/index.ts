import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth-slice";
import productsSlice from "../slices/products-slice";
import { api } from "../api";
import likedSlice from "../slices/liked-slice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        auth: authSlice,
        [api.reducerPath]: api.reducer,
        liked: likedSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

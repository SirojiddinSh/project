import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../../types/dataTypes";
import { RootState } from "../../redux/store";

interface ProductsState {
    products: Car[];
    loading: boolean;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Car[]>) => {
            state.products = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { setProducts, setLoading } = productsSlice.actions;

export const selectProductById = (state: RootState, id: string) =>
    state.products?.products?.find((product) => product._id === id);

export default productsSlice.reducer;

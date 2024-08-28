// import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

interface IFormValues {
    name?: string | null;
    images?: string[] | [];
    description?: string | null;
    price?: number | null;
    status?: string | null;
    rent_price?: number | null;
    color: string | null;
    model?: string | null;
    category?: string | null;
    year?: number | null;
    fuel?: string | null;
    transmission?: string | null;
    seats?: number | null;
    colors?: string[] | [];
    thumbnail?: string | null;
    discount?: number | null;
    capacity_fuel?: number | null;
    usage_per_km?: number | null;
}

const initialState: IFormValues = {
    name: null,
    images: [],
    description: null,
    price: 0,
    status: "active",
    rent_price: 0,
    color: null,
    model: null,
    category: null,
    year: 0,
    fuel: null,
    transmission: null,
    seats: 0,
    colors: [],
    thumbnail: null,
    discount: 0,
    capacity_fuel: 0,
    usage_per_km: 0,
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        fillBasicInfo: (state, action) => {
            state.name = action.payload.name;
            state.description = action.payload.description;
            state.status = action.payload.status;
            state.model = action.payload.model;
            state.category = action.payload.category;
        },
        fillVisualInfo: (state, action) => {
            state.thumbnail = action.payload.thumbnail;
            state.images = action.payload.images;
        },
        fillTechnicalInfo: (state, action) => {
            state.price = action.payload.price;
            state.rent_price = action.payload.rent_price;
            state.color = action.payload.color;
            state.year = action.payload.year;
            state.fuel = action.payload.fuel;
            state.transmission = action.payload.transmission;
            state.seats = action.payload.seats;
            state.colors = action.payload.colors;
            state.discount = action.payload.discount;
            state.capacity_fuel = action.payload.capacity_fuel;
            state.usage_per_km = action.payload.usage_per_km;
        },
    },
});

export const { fillBasicInfo, fillVisualInfo, fillTechnicalInfo } =
    formSlice.actions;
export default formSlice.reducer;

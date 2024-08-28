// liked-slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../../types/dataTypes";

interface LikedState {
    likedCars: Car[];
}

const initialState: LikedState = {
    likedCars: JSON.parse(localStorage.getItem("likedCars") || "[]"),
};

const likedSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<Car>) => {
            const carIndex = state.likedCars.findIndex(
                (car) => car._id === action.payload._id
            );
            if (carIndex >= 0) {
                state.likedCars.splice(carIndex, 1);
            } else {
                state.likedCars.push(action.payload);
            }
            // localStorage'ga saqlash
            localStorage.setItem("likedCars", JSON.stringify(state.likedCars));
        },
    },
});

export const { toggleLike } = likedSlice.actions;

export default likedSlice.reducer;

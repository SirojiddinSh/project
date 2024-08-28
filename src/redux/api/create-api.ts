import { Car } from "../../types/dataTypes";
import { api } from "./index";

const createApi = api.injectEndpoints({
    endpoints: (build) => ({
        createCar: build.mutation<Car, FormData>({
            query: (body) => ({
                url: "/cars/create",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useCreateCarMutation } = createApi;

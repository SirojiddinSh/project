import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Dynamic from "../routes/dynamic/Dynamic";

const RouteController = () => {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "cars/:id",
            element: <Dynamic />,
        },
        {
            path: "dashboard",
            element: <div>Dashboard</div>,
        },
    ]);
};

export default RouteController;

import { Navigate, useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Dynamic from "../routes/dynamic/Dynamic";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import Auth from "./auth/Auth";
import Private from "../private/Private";
import Create from "./dashboard/create/Create";
import OTP from "./auth/otp/OTP";
import Liked from "./liked/Liked";

const RouteController = () => {
    const token = localStorage.getItem("token");

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
            path: "auth",
            element: token ? <Navigate to="/dashboard/create" /> : <Auth />,
            children: [
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Register />,
                },
                {
                    path: "otp",
                    element: <OTP />,
                },
            ],
        },
        {
            path: "dashboard",
            element: <Private />,
            children: [
                {
                    path: "create",
                    element: <Create />,
                },
            ],
        },
        {
            path: "liked",
            element: <Liked />,
        },
    ]);
};

export default RouteController;

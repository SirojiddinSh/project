import { Navigate, useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Dynamic from "../routes/dynamic/Dynamic";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import Auth from "./auth/Auth";
import Private from "../private/Private";
import Create from "./dashboard/create/Create";
import Otp from "./auth/otp/Otp";
import Liked from "./liked/Liked";
import Profile from "./profile/Profile";

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
                    path: "verify-otp",
                    element: <Otp />,
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
        {
            path: "profile",
            element: <Profile />,
        },
    ]);
};

export default RouteController;

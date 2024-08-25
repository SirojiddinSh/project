import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
    const token = localStorage.getItem("token");

    if (token) {
        return <Outlet />;
    } else {
        return <Navigate to="/auth/register" />;
    }
};

export default Private;

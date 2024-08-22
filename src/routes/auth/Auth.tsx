import { Outlet } from "react-router-dom";

const Auth = () => {
    return (
        <div className="w-full flex items-center justify-center  min-h-screen">
            <div className="max-w-[400px] w-full shadow-2xl p-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Auth;

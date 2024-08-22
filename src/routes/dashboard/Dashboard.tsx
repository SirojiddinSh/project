import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className=" w-full flex items-center justify-center flex-col min-h-screen">
            <div className="max-w-[800px] h-[720px] w-full shadow-2xl p-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;

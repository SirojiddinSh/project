import "./Header.css";
import Search from "../../images/search.png";
import Filter from "../../images/filter.png";
import Heart from "../../images/heart.png";
import Notification from "../../images/notification.png";
import Setting from "../../images/setting.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Cars = () => {
    const navigate = useNavigate();
    const likedCars = useSelector((state: RootState) => state.liked.likedCars);

    const navigateToSetting = () => {
        navigate("/dashboard/create");
    };

    const token = () => {
        const token = "uyhwujwswrdcrqsks-wswijjwnsds";
        localStorage.setItem("token", token);
    };

    return (
        <div className="w-full flex justify-center bg-white border-b-[1px]">
            <nav className=" max-w-[1500px] h-[125px] w-full flex justify-between items-center px-5 ">
                <div className="flex gap-20">
                    <h1 className="header-title">MORENT</h1>
                    <div className="header-search">
                        <img
                            className="w-[24px] h-[24px] ml-5 mt-2 cursor-pointer"
                            src={Search}
                            alt=""
                        />
                        <input
                            className="header-search-input"
                            placeholder="Search something here"
                            type="text"
                        />
                        <img
                            className="w-[24px] h-[24px] ml-3 mt-2 cursor-pointer"
                            src={Filter}
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <div
                        onClick={() => navigate("/liked")}
                        className="headerLinks"
                    >
                        <img src={Heart} alt="" />
                        <span className="absolute -top-1 right-[1px] text-fuchsia-700 font-semibold">
                            {likedCars?.length}
                        </span>
                    </div>
                    <div className="headerLinks">
                        <img src={Notification} alt="" />
                    </div>
                    <div onClick={navigateToSetting} className="headerLinks">
                        <img src={Setting} alt="" />
                    </div>
                    <img
                        onClick={() => navigate("/profile")}
                        className="w-[44px] h-[44px] rounded-full cursor-pointer"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt=""
                    />
                </div>
            </nav>
        </div>
    );
};

export default Cars;

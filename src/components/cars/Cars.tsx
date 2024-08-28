import "./Cars.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Car } from "../../types/dataTypes";
import gasStation from "../../images/gas-station.png";
import CarImg from "../../images/Car.png";
import Users from "../../images/profile-2user.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleLike as toggleLike2 } from "../../redux/slices/liked-slice";

type Props = {
    title: string;
    data: Car[] | undefined;
    isLoading: boolean;
};

const Cars = ({ data, title, isLoading }: Props) => {
    const [likedCars, setLikedCars] = useState<Car[]>([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const savedLikedCars = localStorage.getItem("likedCars");
        if (savedLikedCars) {
            setLikedCars(JSON.parse(savedLikedCars));
        }
    }, []);

    const moveToSingle = (car: Car) => {
        localStorage.setItem("car", JSON.stringify(car));
        navigate(`/cars/${car._id}`);
        window.scrollTo(0, 0);
    };

    const isLiked = (car: Car) =>
        likedCars.some((likedCar) => likedCar._id === car._id);

    const toggleLike = (car: Car) => {
        dispatch(toggleLike2(car));
        let updatedLikedCars;
        if (isLiked(car)) {
            updatedLikedCars = likedCars.filter(
                (likedCar) => likedCar._id !== car._id
            );
        } else {
            updatedLikedCars = [...likedCars, car];
        }
        setLikedCars(updatedLikedCars);
        localStorage.setItem("likedCars", JSON.stringify(updatedLikedCars));
    };

    return (
        <div>
            <div className="flex justify-between p-5">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title-link">View All</h2>
            </div>

            {isLoading ? (
                <div>Loading</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
                    {data?.map((car) => (
                        <div
                            className="card p-6 flex flex-col gap-3"
                            key={car._id}
                        >
                            {isLiked(car) ? (
                                <AiFillHeart
                                    style={{
                                        color: "red",
                                        fontSize: "30px",
                                        cursor: "pointer",
                                        position: "absolute",
                                        top: "20px",
                                        left: "250px",
                                    }}
                                    onClick={() => toggleLike(car)}
                                />
                            ) : (
                                <AiOutlineHeart
                                    style={{
                                        color: "red",
                                        fontSize: "30px",
                                        position: "absolute",
                                        top: "20px",
                                        left: "250px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => toggleLike(car)}
                                />
                            )}
                            <div>
                                <h2 className="card-title">{car.name}</h2>
                                <h3 className="card-subtitle">{car.fuel}</h3>
                            </div>
                            <img
                                onClick={() => moveToSingle(car)}
                                className="card-img"
                                src={car.thumbnail}
                                alt=""
                                width={230}
                                height={130}
                            />
                            <div
                                onClick={() => moveToSingle(car)}
                                className="img-opacity"
                            ></div>
                            <div className="info">
                                <div className="flex gap-1">
                                    <img src={gasStation} alt="" width={24} />
                                    <h3>{car.capacity_fuel}</h3>
                                </div>
                                <div className="flex gap-1">
                                    <img src={CarImg} alt="" width={24} />
                                    <h3>Manual</h3>
                                </div>
                                <div className="flex gap-1">
                                    <img src={Users} alt="" width={24} />
                                    <h3>{car.seats} People</h3>
                                </div>
                            </div>
                            <div className=" card-footer flex justify-between">
                                <h2 className="card-price">
                                    ${car.price}/{" "}
                                    <span>day {car.rent_price}</span>
                                </h2>
                                <button className="card-btn-RentNow">
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cars;

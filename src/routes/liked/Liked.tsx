import { useEffect, useState } from "react";
import { Car } from "../../types/dataTypes";
import { useNavigate } from "react-router-dom";
import gasStation from "../../images/gas-station.png";
import CarImg from "../../images/Car.png";
import Users from "../../images/profile-2user.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Liked = () => {
    const navigate = useNavigate();
    const [likedCars, setLikedCars] = useState<Car[]>([]);

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
        <div className="flex justify-center">
            <div className="max-w-[1400px] w-full min-h-screen m-0-auto">
                <h1 className="text-3xl font-bold py-5">
                    {likedCars.length} Liked Cars
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
                    {likedCars.map((car) => (
                        <div
                            className="card p-6 flex flex-col gap-3"
                            key={car._id}
                        >
                            {isLiked(car) ? (
                                <AiFillHeart
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
            </div>
        </div>
    );
};

export default Liked;

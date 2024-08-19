import "./Cars.css";
import { Car } from "../../types/dataTypes";
import gasStation from "../../images/gas-station.png";
import CarImg from "../../images/Car.png";
import Users from "../../images/profile-2user.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/products-slice";

type Props = {
    title: string;
    data: Car[] | undefined;
    isLoading: boolean;
};

const Cars = ({ data, title, isLoading }: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const moveToSingle = (car: Car) => {
        dispatch(setProducts([car]));
        navigate(`/cars/${car._id}`);
        window.scrollTo(0, 0);
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
                                    <h3>{car.seats}People</h3>
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

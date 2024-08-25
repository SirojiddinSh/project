import "./Dynamic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import Stars from "../../images/stars.png";
import { Car } from "../../types/dataTypes";
import { useEffect } from "react";

const Dynamic = () => {
    const product = JSON.parse(localStorage.getItem("car")!);
    const [likedCars, setLikedCars] = useState<Car[]>([]);

    console.log(product);

    const [currentThumbnail, setCurrentThumbnail] = useState(
        product?.thumbnail || ""
    );

    const [showFullDescription, setShowFullDescription] = useState(false);

    const renderRatingStars = () => {
        const fullStars = 4;
        const halfStar = 1;
        const maxRating = 5;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="star filled"
                />
            );
        }
        if (halfStar > 0) {
            stars.push(
                <FontAwesomeIcon
                    key={fullStars}
                    icon={faStarHalfAlt}
                    className="star filled"
                />
            );
        }
        for (let i = fullStars + halfStar; i < maxRating; i++) {
            stars.push(
                <FontAwesomeIcon key={i} icon={faStar} className="star empty" />
            );
        }
        return stars;
    };

    const removeHTMLTags = (str: string) => {
        return str.replace(/<\/?[^>]+(>|$)/g, "");
    };

    const truncatedDescription = removeHTMLTags(product.description).slice(
        0,
        150
    );

    useEffect(() => {
        const savedLikedCars = localStorage.getItem("likedCars");
        if (savedLikedCars) {
            setLikedCars(JSON.parse(savedLikedCars));
        }
    }, []);

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
            <div className="flex max-w-[1500px] w-full gap-10">
                <div className="max-w-[360px] w-full h-[2016px] bg-white"></div>
                <div className="w-full pt-10">
                    <div>
                        {product ? (
                            <div className="flex gap-10">
                                {/* Dynamic Car images */}
                                <div className="flex gap-10 flex-col">
                                    <div className="dynamic-car-info-img">
                                        <h2>
                                            Sports car with the best design and
                                            acceleration
                                        </h2>
                                        <img
                                            className="w-[392px] h-[510px]  rounded-[10px]"
                                            src={currentThumbnail}
                                            alt="Current Thumbnail"
                                        />
                                    </div>
                                    <div className="dynamic-car-info-images">
                                        {product?.images.map(
                                            (image: any, index: number) => (
                                                <img
                                                    className="w-[148px] h-[124px] rounded-[10px] cursor-pointer bg-blue-300"
                                                    key={index}
                                                    src={image}
                                                    alt={`Image ${index}`}
                                                    onClick={() =>
                                                        setCurrentThumbnail(
                                                            image
                                                        )
                                                    }
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Dynamic Car Info */}
                                <div className=" relative max-w-[492px] w-full  flex flex-col gap-10 p-6 bg-white rounded-[10px]">
                                    {isLiked(product) ? (
                                        <AiFillHeart
                                            style={{
                                                color: "red",
                                                fontSize: "25px",
                                                cursor: "pointer",
                                                position: "absolute",
                                                top: "20px",
                                                right: "20px",
                                            }}
                                            onClick={() => toggleLike(product)}
                                        />
                                    ) : (
                                        <AiOutlineHeart
                                            style={{
                                                color: "red",
                                                fontSize: "25px",
                                                position: "absolute",
                                                top: "20px",
                                                right: "20px",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => toggleLike(product)}
                                        />
                                    )}
                                    <div>
                                        <h2 className="dynamic-car-info-title">
                                            {product.name}
                                        </h2>
                                        <div className="flex gap-2">
                                            <div className="rating">
                                                {renderRatingStars()}
                                            </div>
                                            <p>440+ Reviewer</p>
                                        </div>
                                    </div>

                                    <p className="dynamic-car-info-text">
                                        {showFullDescription
                                            ? removeHTMLTags(
                                                  product.description
                                              )
                                            : `${truncatedDescription}...`}
                                    </p>
                                    <button
                                        onClick={() =>
                                            setShowFullDescription(
                                                !showFullDescription
                                            )
                                        }
                                        className="text-blue-500 cursor-pointer"
                                    >
                                        {showFullDescription
                                            ? "Show Less"
                                            : "Read More"}
                                    </button>

                                    <div className="flex justify-between">
                                        <div className="dynamic-car-info-details1">
                                            <h3>Type Car</h3>
                                            <h3>Steering </h3>
                                        </div>
                                        <div className="dynamic-car-info-details2">
                                            <h3>Sport</h3>
                                            <h3>Manual</h3>
                                        </div>
                                        <div className="dynamic-car-info-details1">
                                            <h3>Capacity</h3>
                                            <h3>{product.fuel} </h3>
                                        </div>
                                        <div className="dynamic-car-info-details2">
                                            <h3>{product.seats} Person</h3>
                                            <h3>{product.capacity_fuel}L</h3>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-10">
                                        <h2 className="dynamic-car-info-price">
                                            ${product.price}/ <span>days</span>
                                        </h2>
                                        <button className="card-btn-RentNow">
                                            Rent Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>Mahsulot topilmadi</p>
                        )}

                        {/* Reviews */}
                        <div className="w-full mt-[50px] bg-white rounded-[10px] p-5 pt-7 pb-20 flex flex-col gap-10">
                            <h2 className="dynamic-car-reviews-title">
                                Reviews
                                <span className="bg-blue-600 text-white px-[13px] py-[2px] rounded ml-5">
                                    13
                                </span>
                            </h2>
                            <div className="flex flex-col gap-10 ">
                                <div className="relative w-full flex gap-5">
                                    <img
                                        className=" absolute w-[100px] h-[56px] top-109 -right-1"
                                        src={Stars}
                                        alt=""
                                    />
                                    <img
                                        className="w-[56px] h-[56px] rounded-full"
                                        src="https://s3-alpha-sig.figma.com/img/9b76/706a/6ff04d2c5ee05f69f07eda85ba8c1846?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VZiQCkGYH84~M18GT8rGF5FQsLbyGbXvAtN9A2nN7iAOE0kQjxG~o5kKZ7zN~59Fe-MvaQpSrmtOZJ~unFj6zJvIXmvWeChpj8LYnKu~XoEmwvr1mVeLYyzAL6wk837chNZyLDi8lQXoEYCRU7hZrM2gOL8Y0sumhi6z1SAJKzKKxs0JGzuGkm4JD4SfFnW6mC-rAofbMoT7~L5ZcM4aSOw74VIQn3hmvaUqWXZtsZop8n7Dzg3snzJXl1Kuik8FQsX3R~YOLBmNPLHvFFvY4FXCkYOiLtnLQmGFKj2oadhOrXmNgUHQVQrlx54BSFTyyVZnFbhab5RQlTXFP92lVw__"
                                        alt=""
                                    />
                                    <div className="flex flex-col gap-2">
                                        <h2 className="reviews-user-name">
                                            Alex Stanton
                                        </h2>
                                        <h4 className="reviews-user-title">
                                            CEO at Bukalapak
                                        </h4>
                                        <p className="reviews-user-text">
                                            We are very happy with the service
                                            from the MORENT App. Morent has a
                                            low price and also a large variety
                                            of cars with good and comfortable
                                            facilities. In addition, the service
                                            provided by the officers is also
                                            very friendly and very polite.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative w-full flex gap-5">
                                    <img
                                        className=" absolute w-[100px] h-[56px] top-109 -right-1"
                                        src={Stars}
                                        alt=""
                                    />
                                    <img
                                        className="w-[56px] h-[56px] rounded-full"
                                        src="https://s3-alpha-sig.figma.com/img/1f59/2390/d69545d7cf9ff5be12e2248ebf54993a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ed088EiXFeKLAV~no27rUT-gUJsgC01RjdZjCYHHVZPFg3RGTKHRWXN0aDLKixWsU~53DXUC0RFUALLXN72c2fFmzcJXGLAFsgBN80zrrDEpoMKoeeik58j6Vzh0b4zyZOc2pKKU~rmxee6~vTFoSzCcjEqbkMGhQpcSBCElooD-Ub~b8WeaA0uC1jU0IeAH-io29FJY8OG7bgfIAfAPok16YMqIu4RAgQwd6DqPWuRosBTuN-AimEMY4rl~-zKpO2NbEWKsHrc~8XI9WSMiwdCxnXdFUvZKtEMXvvWlMY-Yr37aALCSvHAmdKtiB1d64U1NlN8Wtr9EFslPJTi3CA__"
                                        alt=""
                                    />
                                    <div className="flex flex-col gap-2">
                                        <h2 className="reviews-user-name">
                                            Skylar Dias
                                        </h2>
                                        <h4 className="reviews-user-title">
                                            CEO at Amazon
                                        </h4>
                                        <p className="reviews-user-text">
                                            We are greatly helped by the
                                            services of the MORENT Application.
                                            Morent has low prices and also a
                                            wide variety of cars with good and
                                            comfortable facilities. In addition,
                                            the service provided by the officers
                                            is also very friendly and very
                                            polite.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dynamic;

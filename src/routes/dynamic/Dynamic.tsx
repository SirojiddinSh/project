import "./Dynamic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Dynamic = () => {
    const product = JSON.parse(localStorage.getItem("car"));
    console.log(product);

    const [currentThumbnail, setCurrentThumbnail] = useState(
        product?.thumbnail || ""
    );

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

    return (
        <div className="flex justify-center">
            <div className="flex max-w-[1400px] w-full">
                <div className="max-w-[360px] w-full h-[2016px] bg-white"></div>
                <div className="w-full">
                    <div>
                        {product ? (
                            <div className="flex gap-10">
                                <div className="flex gap-10 flex-col border-[1px]">
                                    <div className="dynamic-car-info-img">
                                        <h2>
                                            Sports car with the best design and
                                            acceleration
                                        </h2>
                                        <img
                                            src={currentThumbnail}
                                            alt="Current Thumbnail"
                                        />
                                    </div>
                                    <div className="overflow-x-auto flex gap-2">
                                        {product?.images
                                            .slice(0, 3)
                                            .map(
                                                (image: any, index: number) => (
                                                    <img
                                                        className="w-[148px] h-[124px] border-r-[10px] rounded-[10px] cursor-pointer"
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
                                <div className="max-w-[492px] w-full h-[510px] flex flex-col p-4 bg-white">
                                    <h2>{product.name}</h2>
                                    <div className="flex gap-2">
                                        <div className="rating">
                                            {renderRatingStars()}
                                        </div>
                                        <p>440+ Reviewer</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>Mahsulot topilmadi</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dynamic;

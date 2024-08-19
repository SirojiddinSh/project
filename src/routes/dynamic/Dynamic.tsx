import "./Dynamic.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/index";
import { selectProductById } from "../../redux/slices/products-slice";

const Dynamic = () => {
    const { id } = useParams<{ id: any }>();
    const product = useSelector((state: RootState) =>
        selectProductById(state, id)
    );

    return (
        <div className="flex">
            <div className="w-[360px] h-[2016px] bg-white"></div>
            <div>
                <div className="border-[1px] ">
                    {product ? (
                        <div>
                            <div className="dynamic-car-info-img">
                                <h2>
                                    Sports car with the best design and
                                    acceleration
                                </h2>
                                <p>
                                    Safety and comfort while driving a
                                    futuristic and elegant sports car
                                </p>
                                <img src={product.thumbnail} alt="" />
                            </div>
                            <h1>{product.name}</h1>
                            <p>{product.fuel}</p>
                            <p>{product.price}</p>
                        </div>
                    ) : (
                        <p>Mahsulot topilmadi</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dynamic;

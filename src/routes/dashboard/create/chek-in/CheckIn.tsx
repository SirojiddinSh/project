import { Form, FormProps } from "antd";
import NextBack, { Props } from "../../../../components/next-back/NextBack";
import { useSelector } from "react-redux";

type FieldType = {
    name?: string;
};

const CheckIn = ({ current, handleNext, handleBack }: Props) => {
    const allInformation = useSelector((state) => state.form);

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        handleNext();
        console.log(values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo
    ) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <Form
                name="layout-multiple-horizontal"
                layout="horizontal"
                className="flex-1 flex flex-col justify-between"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <div>
                    <ul>
                        <li>
                            <span className="font-bold">Name:</span>{" "}
                            {allInformation.name}
                        </li>
                        <li>
                            <span className="font-bold">Model:</span>{" "}
                            {allInformation.model}
                        </li>
                        <li>
                            <span className="font-bold">Year:</span>{" "}
                            {allInformation.year}
                        </li>
                        <li>
                            <span className="font-bold">Color:</span>{" "}
                            {allInformation.color}
                        </li>
                        <li>
                            <span className="font-bold">Colors:</span>{" "}
                            {allInformation.colors}
                        </li>
                        <li>
                            <span className="font-bold">Fuel:</span>{" "}
                            {allInformation.fuel}
                        </li>
                        <li>
                            <span className="font-bold">Capacity Fuel</span>:{" "}
                            {allInformation.capacity_fuel}
                        </li>
                        <li>
                            <span className="font-bold">Transmission:</span>{" "}
                            {allInformation.transmission}
                        </li>
                        <li>
                            <span className="font-bold">Seats:</span>{" "}
                            {allInformation.seats}
                        </li>
                        <li>
                            <span className="font-bold">Usage per km:</span>{" "}
                            {allInformation.usage_per_km}
                        </li>
                        <li>
                            <span className="font-bold">Thumbnail:</span>{" "}
                            {allInformation.thumbnail
                                ? "Placed"
                                : "Not located"}
                        </li>
                        <li>
                            <span className="font-bold">Car images: </span>
                            {allInformation.images.length > 0
                                ? "Placed"
                                : "Not located"}
                        </li>
                        <li>
                            <span className="font-bold">Discount:</span>{" "}
                            {allInformation.discount}
                        </li>
                    </ul>
                    <li className="max-w-[750px]">
                        <span className="font-bold">Description:</span>{" "}
                        {allInformation.description}
                    </li>
                </div>
                <NextBack
                    current={current}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            </Form>
        </div>
    );
};

export default CheckIn;

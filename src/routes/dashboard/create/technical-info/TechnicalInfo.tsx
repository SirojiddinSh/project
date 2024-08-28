import { Form, FormProps, Input, InputNumber, Select } from "antd";
import NextBack, { Props } from "../../../../components/next-back/NextBack";
import { useDispatch } from "react-redux";
import { fillTechnicalInfo } from "../../../../redux/slices/form-slice";

const TechnicalInfo = ({ current, handleNext, handleBack }: Props) => {
    const dispatch = useDispatch();
    type FieldType = {
        price: number;
        rent_price: number;
        color: string;
        year: number;
        fuel: string;
        transmission: string;
        seats: number;
        colors: string;
        discount: number;
        capacity_fuel: number;
        usage_per_km: number;
    };

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        dispatch(fillTechnicalInfo(values));
        handleNext();
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo
    ) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            name="layout-multiple-horizontal"
            layout="horizontal"
            className="flex-1 flex flex-col gap-5 justify-between"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div className="flex gap-4 justify-between">
                <Form.Item
                    layout="vertical"
                    label="Price"
                    name="price"
                    className="flex-1"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please input the price!",
                        },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    layout="vertical"
                    label="Rent price"
                    name="rent_price"
                    className="flex-1"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please input the rent price!",
                        },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>
            </div>

            <div className="flex gap-4 justify-between">
                <Form.Item
                    layout="vertical"
                    label="Fuel"
                    name="fuel"
                    className="flex-1"
                    rules={[
                        {
                            required: true,
                            message: "Please input the fuel type!",
                        },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    layout="vertical"
                    label="Capacity Fuel"
                    name="capacity_fuel"
                    className="flex-1"
                    rules={[
                        {
                            required: true,
                            message: "Please input the fuel capacity!",
                        },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>
            </div>

            <div className="flex gap-4 justify-between">
                <Form.Item
                    layout="vertical"
                    label="Color"
                    name="color"
                    className="flex-1"
                    rules={[
                        {
                            required: true,
                            message: "Please input the color!",
                        },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    layout="vertical"
                    label="Colors"
                    name="colors"
                    className="flex-1"
                    rules={[
                        {
                            required: true,
                            message: "Please input the colors!",
                        },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Input />
                </Form.Item>
            </div>

            <div className="flex gap-4 justify-between">
                <Form.Item
                    layout="vertical"
                    label="Year"
                    name="year"
                    className="flex-1"
                    rules={[
                        {
                            required: true,
                            message: "Please input the year!",
                        },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    layout="vertical"
                    label="Usage per Km"
                    name="usage_per_km"
                    className="flex-1"
                    rules={[
                        {
                            required: true,
                            message: "Please input the usage per km!",
                        },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>
            </div>

            <div className="flex gap-4 justify-between">
                <Form.Item
                    layout="vertical"
                    label="Seats"
                    name="seats"
                    className="flex-1"
                    rules={[
                        {
                            required: true,
                            message: "Please input the number of seats!",
                        },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    layout="vertical"
                    label="Discount"
                    name="discount"
                    className="flex-1"
                    rules={[
                        {
                            required: true,
                            message: "Please input the discount!",
                        },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>
            </div>

            <Form.Item
                layout="vertical"
                label="Transmission"
                name="transmission"
                className="flex-1"
                rules={[
                    {
                        required: true,
                        message: "Please input the transmission type!",
                    },
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input />
            </Form.Item>

            <NextBack
                current={current}
                handleNext={handleNext}
                handleBack={handleBack}
            />
        </Form>
    );
};

export default TechnicalInfo;

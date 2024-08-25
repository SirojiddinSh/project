import { Form, FormProps, Image, Input, InputNumber, Select } from "antd";
import { useState } from "react";
import NextBack, { Props } from "../../../../components/next-back/NextBack";

const TechnicalInfo = ({ current, handleNext, handleBack }: Props) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");

    type FieldType = {
        engine?: string;
        horsepower?: number;
        transmission?: string;
        fuelType?: string;
        drivetrain?: string;
        acceleration?: number;
        topSpeed?: number;
        torque?: number;
    };

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
        <Form
            name="layout-multiple-horizontal"
            layout="horizontal"
            className="flex-1 flex flex-col justify-between"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Engine"
                name="engine"
                rules={[
                    {
                        required: true,
                        message: "Please input the engine type!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Horsepower"
                name="horsepower"
                rules={[
                    { required: true, message: "Please input the horsepower!" },
                ]}
            >
                <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
                label="Transmission"
                name="transmission"
                rules={[
                    {
                        required: true,
                        message: "Please input the transmission!",
                    },
                ]}
            >
                <Select>
                    <Select.Option value="automatic">Automatic</Select.Option>
                    <Select.Option value="manual">Manual</Select.Option>
                    <Select.Option value="semi-automatic">
                        Semi-Automatic
                    </Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Fuel Type"
                name="fuelType"
                rules={[
                    { required: true, message: "Please select the fuel type!" },
                ]}
            >
                <Select>
                    <Select.Option value="petrol">Petrol</Select.Option>
                    <Select.Option value="diesel">Diesel</Select.Option>
                    <Select.Option value="electric">Electric</Select.Option>
                    <Select.Option value="hybrid">Hybrid</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Drivetrain"
                name="drivetrain"
                rules={[
                    {
                        required: true,
                        message: "Please select the drivetrain!",
                    },
                ]}
            >
                <Select>
                    <Select.Option value="FWD">FWD</Select.Option>
                    <Select.Option value="RWD">RWD</Select.Option>
                    <Select.Option value="AWD">AWD</Select.Option>
                    <Select.Option value="4WD">4WD</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Acceleration (0-100 km/h)"
                name="acceleration"
                rules={[
                    {
                        required: true,
                        message: "Please input the acceleration!",
                    },
                ]}
            >
                <InputNumber min={0} step={0.1} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
                label="Top Speed (km/h)"
                name="topSpeed"
                rules={[
                    { required: true, message: "Please input the top speed!" },
                ]}
            >
                <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>

            {previewImage && (
                <Image
                    wrapperStyle={{ display: "none" }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) =>
                            !visible && setPreviewImage(""),
                    }}
                    src={previewImage}
                />
            )}

            <NextBack
                current={current}
                handleNext={handleNext}
                handleBack={handleBack}
            />
        </Form>
    );
};

export default TechnicalInfo;

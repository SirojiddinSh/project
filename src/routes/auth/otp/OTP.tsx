import OTP from "antd/es/input/OTP";
import { Button, Form, Input } from "antd";
import { useState } from "react";

const Otp = () => {
    const [form] = Form.useForm();
    const [otpValue, setOtpValue] = useState("");

    const onFinish = async () => {
        try {
            const response = await fetch(
                "http://localhost:8000/api/auth/resend-otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: "shomurodshoakbarov2@gmail.com",
                    }),
                }
            );

            const responseText = await response.text();
            console.log("Response Text:", responseText);
            let data;
            try {
                data = JSON.parse(responseText);
                console.log("JSON Data:", data);
            } catch (error) {
                console.error("This is not valid JSON:", error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log(errorInfo);
    };

    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    style={{ marginBottom: "5px" }}
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                        {
                            type: "email",
                            message: "Please enter a valid email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Enter OTP" style={{ marginBottom: "15px" }}>
                    <OTP
                        length={6}
                        size="large"
                        value={otpValue}
                        onChange={(otp) => setOtpValue(otp)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Otp;

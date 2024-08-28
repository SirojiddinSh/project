import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../../redux/api/auth-api";
import type { FormProps } from "antd";
import { useEffect } from "react";

type FieldType = {
    first_name: string;
    email: string;
    password: string;
};

const Register = () => {
    const [signUp, { data, isSuccess }] = useSignUpMutation();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        console.log(values);

        signUp(values);
    };

    useEffect(() => {
        if (isSuccess) {
            navigate(`/auth/verify-otp?email=${btoa(data.payload.email)}`);
        }
    }, [isSuccess]);

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo
    ) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 24,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "40px",
                        marginBottom: "10px",
                        fontFamily: "Plus Jakarta Sans",
                    }}
                >
                    Register
                </h1>
                <Form.Item<FieldType>
                    style={{ marginBottom: "5px" }}
                    label="First name"
                    name="first_name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your first name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    style={{ marginBottom: "5px" }}
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                        {
                            type: "email",
                            message: "Please enter a valid email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    style={{ marginBottom: "15px" }}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password
                        style={{
                            marginBottom: "10px",
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{ width: "100%" }}
                    wrapperCol={{
                        span: 24,
                    }}
                >
                    <p className="mb-5">
                        Don't have an account?{" "}
                        <a
                            className="cursor-pointer text-blue-600"
                            onClick={() => navigate("/auth/login")}
                        >
                            Login
                        </a>
                    </p>
                    <Button
                        style={{ width: "100%" }}
                        type="primary"
                        htmlType="submit"
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Register;

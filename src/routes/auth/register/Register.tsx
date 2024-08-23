import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const response = await fetch(
                "http://13.51.206.62:8000/api/auth/sign-up",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        first_name: values.first_name,
                        email: values.email,
                        password: values.password,
                    }),
                }
            );
            const data = await response.json();
            console.log(data);

            navigate("/auth/otp");
        } catch (error) {
            console.log("Xato yuz berdi:", error);
        }

        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
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
                <Form.Item
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

                <Form.Item
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

                <Form.Item
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

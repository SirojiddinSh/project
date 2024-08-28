import { Button, Form } from "antd";
import { useSelector } from "react-redux";
import { useCreateCarMutation } from "../../redux/api/create-api";

export interface Props {
    current: number;
    handleBack: () => void;
    handleNext: () => void;
}

const NextBack = ({ current, handleBack }: Props) => {
    const allInformation = useSelector((state) => state.form);
    const [createCar, { isLoading, error }] = useCreateCarMutation();

    const handleCreateCar = async () => {
        try {
            const formData = new FormData();

            Object.keys(allInformation).forEach((key) => {
                const value =
                    allInformation[key as keyof typeof allInformation];

                if (Array.isArray(value)) {
                    value.forEach((item, index) =>
                        formData.append(`${key}[${index}]`, item)
                    );
                } else if (value !== null && value !== undefined) {
                    formData.append(key, value as string | Blob);
                }
            });

            const result = await createCar(formData).unwrap();
            console.log("Car created:", result);
        } catch (err) {
            console.error("Failed to create car:", err);
        }
    };

    return (
        <div className="absolute bottom-[60px] flex justify-center gap-[600px]">
            <Button
                disabled={current === 0}
                type="primary"
                onClick={handleBack}
            >
                Back
            </Button>
            {current < 3 ? (
                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Next
                    </Button>
                </Form.Item>
            ) : (
                <Button
                    onClick={handleCreateCar}
                    type="primary"
                    loading={isLoading}
                >
                    Create
                </Button>
            )}
            {error && <p>Error</p>}
        </div>
    );
};

export default NextBack;

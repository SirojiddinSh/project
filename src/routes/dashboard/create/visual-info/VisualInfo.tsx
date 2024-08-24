import {
    Form,
    UploadFile,
    UploadProps,
    Upload,
    Image,
    Input,
    InputNumber,
    Select,
} from "antd";
import { useState } from "react";
import NextBack, { Props } from "../../../../components/next-back/NextBack";

type FileType = Parameters<UploadProps["beforeUpload"]>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const VisualInfo = ({ current, handleNext, handleBack }: Props) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const uploadButton = (
        <button style={{ border: 0, background: "none" }} type="button">
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    type FieldType = {
        name?: string;
        description?: string;
        model?: string;
        year?: number;
        color?: string;
        price?: number;
    };

    const onFinish: FormProps<FieldType>["onFinish"] = (values: FieldType) => {
        handleNext();
        console.log(values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo: any
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
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input the name!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: "Please input the description!",
                    },
                ]}
            >
                <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
                label="Model"
                name="model"
                rules={[{ required: true, message: "Please input the model!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Year"
                name="year"
                rules={[{ required: true, message: "Please input the year!" }]}
            >
                <InputNumber min={1886} max={2024} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
                label="Color"
                name="color"
                rules={[
                    { required: true, message: "Please select the color!" },
                ]}
            >
                <Select>
                    <Select.Option value="white">White</Select.Option>
                    <Select.Option value="grey">Grey</Select.Option>
                    <Select.Option value="black">Black</Select.Option>
                    <Select.Option value="red">Red</Select.Option>
                    <Select.Option value="blue">Blue</Select.Option>
                    <Select.Option value="green">Green</Select.Option>
                    <Select.Option value="yellow">Yellow</Select.Option>
                    <Select.Option value="orange">Orange</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: "Please input the price!" }]}
            >
                <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>

            <Upload
                multiple
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>

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

export default VisualInfo;

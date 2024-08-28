import { Steps } from "antd";
import { useState } from "react";
import BasicInfo from "./basic-info/BasicInfo";
import VisualInfo from "./visual-info/VisualInfo";
import TechnicalInfo from "./technical-info/TechnicalInfo";
import CheckIn from "./chek-in/CheckIn";

const Create = () => {
    const [current, setCurrent] = useState<number>(0);

    const handleNext = () => {
        if (current < 3) {
            setCurrent((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (current > 0) {
            setCurrent((prev) => prev - 1);
        }
    };

    const components = [
        {
            id: 0,
            content: (
                current: number,
                handleNext: () => void,
                handleBack: () => void
            ) => (
                <BasicInfo
                    current={current}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            ),
        },
        {
            id: 1,
            content: (
                current: number,
                handleNext: () => void,
                handleBack: () => void
            ) => (
                <VisualInfo
                    current={current}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            ),
        },
        {
            id: 2,
            content: (
                current: number,
                handleNext: () => void,
                handleBack: () => void
            ) => (
                <TechnicalInfo
                    current={current}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            ),
        },
        {
            id: 3,
            content: () => (
                <CheckIn
                    current={current}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            ),
        },
    ];

    return (
        <div className="w-full flex justify-center items-center h-screen ">
            <div className="max-w-[800px] h-[620px]  w-full bg-white rounded-2xl p-10">
                <Steps
                    size="small"
                    current={current}
                    items={[
                        {
                            title: "Visual info",
                        },
                        {
                            title: "Basic Info",
                        },
                        {
                            title: "Technical Info",
                        },
                        {
                            title: "Check in",
                        },
                    ]}
                />
                <div className="h-[500px] flex py-10">
                    {current < components.length &&
                        components[current].content(
                            current,
                            handleNext,
                            handleBack
                        )}
                </div>
            </div>
        </div>
    );
};

export default Create;

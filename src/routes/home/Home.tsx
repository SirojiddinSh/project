import "./Home.css";
import Cars from "../../components/cars/Cars";
import { useGetCarsQuery } from "../../redux/api/car-api";
import Container from "../../components/container/Container";
import Mark from "../../images/mark.png";
import Swap from "../../images/Swap.png";

const Home = () => {
    const { data, isLoading } = useGetCarsQuery();

    return (
        <div className="home flex flex-col items-center">
            <Container>
                <div className=" w-full flex justify-between gap-10 position-relative mb-10">
                    <div className="best-car1-info">
                        <div className="best-car">
                            <h2 className="best-car-title">
                                The Best Platform for Car Rental
                            </h2>
                            <p className="best-car-text">
                                Ease of doing a car rental safely and reliably.
                                Of course at a low price.
                            </p>
                            <button className="best-car-btn">Rental car</button>
                        </div>
                        <img
                            className="best-car-img"
                            src="https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ToHfmFPL5j92jyjPz5NWYjLk15pfW0TudB~k6T4ksmL2w~TkavlLM0WZ~ph6GfbEh9hR8HdCp-IhuZft7GbJspbeYhB-3OZ6KHbJo17dLqNDXM4x4u3qbz55Nw0DarlCqx3qI3WkylLpwo3fp-AZtfH7jnDeQx78TmpOgnBW4N2ayik3TCgBZoo88nOAgTvPDIITjEhL4Lyycj~SiLR2R7YBCLLcX29doLu33lHh4HukaZMzgJHnyN54iSDo5~RfHePA8SJ8w4vCkhPph66sQSjxQbPCCpeEV7BDqSxxCbJZmdeZorZFmPSi70ighVJYk3ruIVlUUI0UrZI1-j2SvQ__"
                            alt=""
                            width={400}
                            height={120}
                        />
                    </div>
                    <div className="best-car2-info">
                        <div className="best-car">
                            <h2 className="best-car-title">
                                Easy way to rent a car at a low price
                            </h2>
                            <p className="best-car-text">
                                Providing cheap car rental services and safe and
                                comfortable facilities.
                            </p>
                            <button className="best-car2-btn">
                                Rental car
                            </button>
                        </div>
                        <img
                            className="best-car2-img"
                            src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oPh1KwhS0pcUZfJ5xMSBbDORWvxKsnvGVWBLsQt-66-yJH1V18pNx2sKGEpBZ7vDDrXgIrj1TFu6cD5FH-FKV9rk4SozVHv5nYUCgSHEUz~JavSYYvCBce8nuniwl6DoRoB0nKuA-22EpaHmS7eBRbbZ6gf11s8csuqgZ6QrF91JkhCAYVFljwq76fKzDL1Ek0ZWEO58LvgMWQTuUHWXuU5EgY11XDD-TL02ym-OJcfeTBDQxFH0mpUX~RFQeOdq2vCQXBiFfYAy5mNUHgBDoThgDWDWLklOE~WDOX94espPkkwp73Pz5SB-uqmHM--B~rBw42vYC4l67EcAf9cSiA__"
                            alt=""
                            width={350}
                            height={120}
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="pickup">
                        <div className="flex gap-1 items-center w-full ml-10">
                            <img src={Mark} alt="" />
                            <h3 className="pickup-title">Pick-Up</h3>
                        </div>
                        <div className="flex gap-20">
                            <div>
                                <h3>Locations</h3>
                                <p>Select your city</p>
                            </div>
                            <div>
                                <h3>Date</h3>
                                <p>Select your date</p>
                            </div>
                            <div>
                                <h3>Time</h3>
                                <p>Select your Time</p>
                            </div>
                        </div>
                    </div>
                    <div className="change">
                        <img src={Swap} alt="" />
                    </div>
                    <div className="dropOff">
                        <div className="flex gap-1 items-center w-full ml-10">
                            <img src={Mark} alt="" />
                            <h3 className="pickup-title">Drop-Off</h3>
                        </div>
                        <div className="flex gap-20">
                            <div>
                                <h3>Locations</h3>
                                <p>Select your city</p>
                            </div>
                            <div>
                                <h3>Date</h3>
                                <p>Select your date</p>
                            </div>
                            <div>
                                <h3>Time</h3>
                                <p>Select your Time</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Cars
                    data={data?.payload}
                    isLoading={isLoading}
                    title={"Popular cars"}
                />
            </Container>
        </div>
    );
};

export default Home;

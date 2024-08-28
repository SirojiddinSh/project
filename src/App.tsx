import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RouteController from "./routes";
import { useSelector } from "react-redux";

function App() {
    const allInformation = useSelector((state) => state.form);
    console.log(allInformation);
    return (
        <>
            <Header />
            <RouteController />
            <Footer />
        </>
    );
}

export default App;

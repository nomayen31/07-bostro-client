import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NabBar from "../Shared/NabBar/NabBar";

const Main = () => {
    return (
        <div>
            <NabBar></NabBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
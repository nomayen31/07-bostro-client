import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NabBar from "../Shared/NabBar/NabBar";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
          {noHeaderFooter ||  <NabBar></NabBar>}
            <Outlet></Outlet>
          {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;
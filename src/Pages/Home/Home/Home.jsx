import { Helmet } from "react-helmet-async";
import CartItems from "../../../Shared/CartItems/CartItems";
import CallUs from "../../../components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import PromotionImage from "../PromotionImage/PromotionImage";
import Testimonials from "../testimonils/Testimonials";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
         <Banner></Banner>
         <Category></Category>
         <PromotionImage></PromotionImage>
         <PopularMenu></PopularMenu>
         <CallUs></CallUs>
         <CartItems></CartItems>
         <Featured></Featured>
         <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
import CartItems from "../../../Shared/CartItems/CartItems";
import CallUs from "../../../components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import PromotionImage from "../PromotionImage/PromotionImage";
const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Category></Category>
         <PromotionImage></PromotionImage>
         <PopularMenu></PopularMenu>
         <CallUs></CallUs>
         <CartItems></CartItems>
         <Featured></Featured>
        </div>
    );
};

export default Home;
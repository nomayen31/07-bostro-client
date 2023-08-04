import { useEffect, useState } from "react";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import CartItem from "../CartItem/CartItem";

const CartItems = () => {
    const [menu, setMenu ]= useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter( item =>item.category === 'popular')
             setMenu(popularItems)})
    },[])
    return (
       <section>
         <SectionTitle
                heading="Should Try"
                subHeading="CHEF RECOMMENDS"
            ></SectionTitle>
            
           <div className="grid md:grid-cols-3 gap-10">
           {
                    menu.map(item =><CartItem key={item._id} item={item}></CartItem>)
                }
           </div>
       </section>
    );
};

export default CartItems; 
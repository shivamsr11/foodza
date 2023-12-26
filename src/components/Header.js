import React from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector} from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Header = () =>{
     const navigate = useNavigate();
     const onlineStatus = useOnlineStatus();
     const cartItems = useSelector((store) => store.cart.items);

    const handleSignout = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("signout")
        navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
   }

    return (
        <div className="flex justify-between  m-2 bg-[url('https://thumbs.dreamstime.com/z/healthy-plant-based-fast-food-corner-border-top-view-dark-wood-banner-background-table-scene-cauliflower-crust-pizza-212598651.jpg')]">
             <div className="flex items-centre">
                 <ul className = "flex p-2 m-2 ml-[57rem]">
                     <li className = "px-4 mt-7 text-white"><Link to = "/app">Home</Link></li>
                     <li className = "px-4 mt-7 text-white"> <Link to = "/app/cart">
                        Cart-{cartItems?.length} items</Link></li>
                    <button className="bg-blue-500 flex   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[40px] my-5"
                        onClick = {handleSignout}>Logout</button>
                     <li className = "px-4 mt-7 text-white">{onlineStatus ? "Online 🟢" : "Offline 🔴" }</li>
                </ul>
             </div>
        </div>
    )
};

export default Header; 
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch, useSelector} from "react-redux";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from '../utils/userSlice'

const Header = () =>{
     const navigate = useNavigate();
     const onlineStatus = useOnlineStatus();
     const dispatch = useDispatch();
     const cartItems = useSelector((store) => store.cart.items);
     const user = useSelector(store => store.user)


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
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email, displayName } = user;
        dispatch(addUser({uid : uid, email : email, displayName : displayName}))
        navigate("/app")
      } else {
        dispatch(removeUser())
        navigate("/")
        // User is signed out
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  },[])

    return (
        <div className="flex justify-between mb-2  w-screen sm:w-screen md:w-screen lg:w-screen xl:w-screen 2xl:w-screen bg-[url('https://thumbs.dreamstime.com/z/healthy-plant-based-fast-food-corner-border-top-view-dark-wood-banner-background-table-scene-cauliflower-crust-pizza-212598651.jpg')]">
             <div className="flex items-centre">
                 <ul className = "flex p-2 m-2 ml-[57rem] ">
                     <li className = "px-4 mt-7 text-white"><Link to = "/app">Home</Link></li>
                     <li className = "px-4 mt-7 text-white ml-2"> <Link to = "/app/cart">
                        Cart-{cartItems?.length} items</Link></li>
                    <button className="bg-blue-500 flex   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[40px] my-5 ml-2"
                        onClick = {handleSignout}>Logout</button>
                     <li className = "px-4 mt-7 text-white ml-2">{onlineStatus ? "Online 🟢" : "Offline 🔴" }</li>
                </ul>
             </div>
        </div>
    )
};

export default Header; 
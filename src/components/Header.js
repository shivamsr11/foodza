import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store?.cart?.items);
  const user = useSelector(store => store?.user)

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("signout")
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/app")
      } else {
        dispatch(removeUser())
        navigate("/")
        // User is signed out
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, [])

  return (
    <div>
      <div className='absolute flex justify-between '>
        <img className="w-screen sm:w-screen md:w-screen lg:w-screen xl:w-screen h-[11vh]
         bg-[url('https://thumbs.dreamstime.com/z/healthy-plant-based-fast-food-corner-border-top-view-dark-wood-banner-background-table-scene-cauliflower-crust-pizza-212598651.jpg')]" />
      </div>
      <div className="flex inline-block  absolute justify-end w-[100%] ">
               <ul className = "flex font-bold text-black-200 sm:text-white">
                   <li className = "px-[1vw] mt-[4vh] "><Link to = "/app">Home</Link></li>
                   <li className = "px-[1vw] mt-[4vh]  ml-[1vh]"> <Link to = "/app/cart">
                      Cart-{cartItems?.length} items</Link></li>
                  <button className="bg-blue-500 flex   hover:bg-blue-700 text-white font-bold  rounded 
                  h-[6vh] my-[3vh] ml-[1vw] py-[1.3vh] px-[1vw]" onClick = {handleSignout}>Logout</button>
                   <li className = "px-[1.2vw] mt-[4vh]  ml-[1vh] ">{onlineStatus ? "Online 🟢" : "Offline 🔴" }</li>
              </ul>
           </div>
    </div>
   
  )
};

export default Header; 
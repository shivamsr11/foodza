import React from "react";
import RestraurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {MAIN_API, swiggyAPI} from "../utils/constants"


const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [topRatedButton, setTopRatedButton] = useState(false)

    const RestaurantCardPromoted = withPromotedLabel(RestraurantCard);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(swiggyAPI);
        const json = await data?.json();
       const resList = json?.data?.cards?.filter(
            res=> res?.card?.card?.id ==="restaurant_grid_listing"
        )
        const mainDataPath = resList?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(mainDataPath);
        setFilteredRestaurant(mainDataPath);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Looks like you're offline...Please check your internet connection!!</h1>

    return listOfRestaurant?.length === 0 ? <Shimmer/> : 
     (
        <div className="Body ">
             <div className="filter flex bg-blue-100 mx-[2vh]  mt-[13vh]">
            <div className = " m-[1vh]">
                <input type= "text" className = "ml-[1vw] pl-[1vw] h-[5vh] " placeholder = "Enter text" 
                value = {searchText} onChange = {(e)=>{
                    setSearchText(e?.target?.value)
                }}></input>
                <button className="bg-blue-500  ml-[1vw]  hover:bg-blue-700 text-white font-bold py-[1vh]
                 px-[1vw] mx-[1vw] h-[6vh] rounded"
                 onClick = {()=>{
                       const filteredRestaurant = listOfRestaurant?.filter((res)=>
                        res?.info?.name?.toUpperCase()?.includes(searchText?.toUpperCase())
                  );
                  setFilteredRestaurant(filteredRestaurant)
                }}>Search</button>
                 </div>
           
                <button className="bg-blue-500   hover:bg-blue-700 text-white font-bold py-[1vh]
                 px-[1vw] mx-[1vw] h-[6vh] my-[1vh] rounded"
                    onClick={() => {
                        setTopRatedButton(topRatedButton ? false : true);
                        console.log(topRatedButton)
                        if(topRatedButton){
                            const filteredList = listOfRestaurant?.filter(
                                (res) => res?.info?.avgRating >= "4.3");
                            setFilteredRestaurant(filteredList)
                        }
                        else{
                            setFilteredRestaurant(listOfRestaurant)
                            }
                       }}>Top Rated Restaurant</button>
            </div>
            <div className="flex flex-wrap h-[78vh] overflow-y-auto">
                {
                    filteredRestaurant?.map((restaurant) =>
                        (<Link key={restaurant?.info?.id} to = {"restaurant/"+restaurant?.info?.id}>
                            {restaurant?.info?.promoted ? (<RestaurantCardPromoted resData={restaurant?.info}/>) :
                                (<RestraurantCard  resData={restaurant?.info} />)}
                        </Link>
                        ))
                }
            </div>
        </div>
         )
}

export default Body;
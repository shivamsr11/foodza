import React from "react";
import {CDN_URL} from "../utils/constants";

const RestraurantCard = (props) => {
    const { resData } = props;

    const {name,avgRating,cuisines} = resData;
    return (
        <div className="p-4 m-4 w-[232px] h-[320px] bg-gray-100 hover:bg-gray-300 shadow-lg" >
            <img className="rounded-lg w-[190px] h-[130px] text-center ml-1" alt="res-logo"
             src={ CDN_URL+resData?.cloudinaryImageId}/>
            <div className="font-bold py-3">{name}</div>
            <div>{avgRating}</div>
            <div>{cuisines?.join(", ")}</div>
        </div>
    )
}

export const withPromotedLabel = (RestraurantCard) =>{
    return (props) =>{
        return(
            <div>
                <label className = " absolute bg-black text-white px-1 ml-2 ">Promoted</label>
                <RestraurantCard {...props}/>
            </div>
        )
    }
}

export default RestraurantCard; 
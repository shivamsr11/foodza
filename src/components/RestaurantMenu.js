import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import {CDN_URL} from '../utils/constants';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo?.cards === null || resInfo?.cards === undefined) return <ShimmerCard />;
    const { name, cuisines, costForTwoMessage, locality,cloudinaryImageId } = resInfo?.cards[0]?.card?.card?.info;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    return resInfo === null ? (<ShimmerCard />) : (
        <div className = "text-center ">
           
            <h1 className = "font-bold text-4xl p-2 m-2 my-2">{name}</h1>
            <div className="flex items-center justify-center">
           
            <img className="w-[320px] h-[230px] rounded-lg " alt="res-logo" src={ CDN_URL+cloudinaryImageId}/>
            </div>
              <h1 className = "font-bold tex-3xl pt-1 mt-1">Menu</h1>
            <h3>Area:{locality}</h3>
            <h3>{cuisines.join(", ")}-{costForTwoMessage}</h3>
          {categories?.map((category,index) => (
                  <RestaurantCategory key = {category?.card?.card?.title} data={category?.card?.card}
                 />
              )
              )
          }
       </div>
    )
}

export default RestaurantMenu;
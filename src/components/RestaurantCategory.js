import {useState} from "react";
import ItemList from "./ItemList"

const RestaurantCategory = ({data }) =>{
    const [showItems, setShowItems] = useState(null)
    

    const handleClick = () =>{
        setShowItems(!showItems);
    }
    return(
        <div>
            <div className = "w-6/12 mx-auto m-4  bg-gray-100 shadow-lg p-4 "> 
            <div className = "flex justify-between ">
                <span className = " font-bold text-xl  cursor-pointer " onClick = {handleClick}
                    >{data?.title} ({data?.itemCards?.length})</span>
                <span className = "cursor-pointer" onClick = {handleClick}>▼</span></div>
            {showItems && <ItemList items={data?.itemCards}/>}  
          </div>
        </div>
    )
}

export default RestaurantCategory;
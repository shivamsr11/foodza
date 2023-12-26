import {useState, useEffect} from "react";
import {RES_MENU} from "./constants";

const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);
    
        useEffect(()=>{
            fetchData();
        },[]);

        const fetchData = async() =>{
            const data = await fetch(RES_MENU + resId);
            const json = await data.json();
            setResInfo(json.data);
        }
       return resInfo;
}

export  default useRestaurantMenu;
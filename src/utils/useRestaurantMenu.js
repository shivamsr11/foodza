import {useState, useEffect} from "react";

const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);
    
        useEffect(()=>{
            fetchData();
        },[]);

        const fetchData = async() =>{
            const data = await fetch(`https://backend-swiggy-five.vercel.app/api/menu?&restaurantId=${resId}`);
            const json = await data?.json();
            setResInfo(json?.data);
        }
       return resInfo;
}

export  default useRestaurantMenu;
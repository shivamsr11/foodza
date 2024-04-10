import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice"

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }
    return (
        <div>
            {items?.map((item,index) => (
                <div key={index}
                    className="p-2 mt-0  bg-gray-100 hover:bg-gray-300  text-left flex ">
                    <div className="w-8/12">
                        <div className="inline-block py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> ₹- {item?.card?.info?.price ? item?.card?.info?.price / 100 :
                                item?.card?.info?.defaultprice / 100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-4/12 p-4">
                        <div className="absolute">
                            <div className="text-center">
                                <div className=" p-2 pt-[3px] sm:pt-[7px] sm:ml-[8vw] ml-[9vw] mt-[8vh] md:pt-[7px] 
                                md:ml-[7vw]  lg:pt-[7px] lg:ml-[5vw] xl:pt-[3px] xl:ml-[4vw] 2xl:ml-[4vw]">
                                    <button className=" bg-sky-700 cursor-pointer text-white    w-[27px] h-[24px]
                                    rounded-l sm:h-[26px]  sm:w-[27px]  md:h-[25px] md:w-[28px] lg:h-[25px] lg:w-[31px]
                                     xl:h-[28px] xl:w-[35px] "
                                    onClick={() => handleRemoveItem(item)}>
                                        -
                                    </button>
                                    <button className="bg-sky-700 cursor-pointer text-white    w-[27px] h-[24px]
                                    rounded-l sm:h-[26px]  sm:w-[27px]  md:h-[25px] md:w-[28px] lg:h-[25px] lg:w-[31px]
                                     xl:h-[28px] xl:w-[35px]"
                                     onClick={() => handleAddItem(item)}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <img alt="img-logo" className="w-[120px] h-[80px] " src={CDN_URL + item?.card?.info?.imageId} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;
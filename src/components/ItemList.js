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
                    className="p-2 mt-0  bg-gray-100 hover:bg-gray-300  text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> ₹- {item?.card?.info?.price ? item?.card?.info?.price / 100 :
                                item?.card?.info?.defaultprice / 100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <div className="text-center">
                                <div className="inline-flex p-2 pt-[3px] sm:pt-[7px] ml-[3rem] mt-12 md:pt-[7px] 
                                md:ml-[3rem]  lg:pt-[7px] lg:ml-[3rem] xl:pt-[3px] xl:ml-[3rem]">
                                    <button className="bg-sky-700 cursor-pointer text-white   h-[28px] w-[35px]
                                    rounded-l sm:h-[26px] sm:w-[27px]  md:h-[25px] md:w-[28px] lg:h-[25px] lg:w-[31px]
                                     xl:h-[28px] xl:w-[35px] "
                                    onClick={() => handleRemoveItem(item)}>
                                        -
                                    </button>
                                    <button className="bg-sky-700 cursor-pointer text-white  h-[28px] w-[35px] rounded-l
                                     sm:h-[26px] sm:w-[27px] md:h-[25px] md:w-[28px] lg:h-[25px] lg:w-[31px] xl:h-[28px] xl:w-[35px]"
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
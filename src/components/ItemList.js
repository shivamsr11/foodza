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
                                <div className="inline-flex p-2 pt-[3px] ml-[3.7rem] mt-12 ">
                                    <button className="bg-blue-700 cursor-pointer text-white   h-[28px] w-[35px] rounded-l " 
                                    onClick={() => handleRemoveItem(item)}>
                                        -
                                    </button>
                                    <button className="bg-blue-700 cursor-pointer text-white  h-[28px] w-[35px] rounded-l"
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
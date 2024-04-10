import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";
import {useSelector, useDispatch} from "react-redux";

const Cart =()=>{
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return(
        <div className="flex w-screen">
       
        <div className="flex justify-center p-[3vh] w-[94%]">
            <div className="  ">
            <h1 className="">{ cartItems?.length === 0 ? <div className="text-2xl font-bold text-center mt-[12vh] 
                ">Cart is Empty</div> : <div className="text-2xl inline-block font-bold ml-[49%] md:  mt-[11vh] mb-[5vh]"> Cart</div>}</h1>
                <ItemList items = {cartItems}/>
         </div>
         
        </div>
        <div className="  ">
            <div className="mt-[16vh]">
            {cartItems?.length !== 0 &&  (<button className="py-[0.5vh] px-[0.1vw] text-sm lg:text-md w-[16vw] sm:w-[13vw] md:w-[11vw] lg:w-[8vw] xl:w-[7vw] 2xl:w-[6vw] mx-[1vw] bg-black text-white rounded-lg" 
                onClick={handleClearCart}>Clear Cart</button>)}
            </div>
            </div>
        </div>
    )
}

export default Cart;
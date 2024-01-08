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
        <>
        <div className="flex justify-end w-screen">
            <div className="mt-[130px] ">
            {cartItems?.length !== 0 &&  (<button className="p-2 mr-[30px] w-28 my-2 bg-black text-white rounded-lg" 
                onClick={handleClearCart}>Clear Cart</button>)}
            </div>
            </div>
        <div className="flex justify-center p-4 w-screen">
            <div className="w-[400px] sm:w-[600px] md:w-[700px] lg:w-[700px]  xl:w-[730px]  ">
            <h1 className="">{ cartItems?.length === 0 ? <div className="text-2xl font-bold text-center mt-[1px] 
                mb-[32px]">Cart is Empty</div> : <div className="text-2xl font-bold text-center mt-[-100px] 
                mb-[32px]"> Cart</div>}</h1>
                <ItemList className = " ml-[50vh]" items = {cartItems}/>
         </div>
        </div>
        </>
    )
}

export default Cart;
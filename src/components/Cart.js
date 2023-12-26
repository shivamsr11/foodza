import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";
import {useSelector, useDispatch} from "react-redux";
import { BG_IMG_CART } from "../utils/constants";

const Cart =()=>{
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">{ cartItems.length === 0 ? "Cart is Empty" :  "Cart"}</h1>
            <div className="w-6/12 m-auto">
                {cartItems.length !== 0 &&  (<button className="p-2 w-28 my-2 ml-[53rem] bg-black text-white rounded-lg" 
                onClick={handleClearCart}>Clear Cart</button>)}
                <ItemList items = {cartItems}/>
         </div>

        </div>
//         <div>
//             <div className = "  mt-2 pt-4 ">
//             {
//             !cartItems.length  && 
//             (<h1 className = "text-2xl font-bold ml-[38rem]  text-black">Cart is empty</h1>) 
//             }
//           {  cartItems.length && ( <div><h1 className = "text-2xl ml-[42rem] font-bold text-black">Cart</h1>
//             <button className = "py-3  px-2  ml-[78rem] bg-black text-white font-bold rounded-lg"
//              onClick = {handleClearCart}>Clear Cart</button></div>
// )} </div>
           
//             <div className = " w-[3/12]  bg-gray-200 mt-28  pt-4">
//                <ItemList items = {cartItems}/>
//            </div>
//        </div>
    )
}

export default Cart;
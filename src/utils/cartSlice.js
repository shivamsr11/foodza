import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers :{
        addItem :(state, action) =>{
            state.items.push(action.payload)
        },
        removeItem :(state, action) =>{
            let id=action.payload?.card?.info?.id;
            const index =  state.items.findIndex((x) => x.card.info.id === id)
            if (index > -1) {
                state.items.splice(index, 1);
            }
        },
        clearCart : (state) =>{
            state.items = []
        }
    }
}

);

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

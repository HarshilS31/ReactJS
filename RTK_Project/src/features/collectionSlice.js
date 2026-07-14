import { createSlice } from "@reduxjs/toolkit";
import { toast,Flip } from "react-toastify";

const initialState = {
    items:JSON.parse(localStorage.getItem('collection')) || []

}
const collectionSlice = createSlice ({
    name:"Collections",
    initialState,
    reducers: {
        addCollection:(state,action) =>{
            const alreadyExists=state.items.find(
                item=>item.id === action.payload.id)
            if(!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem('collection',JSON.stringify(state.items));
            }     
        },
        removeCollection:(state,action)=>{
            state.items = state.items.filter(item => item.id!=action.payload.id)
            localStorage.setItem('collection',JSON.stringify(state.items));

        },
        clearCollection:(state)=>{
            state.items=[]
            localStorage.removeItem('collection')
            
        },
        addedToast:()=>{
            toast.success('Saved to Collections', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            });
        },
        removeToast:()=>{
            toast.info('Removed from Collections', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
        },
    }
})
export const {addCollection,removeCollection,clearCollection,addedToast,removeToast} = collectionSlice.actions
export default collectionSlice.reducer
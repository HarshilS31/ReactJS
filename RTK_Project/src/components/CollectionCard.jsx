import { useDispatch } from "react-redux"
import {removeCollection,removeToast} from "../features/collectionSlice";

const CollectionCard = ({item}) => {
  const dispatch = useDispatch();
  const removeFromCollection = (item) => {
    dispatch(removeCollection(item))
    console.log("Added to Collection")
    dispatch(removeToast())
  }
  return (
    <div className="relative w-full h-80 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-colors">
        {item.type=="photo" ? <img  className="h-full w-full object-cover object-center" src={item.src} alt="Photo" /> :""}
        {item.type=="video" ? <video className="h-full w-full object-cover object-center" autoPlay loop muted src={item.src}></video> :""}  
      <div id="bottom" className="w-full p-3 absolute bottom-0 text-white bg-gradient-to-t from-black/80 to-transparent">
        <h2 className="text-lg font-semibold capitalize truncate">{item.title}</h2>
        <button className="bg-green-400 text-gray-900 rounded-full py-2 px-4 cursor-pointer font-medium mt-2 gap-2 active:scale-110 hover:bg-green-300 transition-colors" onClick={()=>window.location.href=item.url}>URL</button>

        <button className="bg-green-400 text-gray-900 rounded-full py-2 px-4 cursor-pointer font-medium mt-2 gap-2 m-3 active:scale-110 hover:bg-green-300 transition-colors" onClick={()=>removeFromCollection(item)}>Remove</button>

      </div>
    </div>
  )
}

export default CollectionCard
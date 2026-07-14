import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../features/collectionSlice"
const CollectionPage=()=>{
  const dispatch=useDispatch()
  const collections=useSelector(state=>state.collection.items)
  return (
<div className="min-h-screen w-full text-white bg-gray-900">
      {collections.length>0? <h2 className="text-2xl font-semibold mb-4">Your Collections</h2> : <h2 className="text-2xl font-semibold mb-4">Add items in Collection!</h2>}
      <button className="bg-red-500 text-white rounded-full py-2 px-4 font-medium mb-6 hover:bg-red-400 transition-colors active:scale-95" onClick={()=>dispatch(clearCollection())}>Clear Collection</button>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {collections.map((item,index)=>{
          return <div key={index}><CollectionCard item={item}/></div>

        })}
      </div>

    </div>
  )
}

export default CollectionPage
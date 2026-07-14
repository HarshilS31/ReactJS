import { setActiveTabs } from "../features/searchSlice"
import { useDispatch, useSelector } from "react-redux"
const Tabs = () => {
  const tabs = ['Photos','Videos']
  const activeTab = useSelector(state=>state.search.activeTab)
  const dispatch =useDispatch()
  return (
    <div className="flex-10  p-2  m-3">
      {tabs.map(function(e,index) {
        return <button onClick={()=>dispatch(setActiveTabs(e))} className={`${(activeTab==e)? "bg-green-700" :"bg-green-400"} flex-10 border-2px rounded  p-2  m-2 active:scale-95`} key={index}>{e}</button>
      })}
    </div>
  )
}

export default Tabs
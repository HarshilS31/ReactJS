import "./components/style.css"
//import {FarCartArrowDown} from "react-icons/fa"
const Styling = () => {
    const style2={color:"goldenrod",backgroundColor:"blue"}
return (
    <>
    <div style={{color:"cyan",backgroundColor:"black",display:"flex",justifyContent:"center"}}>INLINE STYLE</div>
    <h3 style={style2}>Another way to Style!</h3>{/*another way of styling */}
    <h2>One more way for Styling is by importing an CSS File</h2>
    {/* <FarCartArrowDown /> */}
    </>
    

  )
}

export default Styling
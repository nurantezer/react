//*public klasörüne koyduklarımı doğrudan kullanabiliyorum.
import "./Content.css"
const Content = () => {
const pStyle = {
    fontFamily:"Tahoma",
    fontSize:"1.3rem"
}  
const imgStyle ={
    display: "block",
    
}
    return (
    <div className="content-div">
        <h2 style={{color:"red" , backgroundColor:"black"}}>React js</h2> //*içerideki süslü obje göndermeiz key value
        <p style={pStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, illo.</p>
        <img src="dffd" alt="sprig" />
        <img src="" alt="" />
        <p className="par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, illum? Deleniti nesciunt obcaecati porro nam repudiandae alias facere eaque inventore.</p>
        <p className="par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore reiciendis dolorem eveniet reprehenderit labore repellendus repudiandae cum quia, quibusdam exercitationem iure, voluptates recusandae tenetur in sint et veniam, nostrum pariatur.</p>
    </div>
  )
}

export default Content
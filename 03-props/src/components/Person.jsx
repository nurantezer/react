import Msg from "./Msg"

//*2.satırda yolda destrc ettim
const Person = ({name,tel,img}) => {
// const {name, tel, img} = props
    return (
    <div>
        {/* <h2>Hi, My Name is {name}</h2> */}
        <Msg isim={name}/>
        <img style={{width:"300px"}} src={img} alt="" />
        <p>{tel}</p>
    </div>
  )
}

export default Person
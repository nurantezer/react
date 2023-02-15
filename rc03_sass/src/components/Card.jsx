import CardStyle from "../scss/card.module.scss"

const Card = ({data}) => {
  return <div className={CardStyle.container}>
 {data.map((item) =>{
const{id,img,comment,job,name} = item
return(
<div> //*bu dive id uniq olacağı için verdim
)

 })}
      
    </div>
  
}

export default Card

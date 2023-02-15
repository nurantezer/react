import Msg from "./Msg";

const Person = ({ name, tel, img }) => {

  return (
    <div>
      <Msg name={name} />
      <img style={{ width: "300px" }} src={img} alt="" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;

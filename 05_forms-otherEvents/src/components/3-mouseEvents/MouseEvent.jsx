import { useState } from "react";


const MouseEvent = () => {
const [visible, setVisible] = useState(false)


  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
      >
        todo item 1
      </div>
        {visible &&<div>Mouse Events</div>}
      <div className="bg-success text-light w-50 p-4 mt-4" 
      id="todo-2">
        todo item 2
        </div>

        <div className="bg-success text-light w-50 p-4 mt-4" 
        id="todo-3">
            todo item 3
            </div>
    </div>
  );
}

export default MouseEvent
import Person from "./components/Person";
import { data } from "./data";

function App() {
  return (
    <div>
      {data.map(({ name, img, tel }) => (
        <Person name={name} img={img} tel={tel} />
      ))}
    </div>
  );
}

export default App;

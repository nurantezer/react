import { Button, FS13Button } from "./components/Buton.styled";
import HeaderText from "./components/HeaderText";

const App = () => {
  return (
    <>
      <HeaderText renk="hotpink">Styled Components</HeaderText>
      <HeaderText renk="#734586" bgRenk="#eee">Styled Components</HeaderText>
      <Button>Send</Button>
      <Button primary>Send</Button>
      <FS13Button react>CALIS</FS13Button>
      <FS13Button>DINLEN</FS13Button>
    </>
  );
};

export default App;

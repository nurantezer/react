import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Container from "./components/styled/Conteiner";
import { GlobalStyles } from "./components/styled/GlobalStyles";
const styles = {
  colors: {
    primary: "#eee",
    secondary: "#8A1C4A",
  },
  margins: {},

  paddings: {},
  breakpoints: { xs: "300px", sm: "500px", md: "700px" },
};
const App = () => {
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles/>
      <Nav />
      <Container>
        <Header/>
      </Container>
    </ThemeProvider>
  );
};

export default App;

import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";

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
      <Nav />
    </ThemeProvider>
  );
};

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navs from "./components/Navs";
import LoginProvider from "./context/LoginProvider";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;

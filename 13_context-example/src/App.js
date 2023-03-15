import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navs from "./components/Navs";
import LoginProvider from "./context/LoginProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;

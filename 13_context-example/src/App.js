import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navs from "./components/Navs";
import LoginProvider from "./context/LoginProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import People from "./pages/People";
import PrivateRouter from "./pages/PrivateRouter";
import PersonDetail from "./pages/PersonDetail";
function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          <Route path="people" element={<PrivateRouter />} />
          <Route path="" element={<People />} />
          <Route path=":id" element={<PersonDetail />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;

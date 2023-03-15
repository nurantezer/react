import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navs from "./components/Navs";
import LoginProvider from "./context/LoginProvider";

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Navs />
        <Routes></Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;

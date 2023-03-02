import Nav from "./components/Nav"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import People from "./pages/People"
function App() {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

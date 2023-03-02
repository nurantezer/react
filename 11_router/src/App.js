import Nav from "./components/Nav"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import People from "./pages/People"
import PersonDetail from "./pages/PersonDetail"
import Contact from "./pages/Contact"
function App() {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

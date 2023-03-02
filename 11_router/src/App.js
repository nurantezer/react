import Nav from "./components/Nav"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import People from "./pages/People"
import PersonDetail from "./pages/PersonDetail"
import Contact from "./pages/Contact"
import Paths from "./pages/Paths"
import NotFound from "./pages/NotFound"
function App() {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/paths" element={<Paths/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

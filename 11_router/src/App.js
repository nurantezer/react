import Nav from "./components/Nav"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import People from "./pages/People"
import PersonDetail from "./pages/PersonDetail"
import Contact from "./pages/Contact"
import Paths from "./pages/Paths"
import NotFound from "./pages/NotFound"
import FullStack from "./pages/FullStack"
import ReactJS from "./pages/ReactJS"
import Aws from "./pages/Aws"
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />

        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>

        <Route path="/paths" element={<Paths />}>
          <Route path="fullstack" element={<FullStack />}>
            <Route path="react" element={<ReactJS />} />
          </Route>
          <Route path="" element={<Aws />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

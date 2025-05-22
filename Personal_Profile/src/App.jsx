import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Thankyou from "../Pages/Thankyou"
import Projects from "../Pages/Projects";
import {BrowserRouter, Routes, Route} from "react-router-dom"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element= {<Home />} />
        <Route path="/Contact" element= {<Contact />}/>
        <Route path ="/Projects" element= {<Projects />} />
        <Route path="/Thankyou" element={<Thankyou />}/>
      </Routes>
    </BrowserRouter>
  );
}

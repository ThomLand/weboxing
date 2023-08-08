import "./index.css";
import Navbar from "./composant/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import "./style/navbar.css";



export default function App() {
  return (

    <div className="App">


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
     <Navbar/>
     <Home/>
    </div>
  );
}

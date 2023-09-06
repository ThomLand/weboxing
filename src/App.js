import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Contact from "./routes/contact";
import Seance from "./routes/service";
import Produit from "./routes/produit";
import Service from "./routes/service";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/seance" element={<Seance />} />
        <Route path="/produit" element={<Produit />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
}

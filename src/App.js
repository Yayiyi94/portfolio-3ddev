import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Contact from "./Contact";
import ArtPortfolio from "./ArtPortfolio";
import DevPortfolio from "./DevPortfolio";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Hero />} />

          {/* Portafolios separados */}
          <Route path="/art" element={<ArtPortfolio />} />
          <Route path="/dev" element={<DevPortfolio />} />

          {/* Contacto */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

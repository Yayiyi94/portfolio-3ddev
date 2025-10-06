import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Contact from "./Contact";
import ArtPortfolio from "./ArtPortfolio";
import DevPortfolio from "./DevPortfolio";
import Aboutme from "./Aboutme";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          /* Homepage */
          <Route path="/" element={<Hero />} />
          /* About me page */
          <Route path="/about" element={<Aboutme />} />
          /* Portfolios */
          <Route path="/art" element={<ArtPortfolio />} />
          <Route path="/dev" element={<DevPortfolio />} />
          /* Contact */
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

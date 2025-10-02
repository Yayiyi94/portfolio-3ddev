import logo from "./logo.svg";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Contact from "./Contact";
import ArtPortfolio from "./ArtPortfolio";
import DevPortfolio from "./DevPortfolio";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ArtPortfolio />
      <DevPortfolio />
      <Contact />
      <Footer />
    </div>
  );
}

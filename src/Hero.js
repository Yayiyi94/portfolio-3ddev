import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageGirl from "./images/Captura de pantalla 2025-09-26 171123.png";

import "./App.css";

export default function Hero() {
  return (
    <div className="Hero">
      <section className="py-5">
        <h1 className="display-4 text-center fw-bold hero-container">
          {" "}
          I´m Yadira — <span className="text-success">Mex</span>i
          <span className="text-danger">can</span> 3D Animator & Junior Web
          Developer
        </h1>
        <p className="lead mt-3">
          <i class="bi bi-display text-success"></i> My profesional Portfolio
          about my two passions: the 3D world and computing{" "}
          <i class="bi bi-display text-danger"></i>
        </p>
        <Link to="/about">
          <Button variant="dark border" size="lg" className="mt-4">
            About me
          </Button>
        </Link>
        <div class="mt-3 mb-2 m-3">
          <Link to="/art">
            <Button variant="dark border" size="md" className="mx-4">
              See 3D Portfolio
            </Button>
          </Link>
          <Link to="/dev">
            <Button variant="dark border" size="md" className="mx-4">
              See Dev Portfolio
            </Button>
          </Link>
        </div>
        <div class="illustration">
          <img src={imageGirl} alt="Girl with laptop illustration" />
        </div>
      </section>
    </div>
  );
}

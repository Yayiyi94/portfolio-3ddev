import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainphoto from "./images/My-photo.png";
import "./App.css";

export default function Aboutme() {
  return (
    <section id="portfolio3d" className="py-5">
      <div className="Aboutme">
        <Link to="/">
          <Button variant="dark border" size="md" className="mt-4">
            Back to home
          </Button>
        </Link>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={mainphoto}
                alt="Yadira"
                className="about-photo img-fluid rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold mb-3">Sobre mí</h2>
              <p>
                Soy animadora 3D con experiencia en Maya y Blender, y
                desarrolladora web junior enfocada en React y Bootstrap. Mi meta
                es unir arte y tecnología para crear experiencias únicas.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

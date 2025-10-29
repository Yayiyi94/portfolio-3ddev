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
                className="about-photo img-fluid rounded shadow m-4"
              />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold mb-3">About me</h2>
              <p>
                Hi There! my full name is Yadira de la Torre Ruiz, I am an
                mexican living in Monterrey, Nuevo león. <br /> Something about
                me is that I like activities that I can do at home; watching
                series/animes, playing videogames, learning cooking recipes,
                etc.
                <br /> About my working life, I have been doing 3D general
                stuff; animation, rigging and modeling for videogame studios,
                which I find really fun to do, but now I am planning to expand
                my knowledge into the tech world, starting my journeying with
                learning the basics of programming, Front-End and Back-End
                design with SheCodes.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

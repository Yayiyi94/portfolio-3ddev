import "./App.css";
import { Container, Button, Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="py-5">
      <Link to="/">
        <Button variant="dark border" size="md" className="m-4">
          Back to home
        </Button>
      </Link>
      <Container>
        <Card className="shadow justify-content text-center my-5">
          <Card.Body>
            <Card.Title className=" bg-dark-subtle rounded-3 fw-bold ">
              <h1 className="py-2">Lest get in touch!</h1>
            </Card.Title>
            <Card.Text>
              <ListGroup as="ol">
                <ListGroup.Item as="li" className="justify-content text-center">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">My email:</div>
                    <i class="fa-solid fa-envelope i-color-contact"></i>
                    <a href="mailto:yadiratr94@gmail.com" target="_blank">
                      yadiratr94@gmail.com
                    </a>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="justify-content text-center">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">My Linkedin</div>
                    <i class="fa-brands fa-linkedin i-color-contact"></i>
                    <a
                      href="https://www.linkedin.com/in/yadiradelatorre"
                      target="_blank"
                      aria-label="Linkedin"
                      title="Go to Yadira´s Linkedin page"
                    >
                      Yadira de la Torre Ruiz
                    </a>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="justify-content text-center">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">My GitHub</div>
                    <i class="fa-brands fa-square-github i-color-contact"></i>
                    <a
                      href="https://github.com/Yayiyi94"
                      target="_blank"
                      aria-label="GitHub"
                      title="Go to Yadira´s Github page"
                    >
                      Yayiyi94
                    </a>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="justify-content text-center">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">My Twitter/X</div>
                    <i class="fa-brands fa-square-x-twitter i-color-contact"></i>
                    <a
                      href="https://x.com/YadiraDroiz"
                      target="_blank"
                      aria-label="Twitter"
                      title="Go to Yadira´s Twitter page"
                    >
                      Yadira Droiz
                    </a>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

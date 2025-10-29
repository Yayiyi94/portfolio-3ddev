import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageGameplay from "./images/animation-image.png";
import imageRigging from "./images/riggingreel-image.png";
import "./App.css";

export default function ArtPortfolio() {
  const projects = [
    {
      title: "Gameplay Reel",
      img: imageGameplay,
      description:
        "The Reel demo presents a series of short animation and gameplay sequences with 3D character, focused on action and combat mechanics.",
      link: "https://vimeo.com/836814801",
    },
    {
      title: "Rigging Reel",
      img: imageRigging,
      description:
        "The Reel demo presents a rigged character full body and face, showing all the controllers and how each one works.",
      link: "https://vimeo.com/709978403",
    },
  ];

  return (
    <section id="portfolio3d" className="py-5">
      <Link to="/">
        <Button variant="dark border" size="md" className="mt-4">
          Back to home
        </Button>
      </Link>
      <Container>
        <h2 className="fw-bold text-center mb-5 mt-5">3D Animation</h2>
        <Row>
          {projects.map((p, index) => (
            <Col
              md={6}
              className=" d-flex justify-content-center align-items-center mb-4"
              key={index}
            >
              <Card
                style={{ width: "400px" }}
                className="shadow h-100 text-center"
              >
                <Card.Img variant="top" src={p.img} />
                <Card.Body>
                  <Card.Title className=" bg-dark-subtle  rounded-3 fw-bold ">
                    {p.title}
                  </Card.Title>
                  <Card.Text>{p.description}</Card.Text>
                  <Button variant="dark" target="_blank" href={p.link}>
                    Watch video
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Link
        to="https://drive.google.com/file/d/1OtXKIwWpf-fJ_heHxb4EGJYmXpz34tkz/view?usp=sharing"
        target="_blank"
      >
        <Button variant="dark border" size="lg" className="mt-4">
          See My CV
        </Button>
      </Link>
    </section>
  );
}

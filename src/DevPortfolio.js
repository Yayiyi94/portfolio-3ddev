import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageLADS from "./images/lads-image.png";
import imageWeather from "./images/weather-image.png";
import imagePoemAI from "./images/gothicpoem-image.png";
import imageWordlClock from "./images/worldclock-image.png";
import imagePythonTravel from "./images/plantravel-pythonAI.png";
import imagePythonDataMan from "./images/pythongrafics-image.png";
import "./App.css";

export default function DevPortfolio() {
  const projects = [
    {
      title: "LADS Fan club: Front-End",
      img: imageLADS,
      description:
        "This is my first project being a programmer, it is an application simulating a fanclub of the Love and Deespace video game. With this project I learn the basics of programing with html.",
      icons: (
        <p>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-square-js"></i>
          <i class="fa-brands fa-css"></i>
        </p>
      ),

      link: "https://lads-ydltr.netlify.app",
    },
    {
      title: "Weather: Front-End",
      img: imageWeather,
      description:
        "An application of the weather with real data, also shows the day and time of different countries in different areas of time. With this application I learned to use the APIs. HTML, CSS and Javascript were used to make it.",
      icons: (
        <p>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-square-js"></i>
          <i class="fa-brands fa-css"></i>
        </p>
      ),

      link: "https://myweatherapp-yadiradltr.netlify.app",
    },
    {
      title: "Poem AI Generator: Front-End",
      img: imagePoemAI,
      description:
        "With this application you can generate poems with Gothic style by introducing the topic to be made and how many lines are loved. With this application I learned to use AI services and handle user inputs easily and directly. HTML, CSS, JavaScript was used.",
      icons: (
        <p>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-square-js"></i>
          <i class="fa-brands fa-css"></i>
        </p>
      ),

      link: "https://generator-ydltr.netlify.app",
    },
    {
      title: "World Clock: Front-End",
      img: imageWordlClock,
      description:
        "This application has the function of showing the current time of certain cities of the world, in addition to the local time-zone. With this app I learned to work with time zones and creating a responsive interface every time it reloads. HTML, CSS, JavaScript was used.",
      icons: (
        <p>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-square-js"></i>
          <i class="fa-brands fa-css"></i>
        </p>
      ),
      link: "https://world-clock-ydltr.netlify.app",
    },
    {
      title: "Python AI Travel Planner: Back-end",
      img: imagePythonTravel,
      description:
        "This Python code is a mini-assistent travel on the console that APIS consults in real time to show the weather and generate a personalized itinerary using artificial intelligence, with a pleasant visual design thanks to the Rich bookstore. With this I learn about the basics of Python.",
      icons: (
        <p>
          <i class="fa-brands fa-python"></i>
        </p>
      ),
      link: "https://colab.research.google.com/drive/19pALiSzt4rlONO4EMVVaA06AiHDp__41?usp=sharing",
    },
    {
      title: "Python Data Manipulation: Back-end",
      img: imagePythonDataMan,
      description:
        "This code reads a CSV file with three columns (Continent, Year, Population), groups the data by continent in a dictionary structure and graphic (with Matpletlib) the evolution of the population (eg, of Internet users) per year for each continent. With this I learn how to read and show information from a CSV file to a code.",
      icons: (
        <p>
          <i class="fa-brands fa-python"></i>{" "}
        </p>
      ),
      link: "https://replit.com/@yadiratr94/PythonAdvancedProject",
    },
  ];

  return (
    <section className="py-5">
      <Link to="/">
        <Button variant="dark border" size="md" className="mt-4">
          Back to home
        </Button>
      </Link>
      <Container>
        <h2 className="fw-bold text-center mb-5 mt-5">Dev Projects</h2>
        <Row>
          {projects.map((p, index) => (
            <Col
              md={4}
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
                  <Card.Text>
                    {p.description}
                    {p.icons}
                  </Card.Text>
                  <Button variant="dark" target="_blank" href={p.link}>
                    See Projects
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Link
        to="https://drive.google.com/file/d/1xlrj0_fpE19Mceldc_hRXzBWCJQW4zWY/view?usp=sharing"
        target="_blank"
      >
        <Button variant="dark border" size="lg" className="mt-4">
          See My CV
        </Button>
      </Link>
    </section>
  );
}

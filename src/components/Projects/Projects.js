import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectsCards";
import Particle from "../Particle";
import foodg from '../../Assets/Projects/foodg-github.png'
import cars from '../../Assets/Projects/car-collection-github.png'
import routers from '../../Assets/Projects/routers-github.png'
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={routers} isBlog={false} title="Routers"
              description="Explored React Router for dynamic routing, nested routes, and navigation to enhance web development skills."
              ghLink="https://github.com/vasusharrma/ReactRouterDom" />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={foodg} isBlog={false} title="Foodgram"
              description="Food G allows city-wise restaurant searches, highlights top-rated options, and provides detailed menus for each restaurant."
              ghLink="https://github.com/vasusharrma/FoodG" />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={cars} isBlog={false} title="Carcollection"
              description="Built a car showcase app with features to display, delete car cards, and dynamically read detailed descriptions efficiently."
              ghLink="https://github.com/vasusharrma/CarCollectionLatest" />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}
export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import takom from "../../Assets/Projects/takom.png";
import kaliagung from "../../Assets/Projects/kaliagung.png";
import seleksi from "../../Assets/Projects/seleksi.png";
import btc from "../../Assets/Projects/btc.png";
import plate from "../../Assets/Projects/plate.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={takom}
              isBlog={false}
              title="E-Commerce Takom Kanisius"
              description="Developed the Takom Kanisius e-commerce platform using Laravel for the backend, React for the frontend, and MySQL for the database. Integrated Midtrans API for secure payments and RajaOngkir API for automated shipping cost calculations."              
              demoLink="https://takomkanisius.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kaliagung}
              isBlog={false}
              title="E-Commerce Batik Kaliagung"
              description="Developed a fully functional e-commerce platform for Batik Kaliagung using Laravel 10, AJAX, and MySQL, enhancing their online presence. Integrated Fonnte's API for automated WhatsApp notifications and implemented Midtrans API for secure online payments with various methods."              
              demoLink="https://batikkaliagung.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={btc}
              isBlog={false}
              title="BTC PT Kanisius"
              description="Enabled real-time royalty payment monitoring for book authors with automated WhatsApp notifications, reducing operational costs by 40%."              
              demoLink="https://mitra.kanisiusmedia.co.id/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seleksi}
              isBlog={false}
              title="HRIS PT Kanisius"
              description="Streamlined the recruitment process by allowing applicants to upload CVs and certifications,with the system automatically scoring candidates based on data completeness. Integrated WhatsApp notifications for status updates, conducted online tests, and managed a three-stage interview process (HRD, User, Director), with all results recorded for future reference. Automated processes reduced manual evaluation time by 50%."                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plate}
              isBlog={false}
              title="License Plate Recognation"
              description="Developed a vehicle license plate detection system using the YOLOv8 algorithm, achieving an impressive 89% accuracy on test data. The system efficiently identifies and localizes license plates in various real-world conditions, demonstrating robust performance and reliability."                            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

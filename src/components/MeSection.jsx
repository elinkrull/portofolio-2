import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import NavbarComp from "./NavbarComp";

function MeSection() {
  return (
    <div className="hero-section py-5">
      <Container
        className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-3"
        style={{ gap: "12rem" }}>
        <div className="d-flex align-items-center mb-4 mb-md-0">
          <NavbarComp />
        </div>
        <div>
          <p>Front-End Developer | React | JavaScript | UI/UX</p>
        </div>
      </Container>
    </div>
  );
}

export default MeSection;

import { Container } from "react-bootstrap";
import Logo from "./Logo";

function MeSection() {
  return (
    <div className="me-section py-5">
      <Container
        className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-3"
        style={{ gap: "12rem" }}>
        <div className="d-flex align-items-center mb-4 mb-md-0">
          <Logo />
        </div>
        <div>
          <p>Front-End Developer | React | JavaScript | UI/UX</p>
        </div>
      </Container>
    </div>
  );
}

export default MeSection;

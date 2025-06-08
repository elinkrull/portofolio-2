import { Container, Row, Col } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectDetails({
  title,
  image,
  imageAlt,
  imageCaption,
  description,
  reflections,
  liveUrl,
  githubUrl,
}) {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={7}>
          <h1 className="mb-4">{title}</h1>
          <div className="project-image-wrapper">
            <img
              src={image}
              alt={imageAlt}
              className="img-fluid rounded shadow"
            />
            <p className="text-muted text-center mt-2">{imageCaption}</p>
          </div>

          <div className="mb-4">
            <h3>Description</h3>
            <p>{description}</p>
          </div>

          <div className="mb-4">
            <h3>Reflections & Improvements</h3>
            <p>{reflections}</p>
          </div>

          <div className="d-flex gap-3 flex-wrap">
            <a
              href={liveUrl}
              className="btn btn-primary text-white"
              target="_blank"
              rel="noopener noreferrer">
              Live Site <FaExternalLinkAlt className="ms-2" />
            </a>

            <a
              href={githubUrl}
              className="btn btn-dark"
              target="_blank"
              rel="noopener noreferrer">
              GitHub Repo <FaGithub className="ms-2" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectDetails;

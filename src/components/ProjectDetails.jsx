import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import { useState } from "react";

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
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={7}>
          <div className="d-flex align-items-center mb-4">
            <h1 className="me-3 mb-0">{title}</h1>
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>{copied ? "Copied!" : "Copy Link"}</Tooltip>}>
              <button
                onClick={handleCopyLink}
                className="btn btn-outline-secondary btn-sm">
                <FaLink />
              </button>
            </OverlayTrigger>
          </div>

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
              GitHub Repo ReadMe Page
              <FaGithub className="ms-2" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectDetails;

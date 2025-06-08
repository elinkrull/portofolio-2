import Layout from "../components/Layout";
import { Container, Row, Col, Image } from "react-bootstrap";

function AboutMePage() {
  return (
    <Layout>
      <Container style={{ maxWidth: "900px" }}>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <Image
              src="/profilepicture.jpg"
              roundedCircle
              fluid
              style={{
                width: "180px",
                height: "180px",
                objectFit: "contain",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Col>
          <Col md={8}>
            <h1 className="mb-4 mt-5">About Me</h1>
            <p className="lead">
              Hello. My name is Elin, and I am a frontend developer with a
              strong interest in Design, CSS Framework, React and JavaScript.
            </p>
            <p>
              I am about to complete a two-year education in Frontend
              Development at Noroff Vocational School. During my studies, I have
              developed several projects that combine design, user-friendliness,
              and clean code practices.
            </p>
            <p>
              I am eager to learn new technologies and to build well-designed
              solutions that provide great user experiences. I am currently
              looking for opportunities where I can grow as a developer and
              contribute to exciting projects.
            </p>
            <p>
              In my free time, I enjoy working with ceramics, spending time in
              the garden, and going on trips with my family.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default AboutMePage;

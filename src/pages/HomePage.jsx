import { Container, Row, Col } from "react-bootstrap";
import ProjectTeaserCard from "../components/ProjectTeaserCard";
import Layout from "../components/Layout";

const projects = [
  {
    title: "Javascript Frameworks",
    description:
      "An eCom store built with HTML, CSS, JavaScript and Create-React-App",
    link: "/project-one",
    image: "/printscreen1.png",
  },
  {
    title: "Semester Project 2",
    description:
      "An auction application built with HTML, CSS Bootstrap and JavaScript.",
    link: "/project-two",
    image: "/semesterProject.png",
  },
  {
    title: "Exam Project 2",
    description:
      "An accommodation booking site built with HTML, CSS FrameWork, JavaScript and React",
    link: "/project-three",
    image: "/printscreen3.png",
  },
];

function HomePage() {
  return (
    <Layout>
      <Container className="py-5" id="projects">
        <h1 className="text-center mb-5">My Projects</h1>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <ProjectTeaserCard project={project} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

export default HomePage;

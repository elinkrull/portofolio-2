import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import Layout from "../components/Layout";

const projects = [
  {
    title: "Javascript Frameworks",
    description:
      "An eCom store built with HTML, CSS, JavaScript and Create-React-App",
    link: "https://ca-js-frameworks.netlify.app/",
    image: "/printscreen1.png",
  },
  {
    title: "Semester Project 2",
    description: "An auction application.",
    link: "https://github.com/elinkrull/SemesterProject2",
    image: "/printscreen2.png",
  },
  {
    title: "Exam Project 2",
    description: "Accommodation booking site.",
    link: "https://holidaze-project-exam-2-etj.netlify.app/",
    image: "/printscreen3.png",
  },
];

function HomePage() {
  return (
    <>
      <Layout>
        <Container className="py-5" id="projects">
          <h1 className="text-center mb-5">My Projects</h1>
          <Row>
            {projects.map((project, index) => (
              <Col key={index} xs={12} md={6} lg={4}>
                <ProjectCard project={project} index={index} />
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default HomePage;

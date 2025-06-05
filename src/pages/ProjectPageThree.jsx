import Layout from "../components/Layout";
import ProjectDetails from "../components/ProjectDetails";

function ProjectTwo() {
  return (
    <Layout>
      <ProjectDetails
        title="Project Exam"
        image="/printscreen3.png"
        imageAlt="Project Exam"
        imageCaption="A booking site built with HTML, CSS bootstrap, JS and React/Vite"
        description="This accommodation booking application was developed as part of my final exam project. The goal was to design, plan, and build a fully functional frontend application for Holidaze using React, Bootstrap, and the provided API. The project includes both a customer-facing and admin-facing interface where users can browse venues, book accommodations, and venue managers can create and manage their listings. The project was designed in Figma, organized with a Kanban board, and deployed to Netlify."
        improvements
        and
        reflections=""
        liveUrl="/"
        githubUrl="/"
      />
    </Layout>
  );
}

export default ProjectTwo;

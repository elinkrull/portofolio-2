import Layout from "../components/Layout";
import ProjectDetails from "../components/ProjectDetails";

function ProjectOne() {
  return (
    <Layout>
      <ProjectDetails
        title="JavaScript Framework"
        image="/printscreen1.png"
        imageAlt="JavaScript Frameworks Project"
        imageCaption="Homepage of the eCommerce React application"
        description="This eCommerce store was built using React (Create React App), JavaScript, HTML and CSS. The application integrates with an API to display products, allow users to add products to the cart, and complete checkout functionality. Fully responsive design and clean UI focused on user experience."
        improvements
        and
        reflections="Throughout this project, I focused on improving both code quality and user experience. I have started to implement JSDoc documentation to better structure and document the codebase, and performed a thorough code cleanup by removing unnecessary console logs, trailing whitespaces, and unused fragments. I also ensured more consistent use of const for variables. On the design side, I optimized the layout to give all product cards a uniform size and consistent element placement, updated button styling for a more polished look, and made the entire site fully responsive to provide a smooth experience across different devices. These improvements helped me strengthen my skills in React, component structure, and responsive design."
        liveUrl="https://ca-js-frameworks.netlify.app/"
        githubUrl="https://github.com/elinkrull/cr-ca-js-framework/blob/main/README.md"
      />
    </Layout>
  );
}

export default ProjectOne;

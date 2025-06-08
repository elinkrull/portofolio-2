import Layout from "../components/Layout";
import ProjectDetails from "../components/ProjectDetails";

function ProjectTwo() {
  return (
    <Layout>
      <ProjectDetails
        title="Semester Project"
        image="/semesterProject.png"
        imageAlt="Semester Project"
        imageCaption="An auction site built with HTML, CSS and JS"
        description="This eCommerce store was built using React (Create React App), JavaScript, HTML and CSS. The application integrates with an API to display products, allow users to add products to the cart, and complete checkout functionality. The users can add items to be bid on and bid on items other users have put up for auction. When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings"
        improvements
        and
        reflections="During this project, I faced some challenges with implementing parts of the JavaScript functionality and fulfilling all the user story requirements. Since then, I have started redesigning the layout and improving the user experience. The project is still a work in progress, and I plan to continue refining the JavaScript functionality, improving the code quality, and adding proper documentation using JSDoc. I also need to review the overall project structure, as there are still some issues with certain links that need to be fixed."
        liveUrl="https://melodic-cascaron-49bea7.netlify.app/"
        githubUrl="https://github.com/elinkrull/semester-project-2/blob/main/README.md"
      />
    </Layout>
  );
}

export default ProjectTwo;

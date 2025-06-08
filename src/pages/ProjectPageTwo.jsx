import Layout from "../components/Layout";
import ProjectDetails from "../components/ProjectDetails";

function ProjectTwo() {
  return (
    <Layout>
      <ProjectDetails
        title="Semester Project"
        image="/printscreen2.png"
        imageAlt="Semester Project"
        imageCaption="An auction site built with HTML, CSS and JS"
        description="This eCommerce store was built using React (Create React App), JavaScript, HTML and CSS. The application integrates with an API to display products, allow users to add products to the cart, and complete checkout functionality. The users can add items to be bid on and bid on items other users have put up for auction. When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings"
        improvements
        and
        reflections=""
        liveUrl="/"
        githubUrl="https://github.com/elinkrull/SemesterProject2"
      />
    </Layout>
  );
}

export default ProjectTwo;

// import { Container, Row, Col } from "react-bootstrap";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// /**
//  * Reusable ProjectDetail component
//  * @param {object} props
//  * @param {string} props.title - Project title
//  * @param {string} props.image - Image source path
//  * @param {string} props.imageAlt - Alt text for image
//  * @param {string} props.imageCaption - Caption below image
//  * @param {string} props.description - Project description text
//  * @param {string} props.reflections - Project reflections/improvements text
//  * @param {string} props.liveUrl - Live site URL
//  * @param {string} props.githubUrl - GitHub repo URL
//  */
// function ProjectDetail({
//   title,
//   image,
//   imageAlt,
//   imageCaption,
//   description,
//   reflections,
//   liveUrl,
//   githubUrl,
// }) {
//   return (
//     <Container className="py-5">
//       <h1 className="mb-4">{title}</h1>

//       <Row className="mb-4">
//         <Col md={8} className="mx-auto">
//           <div className="project-image-wrapper mb-3">
//             <img
//               src={image}
//               alt={imageAlt}
//               className="img-fluid rounded shadow"
//             />
//             <p className="text-muted text-center mt-2">{imageCaption}</p>
//           </div>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col md={10} className="mx-auto">
//           <h3>Description</h3>
//           <p>{description}</p>

//           <h3>Reflections & Improvements</h3>
//           <p>{reflections}</p>

//           <div className="d-flex gap-3 flex-wrap mt-4">
//             <a
//               href={liveUrl}
//               className="btn btn-primary text-white"
//               target="_blank"
//               rel="noopener noreferrer">
//               Live Site <FaExternalLinkAlt className="ms-2" />
//             </a>

//             <a
//               href={githubUrl}
//               className="btn btn-dark"
//               target="_blank"
//               rel="noopener noreferrer">
//               GitHub Repo <FaGithub className="ms-2" />
//             </a>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ProjectDetail;

import { Container, Row, Col, Button } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectDetail() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <h1 className="mb-4">JavaScript Frameworks</h1>
          <Col md={6}>
            <img
              src="/printscreen1.png"
              alt="Homepage of the eCommerce React application"
              className="img-fluid rounded shadow"
            />
            <p className="text-center mt-2 text-muted small">
              Homepage of the eCommerce React application
            </p>
          </Col>

          <h4>Description</h4>
          <p>
            This eCommerce store was built using React (Create React App),
            JavaScript, HTML and CSS. The application integrates with an API to
            display products, allows users to add products to the cart, and
            complete checkout functionality. Fully responsive design and clean
            UI focused on user experience.
          </p>

          <h4>Reflections & Improvements</h4>
          <p>
            Throughout this project, I focused on improving both code quality
            and user experience. I implemented JSDoc documentation to better
            structure and document the codebase, and performed a thorough code
            cleanup by removing unnecessary console logs, trailing whitespaces,
            and unused fragments. I also ensured more consistent use of const
            for variables. On the design side, I optimized the layout to give
            all product cards a uniform size and consistent element placement,
            updated button styling for a more polished look, and made the entire
            site fully responsive to provide a smooth experience across
            different devices.
          </p>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <Button
              variant="primary"
              href="https://ca-js-frameworks.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">
              Live Site <FaExternalLinkAlt className="ms-2" />
            </Button>

            <Button
              variant="dark"
              href="https://github.com/elinkrull/your-repo"
              target="_blank"
              rel="noopener noreferrer">
              GitHub Repo <FaGithub className="ms-2" />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectDetail;

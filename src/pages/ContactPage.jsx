import { Container } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import Layout from "../components/Layout";

function ContactPage() {
  return (
    <Layout>
      <Container className="d-flex flex-column align-items-center">
        <h1 className="p-5">Contact</h1>
        <p>
          Feel free to reach out via email: <strong>eth_86@hotmail.com</strong>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/elin-thoen-jakobsen-2224a2264/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin size={24} style={{ marginRight: "8px" }} />
            LinkedIn
          </a>
        </p>
      </Container>
    </Layout>
  );
}

export default ContactPage;

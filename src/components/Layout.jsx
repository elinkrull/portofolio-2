import MainNavbar from "./MainNavbar";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MainNavbar />
      <main className="flex-grow-1">
        <Container className="py-4">{children}</Container>
      </main>
      <Footer />
    </div>
  );
}

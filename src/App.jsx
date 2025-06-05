import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectOne from "./pages/ProjectPageOne";
import ProjectTwo from "./pages/ProjectPageTwo";
import ProjectThree from "./pages/ProjectPageThree";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/project-one" element={<ProjectOne />} />
        <Route path="/project-two" element={<ProjectTwo />} />
        <Route path="/project-three" element={<ProjectThree />} />
      </Routes>
    </Router>
  );
}

export default App;

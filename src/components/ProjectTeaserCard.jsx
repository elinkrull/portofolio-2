import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function ProjectTeaserCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3 }}
      whileHover={{ scale: 1.05 }}>
      <Card className="mb-4 shadow-sm border-0 rounded-3">
        <Card.Img variant="top" src={project.image} alt={project.title} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Button
            className="text-white"
            variant="primary"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer">
            Read More
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectTeaserCard;

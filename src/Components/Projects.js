import { Card } from ".";
import projects from "../projects.json"

const Projects = () => {
  return (
    <div className="container" id="projects">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center mb-4 mb-lg-6">
          <h2 className="display-2 fw-bold">Projects</h2>
          <p className="lead">Projects I have worked on</p>
        </div>
      </div>
      <div className="row align-items-center">
        {projects.map((project, index) => (
          <Card key={index} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

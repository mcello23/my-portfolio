import '../styles/frameworks.css';
import '../styles/side-projects.css';
import SideProjectCard from './sideprojects/SideProjectCard';
import { sideProjectsData } from './sideprojects/SideProjects.data';

const SideProjects = () => {
  return (
    <div className="sp-page">
      <div className="container">
        <div className="sp-page-header">
          <h3>Side Projects & Automation Tools</h3>
          <p>
            Innovative automation solutions showcasing AI integration, scripting expertise, and
            real-world problem-solving.
          </p>
        </div>

        <div className="sp-grid">
          {sideProjectsData.map((project) => (
            <SideProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideProjects;

import '../styles/frameworks.css';
import AdvancedTesting from './frameworks/AdvancedTesting';
import FrameworkCard from './frameworks/FrameworkCard';
import { frameworksData } from './frameworks/Frameworks.data';

const Frameworks = () => {
  return (
    <div className="fw-page">
      <div className="container">
        <div className="fw-page-header">
          <h3>Testing Frameworks & Open-Source Repos</h3>
          <p>
            E2E, API, and performance automation — each backed by CI/CD pipelines and live reports.
          </p>
        </div>

        <div className="fw-api-endpoints fw-api-endpoints--centered">
          <span className="fw-card__targets-label">Testing</span>
          <a
            href="https://www.saucedemo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fw-api-endpoints__badge"
          >
            <i className="material-icons">language</i>
            saucedemo.com
          </a>
        </div>

        <div className="fw-grid">
          {frameworksData.map((framework, index) => (
            <FrameworkCard key={`${framework.id}-${index}`} framework={framework} />
          ))}
        </div>

        <div className="fw-section-divider">
          <h4>⚡ API & Performance Testing</h4>
          <p>k6 load testing, Supertest API validation, and Postman collections</p>
        </div>
      </div>

      <AdvancedTesting />
    </div>
  );
};

export default Frameworks;

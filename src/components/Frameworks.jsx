import { useEffect } from 'react';
import '../styles/frameworks.css';
import AdvancedTesting from './frameworks/AdvancedTesting';
import ComingSoonHero from './frameworks/ComingSoonHero';
import FrameworkCard from './frameworks/FrameworkCard';
import FrameworkHero from './frameworks/FrameworkHero';
import { frameworksData } from './frameworks/Frameworks.data';

const Frameworks = () => {
  useEffect(() => {
    // Initialize Materialize components
    if (window.M) {
      window.M.AutoInit();
    }
  }, []);

  return (
    <div>
      <div style={{ marginTop: '80px' }}></div>

      <div className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="row center">
            <h3 className="header col s12 dark" style={{ marginBottom: '40px' }}>
              Enterprise Testing Frameworks & Automation
            </h3>
            <p className="flow-text grey-text text-darken-3">
              Comprehensive testing solutions with advanced CI/CD integration, automated reporting,
              and enterprise-grade validation
            </p>
          </div>
        </div>
      </div>

      {frameworksData.map((framework) => (
        <div key={framework.id}>
          <FrameworkHero framework={framework} />
          <div className="container" style={{ padding: '80px 0' }}>
            <br />
            <FrameworkCard framework={framework} />
            <br />
            <br />
          </div>
        </div>
      ))}

      <ComingSoonHero />

      <AdvancedTesting />
    </div>
  );
};

export default Frameworks;

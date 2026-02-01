/**
 * Skills Data
 * Centralized data for the Skills component
 * Extracted from Skills.jsx to separate data from presentation
 */

export const skillCategories = [
  {
    icon: 'code',
    title: 'Languages',
    color: '#667eea',
    ariaLabel: 'Programming languages',
    skills: [
      {
        name: 'TypeScript',
        gradient: 'linear-gradient(135deg, #007acc 0%, #3178c6 100%)',
        shadow: '0 4px 15px rgba(49, 120, 198, 0.4)',
        icon: (
          <img
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%3E%3Crect%20width%3D%22120%22%20height%3D%22120%22%20rx%3D%2218%22%20fill%3D%22%23fff%22/%3E%3Ctext%20x%3D%2260%22%20y%3D%2282%22%20font-family%3D%22Inter%2CArial%2Csans-serif%22%20font-size%3D%2264%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20fill%3D%22%233178c6%22%3ETS%3C/text%3E%3C/svg%3E"
            alt=""
            width="16"
            height="16"
            style={{
              width: '16px',
              height: '16px',
              marginRight: '5px',
              verticalAlign: 'middle',
            }}
            aria-hidden="true"
          />
        ),
      },
      {
        name: 'JavaScript',
        gradient: 'linear-gradient(135deg, #f0db4f 0%, #f7df1e 100%)',
        shadow: '0 4px 15px rgba(247, 223, 30, 0.4)',
        color: '#323330',
        icon: (
          <i className="fab fa-js-square" style={{ marginRight: '5px' }} aria-hidden="true"></i>
        ),
      },
    ],
  },
  {
    icon: 'terminal',
    title: 'Shell & Environment',
    color: '#2e7d32',
    ariaLabel: 'Shell and environment tools',
    skills: [
      {
        name: 'Bash/Zsh',
        gradient: 'linear-gradient(135deg, #2e7d32 0%, #43a047 100%)',
        shadow: '0 4px 15px rgba(67, 160, 71, 0.4)',
        icon: <i className="fas fa-terminal" style={{ marginRight: '5px' }} aria-hidden="true"></i>,
      },
      {
        name: 'WSL',
        gradient: 'linear-gradient(135deg, #1565c0 0%, #1e88e5 100%)',
        shadow: '0 4px 15px rgba(30, 136, 229, 0.4)',
        icon: <i className="fab fa-windows" style={{ marginRight: '5px' }} aria-hidden="true"></i>,
      },
      {
        name: 'Node.js',
        gradient: 'linear-gradient(135deg, #3c873a 0%, #68a063 100%)',
        shadow: '0 4px 15px rgba(104, 160, 99, 0.4)',
        icon: <i className="fab fa-node-js" style={{ marginRight: '5px' }} aria-hidden="true"></i>,
      },
    ],
  },
  {
    icon: 'bug_report',
    title: 'E2E/Unit Testing Frameworks',
    color: '#43a047',
    ariaLabel: 'Testing frameworks',
    skills: [
      {
        name: 'Cypress',
        gradient: 'linear-gradient(135deg, #17202c 0%, #69d3a7 100%)',
        shadow: '0 4px 15px rgba(105, 211, 167, 0.4)',
        icon: (
          <img
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M60%2010C32.4%2010%2010%2032.4%2010%2060s22.4%2050%2050%2050%2050-22.4%2050-50S87.6%2010%2060%2010zm0%2090c-22.1%200-40-17.9-40-40s17.9-40%2040-40%2040%2017.9%2040%2040-17.9%2040-40%2040z%22/%3E%3Cpath%20d%3D%22M60%2030c-5.5%200-10%204.5-10%2010v30c0%205.5%204.5%2010%2010%2010h5c5.5%200%2010-4.5%2010-10V40c0-5.5-4.5-10-10-10h-5z%22/%3E%3C/svg%3E"
            alt=""
            width="16"
            height="16"
            style={{
              width: '16px',
              height: '16px',
              marginRight: '5px',
              verticalAlign: 'middle',
            }}
            aria-hidden="true"
          />
        ),
      },
      {
        name: 'Playwright',
        gradient: 'linear-gradient(135deg, #d45348 0%, #a93226 100%)',
        shadow: '0 4px 15px rgba(212, 83, 72, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            theater_comedy
          </i>
        ),
      },
      {
        name: 'Jest',
        gradient: 'linear-gradient(135deg, #c21325 0%, #99588a 100%)',
        shadow: '0 4px 15px rgba(194, 19, 37, 0.4)',
        icon: (
          <img
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20fill%3D%22%23c21325%22%3E%3Cpath%20d%3D%22M80%2030L60%2050%2040%2030%2020%2050l20%2040%2020-20%2020%2020%2020-40z%22/%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2285%22%20r%3D%228%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E"
            alt=""
            width="16"
            height="16"
            style={{
              width: '16px',
              height: '16px',
              marginRight: '5px',
              verticalAlign: 'middle',
            }}
            aria-hidden="true"
          />
        ),
      },
      {
        name: 'Cucumber/Gherkin',
        gradient: 'linear-gradient(135deg, #23d96c 0%, #00a44f 100%)',
        shadow: '0 4px 15px rgba(35, 217, 108, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            check_circle
          </i>
        ),
      },
    ],
  },
  {
    icon: 'settings',
    title: 'CI/CD & DevOps',
    color: '#1e88e5',
    ariaLabel: 'CI/CD and DevOps tools',
    skills: [
      {
        name: 'Azure DevOps',
        gradient: 'linear-gradient(135deg, #0078d4 0%, #0053a6 100%)',
        shadow: '0 4px 15px rgba(0, 120, 212, 0.4)',
        icon: (
          <i className="fab fa-microsoft" style={{ marginRight: '5px' }} aria-hidden="true"></i>
        ),
      },
      {
        name: 'GitHub Actions',
        gradient: 'linear-gradient(135deg, #24292e 0%, #000000 100%)',
        shadow: '0 4px 15px rgba(36, 41, 46, 0.4)',
        icon: <i className="fab fa-github" style={{ marginRight: '5px' }} aria-hidden="true"></i>,
      },
      {
        name: 'Docker',
        gradient: 'linear-gradient(135deg, #2496ed 0%, #0db7ed 100%)',
        shadow: '0 4px 15px rgba(36, 150, 237, 0.4)',
        icon: <i className="fab fa-docker" style={{ marginRight: '5px' }} aria-hidden="true"></i>,
      },
      {
        name: 'ArgoCD',
        gradient: 'linear-gradient(135deg, #ef7b4d 0%, #e84f2d 100%)',
        shadow: '0 4px 15px rgba(239, 123, 77, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            cloud_sync
          </i>
        ),
      },
    ],
  },
  {
    icon: 'api',
    title: 'API & Testing Tools',
    color: '#fb8c00',
    ariaLabel: 'API and testing tools',
    skills: [
      {
        name: 'GraphQL',
        gradient: 'linear-gradient(135deg, #e10098 0%, #c40080 100%)',
        shadow: '0 4px 15px rgba(225, 0, 152, 0.4)',
        icon: (
          <img
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%3E%3Cpolygon%20fill%3D%22%23e10098%22%20points%3D%2260%2C10%20100%2C35%20100%2C85%2060%2C110%2020%2C85%2020%2C35%22/%3E%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2260%2C30%2075%2C40%2075%2C80%2060%2C90%2045%2C80%2045%2C40%22/%3E%3C/svg%3E"
            alt=""
            width="16"
            height="16"
            style={{
              width: '16px',
              height: '16px',
              marginRight: '5px',
              verticalAlign: 'middle',
            }}
            aria-hidden="true"
          />
        ),
      },
      {
        name: 'Postman / Bruno',
        gradient: 'linear-gradient(135deg, #ff6c37 0%, #ff4500 100%)',
        shadow: '0 4px 15px rgba(255, 108, 55, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            send
          </i>
        ),
      },
      {
        name: 'API Stubbing (Cypress)',
        gradient: 'linear-gradient(135deg, #17202a 0%, #1e2936 100%)',
        shadow: '0 4px 15px rgba(23, 32, 42, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            block
          </i>
        ),
      },
      {
        name: 'Mock Testing',
        gradient: 'linear-gradient(135deg, #8e44ad 0%, #6c3483 100%)',
        shadow: '0 4px 15px rgba(142, 68, 173, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            layers
          </i>
        ),
      },
    ],
  },
  {
    icon: 'devices',
    title: 'Mobile & Database',
    color: '#8e24aa',
    ariaLabel: 'Mobile and database technologies',
    skills: [
      {
        name: 'Appium',
        gradient: 'linear-gradient(135deg, #662d91 0%, #4a148c 100%)',
        shadow: '0 4px 15px rgba(102, 45, 145, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            smartphone
          </i>
        ),
      },
      {
        name: 'Selenium',
        gradient: 'linear-gradient(135deg, #43b02a 0%, #2e7d32 100%)',
        shadow: '0 4px 15px rgba(67, 176, 42, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            web
          </i>
        ),
      },
      {
        name: 'WebDriverIO',
        gradient: 'linear-gradient(135deg, #ea5906 0%, #c9510c 100%)',
        shadow: '0 4px 15px rgba(234, 89, 6, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            directions_car
          </i>
        ),
      },
      {
        name: 'SQL / Postgres',
        gradient: 'linear-gradient(135deg, #336791 0%, #294d6b 100%)',
        shadow: '0 4px 15px rgba(51, 103, 145, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            storage
          </i>
        ),
      },
    ],
  },
  {
    icon: 'assessment',
    title: 'Reporting & Version Control',
    color: '#c62828',
    ariaLabel: 'Reporting and version control tools',
    skills: [
      {
        name: 'Allure Reports',
        gradient: 'linear-gradient(135deg, #f4c542 0%, #f0a830 100%)',
        shadow: '0 4px 15px rgba(244, 197, 66, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            insert_chart
          </i>
        ),
      },
      {
        name: 'Mochawesome',
        gradient: 'linear-gradient(135deg, #8d6748 0%, #6f5539 100%)',
        shadow: '0 4px 15px rgba(141, 103, 72, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            description
          </i>
        ),
      },
      {
        name: 'Git',
        gradient: 'linear-gradient(135deg, #f05032 0%, #c9302c 100%)',
        shadow: '0 4px 15px rgba(240, 80, 50, 0.4)',
        icon: <i className="fab fa-git-alt" style={{ marginRight: '5px' }} aria-hidden="true"></i>,
      },
      {
        name: 'Nightly Builds',
        gradient: 'linear-gradient(135deg, #424242 0%, #212121 100%)',
        shadow: '0 4px 15px rgba(66, 66, 66, 0.4)',
        icon: (
          <i
            className="material-icons"
            style={{ fontSize: '16px', marginRight: '5px', verticalAlign: 'middle' }}
            aria-hidden="true"
          >
            nights_stay
          </i>
        ),
      },
    ],
  },
];

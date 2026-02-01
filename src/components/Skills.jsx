/**
 * Skills Component
 * Displays technical skills organized by category
 * Refactored to use extracted sub-components and data
 */

import { memo } from 'react';
import SkillCategory from './skills/SkillCategory';
import { skillCategories } from './skills/skillsData.jsx';

const Skills = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col s12">
            {/* Tech Stack */}
            <div className="intro-card">
              <h3>💻 Tech Stack</h3>
              <div
                className="center-align"
                style={{ marginTop: '30px' }}
                aria-label="Technology categories"
              >
                {skillCategories.map((category) => (
                  <SkillCategory
                    key={category.title}
                    icon={category.icon}
                    title={category.title}
                    color={category.color}
                    skills={category.skills}
                    ariaLabel={category.ariaLabel}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Skills);

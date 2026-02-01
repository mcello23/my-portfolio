/**
 * SkillCategory Component
 * Displays a category of skills with title and skill tags
 */

import SkillIcon from './SkillIcon';
import SkillTag from '../common/SkillTag';

const SkillCategory = ({ icon, title, color, skills, ariaLabel }) => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h3
        style={{
          textAlign: 'left',
          color,
          fontWeight: 600,
          marginBottom: '15px',
        }}
      >
        <SkillIcon icon={icon} color={color} />
        {title}
      </h3>
      <div role="list" aria-label={ariaLabel}>
        {skills.map((skill) => (
          <SkillTag
            key={skill.name}
            name={skill.name}
            gradient={skill.gradient}
            shadow={skill.shadow}
            icon={skill.icon}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;

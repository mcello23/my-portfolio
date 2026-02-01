/**
 * SkillTag Component
 * Reusable skill tag with gradient background and shadow
 * Used by Skills and Articles components
 */

const SkillTag = ({ name, gradient, shadow, icon, color }) => {
  return (
    <span
      role="listitem"
      className="skill-tag"
      style={{
        background: gradient,
        boxShadow: shadow,
        ...(color && { color }),
      }}
    >
      {icon}
      {name}
    </span>
  );
};

export default SkillTag;

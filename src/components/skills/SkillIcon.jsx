/**
 * SkillIcon Component
 * Category icon with consistent styling
 */

const SkillIcon = ({ icon, color }) => {
  return (
    <i className="material-icons" style={{ verticalAlign: 'middle', color }} aria-hidden="true">
      {icon}
    </i>
  );
};

export default SkillIcon;

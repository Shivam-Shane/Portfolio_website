// src/components/skills/SkillBox.jsx
const SkillBox = ({ title, skills, gif }) => {
  return (
    <div
      className="skills_content"
      data-aos={title.includes("Front") ? "fade-right" : "fade-left"}
      data-aos-delay="0"
    >
      {/* Hover GIF Background */}
      <div className="skills_gif-overlay">
        <img src={gif} alt={`${title} animation`} className="skills_gif" />
      </div>

      <h3 className="skills_title">{title}</h3>

      <div className="skills_box">
        {skills.map((data, i) => (
          <div
            className="skills_data"
            key={i}
            data-aos={i % 2 !== 0 ? "fade-left" : "fade-right"}
            data-aos-delay="300"
          >
            <i className="uil uil-check-circle skills_icon"></i>
            <div>
              <h3 className="skills_name">{data.skill_name}</h3>
              <span className="skills_level">{data.skill_level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;
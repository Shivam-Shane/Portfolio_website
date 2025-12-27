
import SkillBox from "./SkillBox";
import DataScienceFlow from '../particles/DataScienceFlow';

const Skills = () => {
  const dataSkills = [
    { skill_name: "Python", skill_level: "Advanced" },
    { skill_name: "Gen AI", skill_level: "Intermediate" },
    { skill_name: "Langgraph", skill_level: "Intermediate" },
    { skill_name: "Machine Learning", skill_level: "Intermediate" },
    { skill_name: "Deep Learning", skill_level: "Intermediate" },
    { skill_name: "Statistics", skill_level: "Intermediate" },
    ];
  const backendSkills = [
    {skill_name: "MSSQL", skill_level: "Intermediate", },
    {skill_name: "Cache Redis",skill_level: "Beginners", },
    { skill_name: "Django", skill_level: "Intermediate" },
    {skill_name: "RestApi",skill_level: "Intermediate",},
    ];
  const DevOpsSkills = [
    {skill_name: "Docker", skill_level: "Intermediate", },
    {skill_name: "Linux",skill_level: "Workaround", },
    {skill_name: "Git/Github",skill_level: "Intermediate",},
    {skill_name: "Grafana",skill_level: "Beginners",},
    {skill_name: "AWS",skill_level: "Intermediate",},
    ];
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title" data-aos="zoom-in">Skills</h2>
      <span className="section_subtitle" data-aos="zoom-in">My Tech Stack</span>
      <div className="skills_container container grid">
        <SkillBox title="Data Developer" skills={dataSkills} gif="/gifs/dataflow.gif"/>
        <SkillBox title="Backend Developer" skills={backendSkills} gif="/gifs/backendflow.gif" />
        <SkillBox title="DevOps  " skills={DevOpsSkills} gif="/gifs/devopsflow.gif" />
      </div>
      <DataScienceFlow/>
    </section>
  );
};

export default Skills;

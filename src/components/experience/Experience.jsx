import ExperienceBox from "./ExperienceBox";
const Experience = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section_title" data-aos="zoom-in">
        Experience.
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        My Professional Journey
      </span>

      <div className="resume_container container grid">
        <ExperienceBox
          heading="Work"
          iconClass="briefcase-alt"
          qualification={[
            {
              title: "Gen AI Engineer",
              // either provide a string:
              // location: "AISolutions",
              // or provide an object with name + url
              location: { name: "AISolutions", url: "https://aisolutions.ai" },
              calender: "Nov 2025 - Present",
              // add a short list of professional responsibilities / achievements
              details: [
                "Designed and deployed production-level LLM-based assistants for customer support workflows.",
                "Built prompt pipelines and retrieval-augmented generation (RAG) using vector DBs (Pinecone/Weaviate) and optimized embeddings for latency and cost.",
                "Implemented monitoring and guardrails for hallucination detection, prompt testing, and usage cost tracking.",
                "More to design, More to learn."
              ],
            },
            {
              title: "IT Engineer",
              location: { name: "Indus Valley Partners", url: "https://www.ivp.in/" },
              calender: "January 2022 - October 2024",
              details: [
                "Manage and optimize container deployment and orchestration using Amazon EKS, ensuring scalability and reliability for Kubernetes applications with cross-functional teams",
                "Collaborated closely with development and operations teams and managed support to streamline CI/CD processes, enhancing automation and deployment lifecycles.",
                "Designed and deployed a custom service monitoring system using Python, which automates reading and categorizing emails for critical/down services, routing them to the appropriate teams. This solution has eliminated the need for manual intervention, reducing response time by 77% and ensuring real-time issue resolution via email alerts, resulting in minimal production downtime."
              ],
            },
          ]}
        />
        
        <ExperienceBox
          heading="Education"
          iconClass="graduation-cap"
          qualification={[
            {
              title: "Bachelor of Computer Applications",
              location: "Phagwara, Punjab",
              calender: "2019-2022",
            },
            {
              title: "Intermediate",
              location: "Govt. Sen. Sec. school (Multipurpose) , Ludhiana Punjab",
              calender: "2018 - 2019",
            },
            {
              title: "Matriculation",
              location: "K.D Public School, Ludhiana Punjab",
              calender: "2016 - 2017",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;

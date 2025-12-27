import Project from "./Project";


const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section_title" data-aos="zoom-in">
        Projects
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        Most recent work
      </span>

      <div className="projects_container container">
        <Project
            projects={[
              {
                imageURL: "/images/project/hireboosted.png",
                title: "HireBoosted",
                demo: "https://hireboosted.vercel.app/",
                date: "Aug 2025 - Sep 2025",
                github: "",
                description: `<p>Hireboosted, is designed to help job seekers prepare for interviews through an AI-powered, audio-based experience.</p>
                <ul>
                  <li>🔹 <strong>Easy Access</strong> – Users input their target role, resume, and experience level, and the system generates personalized questions.</li>
                  <li>🔹 <strong>Fast Response</strong> – Delivers lightning-fast answers by combining messages history and caching strategies.</li>
                  <li>🔹 <strong>Less Work, More Knowledge</strong> – Aggregates LLM knowledge and provide vast range of interview questions.</li>
                </ul>`
              },
              {
                imageURL: "/images/project/asknimbus.png",
                title: "Ask Nimbus",
                demo: "https://asknimbus.vercel.app/",
                date: "Apr 2025 - Jun 2025",
                github: "https://github.com/Shivam-Shane/asknimbus.git",
                description: `<p>Ask Nimbus is a chatbot that provides answers based on AWS documentation and AWS re:Post Knowledge Center data. It leverages Retrieval-Augmented Generation (RAG) with Pinecone vector storage for efficient content retrieval, Upstash Redis for caching, and a Django backend hosted as a Docker container on AWS EC2. The React frontend communicates via cross-origin API calls and is separately deployed for scalability.</p>
                <ul>
                  <li>🔹 <strong>Conversation Privacy</strong> – All conversations are cached temporarily and securely discarded after a set duration.</li>
                  <li>🔹 <strong>Fast Response</strong> – Delivers lightning-fast answers by combining RAG and caching strategies.</li>
                  <li>🔹 <strong>Less Search, More Knowledge</strong> – Aggregates content from multiple AWS sources for quicker insights.</li>
                </ul>`
              },
              {
                imageURL: "/images/project/antitheft.gif",
                title: "Anti Theft",
                demo: "",
                date: "Nov 2024 - Jan 2025",
                github: "https://github.com/Shivam-Shane/AntiTheft.git",
                description: `<p>AntiTheft captures evidence (images, audio, video) when unauthorized access attempts occur (wrong password entries). It sends location details and system info to your email, keeping you informed about security breaches.</p>
                <ul>
                  <li>🔹 <strong>Enhanced Security</strong> – Deters unauthorized use through real-time evidence capture.</li>
                  <li>🔹 <strong>Instant Alerts</strong> – Sends comprehensive alerts (location, system data) via email.</li>
                </ul>`
              },
              {
                imageURL: "/images/project/coldcalling.gif",
                title: "Cold Calling On Your Fingertips",
                demo: "",
                date: "Oct 2024",
                github: "https://github.com/Shivam-Shane/Service_monitoring.git",
                description: `<p>A tool designed to automate personalized cold email outreach to recruiters. It streamlines email generation, reduces manual work, and increases engagement through customization.</p>
                <ul>
                  <li>🔹 <strong>Automated Email Generation</strong> – Saves time by crafting and sending cold emails automatically.</li>
                  <li>🔹 <strong>Personalization</strong> – Customizes messages to improve response rates and relevance.</li>
                  <li>🔹 <strong>Efficiency</strong> – Eliminates repetitive manual tasks in outreach campaigns.</li>
                  <li>🔹 <strong>Scalability</strong> – Easily adapts to larger outreach lists without added effort.</li>
                </ul>`
              },
              {
                imageURL: "/images/project/noimage.png",
                title: "Service Monitoring",
                demo: "",
                date: "Jul 2024 - Sep 2024",
                github: "https://github.com/Shivam-Shane/Service_monitoring.git",
                description: `<p>Automates monitoring of critical service-related emails in production environments. Uses Python and the Gmail API to process emails, identify outages, and notify relevant teams.</p>
                <ul>
                  <li>🔹 <strong>Automated Email Parsing</strong> – Reads and processes emails without manual intervention.</li>
                  <li>🔹 <strong>Timely Alerts</strong> – Sends notifications based on predefined rules to the right teams.</li>
                  <li>🔹 <strong>Customizable Rules</strong> – Supports flexible alert logic based on service or device types.</li>
                  <li>🔹 <strong>Reduced Manual Effort</strong> – Frees up resources by automating routine monitoring tasks.</li>
                </ul>`
              },
              {
                imageURL: "/images/project/imagecaption.gif",
                title: "Image to Caption Generator",
                demo: "",
                date: "Apr 2024 - Jun 2024",
                github: "https://github.com/Shivam-Shane/Image_Captioning.git",
                description: `<p>An AI-powered tool that generates natural language captions from images using a RESNET50-based deep learning model. Deployed on AWS with CI/CD pipelines via GitHub Actions.</p>
                <ul>
                  <li>🔹 <strong>Deep Learning Model</strong> – Uses RESNET50 architecture for accurate image feature extraction.</li>
                  <li>🔹 <strong>Cloud Deployment</strong> – Hosted on AWS for scalability and reliability.</li>
                  <li>🔹 <strong>CI/CD Integration</strong> – Seamless deployment via automated pipelines.</li>
                  <li>🔹 <strong>User-Friendly Interface</strong> – Simple frontend for easy image upload and caption retrieval.</li>
                </ul>`
              },
              {
                imageURL: "/images/project/TextSummarizer.gif",
                title: "Text Summarizer",
                demo: "",
                date: "Nov 2023 - Mar 2024",
                github: "https://github.com/Shivam-Shane/Text_summarizer_nlp_project",
                description: `<p>A text summarization tool that condenses documents while preserving key information. Uses Hugging Face’s Google Pegasus model and machine learning algorithms for intelligent summarization.</p>
                <ul>
                  <li>🔹 <strong>State-of-the-Art NLP</strong> – Powered by Pegasus for high-quality summaries.</li>
                  <li>🔹 <strong>Efficient Summarization</strong> – Generates concise outputs without losing meaning.</li>
                  <li>🔹 <strong>Modular Codebase</strong> – Built for easy enhancements and maintenance.</li>
                  <li>🔹 <strong>Scalable Design</strong> – Can process both small articles and large documents efficiently.</li>
                </ul>`
              },
              {
                imageURL: "/images/project/consumer_dispute_classfier.gif",
                title: "Consumer Dispute Predictor",
                demo: "",
                date: "Aug 2023 - Oct 2023",
                github: "https://github.com/Shivam-Shane/Project.git",
                description: `<p>A data science solution for classifying consumer complaints using NLP and machine learning. Automates categorization of disputes to help organizations respond faster and more accurately.</p>
                <ul>
                  <li>🔹 <strong>Advanced NLP</strong> – Extracts features and patterns from complaint texts.</li>
                  <li>🔹 <strong>Automated Classification</strong> – Classifies disputes into categories for efficient handling.</li>
                  <li>🔹 <strong>Clean Modular Code</strong> – Structured for scalability and easy integration.</li>
                  <li>🔹 <strong>Improved Response Times</strong> – Enables quicker resolutions by auto-sorting complaints.</li>
                </ul>`
              },
              {
                imageURL: "/images/project/noimage.png",
                title: "Gas Leakage Detector",
                demo: "",
                date: "Lovely Professional University",
                description: `<p>A basic Arduino-based project using the MQ-2 sensor to detect gas leakage within its range. Designed for early warning and safety in small spaces.</p>`
              },
              {
                imageURL: "/images/project/noimage.png",
                title: "Hamlet2Eco",
                demo: "",
                date: "Lovely Professional University",
                description: `<p>Hamlet2Eco empowers small communities to adopt sustainable practices that protect the environment. It promotes renewable energy, resource conservation, carbon footprint reduction, and environmental education.</p>`
              }
            ]}
          />
      </div>
    </section>
  );
};

export default Projects;

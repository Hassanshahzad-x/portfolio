import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer - I",
      company: "Arrivy",
      location: "Lahore, Pakistan",
      period: "Feb 2025 - Jun 2025",
      type: "Full-time",
      description:
        "Arrivy is a field service coordination platform that streamlines customer communication, crew management, and operational logistics in real time.",
      highlights: [
        "Built and maintained <strong>Python</strong> and <strong>Node</strong> microservices for PDF handling and database tasks, improving modularity and deployment speed.",
        "Implemented dynamic PDF generation and compression pipelines using <strong>Puppeteer</strong> and <strong>Ghostscript</strong>, reducing PDF sizes by 80% without loss in quality.",
        "Developed and deployed <strong>Google Cloud Functions</strong> and <strong>Pub/Sub</strong> pipelines to enable real-time crew attendance tracking, logging schedules, and work hours with high reliability.",
        "Leveraged <strong>Redis</strong> queues and deferred services to run background tasks asynchronously, cutting user-facing latency by over 60% during PDF processing.",
        "Built an internal authorization tool (<strong>React</strong> + <strong>Flask</strong>) for account access management, improving auditing and traceability.",
        "Designed and implemented a <strong>React</strong>-based template system for task creation, resulting in files attached to templates auto-copied to tasks on selection, accelerating workflows and reducing manual effort.",
        "Implemented secure DB authentication using sandboxed service accounts to access production data via <strong>SQLAlchemy ORM</strong>.",
        "Integrated third-party APIs (<strong>HubSpot</strong>, <strong>Workday</strong>, <strong>Easybook</strong>) for real-time data sync and workflow automation.",
      ],
    },
    {
      title: "Technical Content Engineer",
      company: "Educative",
      location: "Lahore, Pakistan",
      period: "Jul 2023 - Jan 2025",
      type: "Full-time",
      description:
        "Educative is an interactive learning platform for software developers to master coding, system design, and technical interviews through hands-on courses.",
      highlights: [
        "Curated technical content and real-world projects for learners focused on <strong>React</strong> and <strong>Flask</strong>, boosting course completion rates through hands-on learning.",
        "Designed and maintained backend-centric projects on <strong>Flask</strong>, <strong>databases</strong>, and <strong>REST APIs</strong>, covering auth flows, DB operations, and production deployment.",
        "Developed custom <strong>Docker</strong> images to run complex coding environments directly in-browser, reducing setup friction and support requests.",
        "Built real-world coding challenges aligned with interview patterns, boosting learner retention and job-readiness scores.",
        "Integrated <strong>Generative AI</strong> into coding widgets for real-time mentorship and feedback using <strong>OpenAI APIs</strong>, increasing learner engagement by 25%.",
        "Contributed to the company’s AI mock interviewer by leading <strong>prompt engineering</strong>, testing scenarios in playgrounds, and refining feedback quality.",
        "Collaborated with engineering and content teams to deliver reliable, browser-ready environments for thousands of concurrent users.",
      ],
    },
    {
      title: "Engineering Intern",
      company: "Contract.pk",
      location: "Remote",
      period: "Jul 2022 - Sep 2022",
      type: "Internship",
      description:
        "Contract.pk is a digital platform that simplifies contract creation, signing, and management for businesses and individuals in Pakistan.",
      highlights: [
        "Built a legal services platform using <strong>Flask</strong> for backend APIs and <strong>React</strong> + <strong>Tailwind</strong> for a responsive and modern UI.",
        "Designed <strong>RESTful API</strong> endpoints for secure case data handling and streamlined client-lawyer communication.",
        "Developed intuitive frontend components using <strong>TailwindCSS</strong>, improving user navigation and accessibility.",
        "Integrated <strong>Flask</strong> and <strong>React</strong> to enable dynamic case workflows, reducing manual steps and increasing active user time by 20%.",
      ],
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Full-time":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300";
      case "Freelance":
        return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300";
      case "Internship":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300";
      default:
        return "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-1 text-blue-600 dark:text-blue-400" />
                        <a
                          href={
                            exp.company === "Arrivy"
                              ? "https://arrivy.com"
                              : exp.company === "Educative"
                              ? "https://educative.io"
                              : exp.company === "Contract.pk"
                              ? "https://contract.pk"
                              : "#"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {exp.company}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-purple-600 dark:text-purple-400" />
                        <span className="text-purple-600 dark:text-purple-400">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                        exp.type
                      )}`}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span
                          className="text-sm"
                          dangerouslySetInnerHTML={{ __html: highlight }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

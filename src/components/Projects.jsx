import { ExternalLink, Github } from "lucide-react";

const techColors = {
  frontend: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  backend:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  database: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  cloud:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  auth: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  ai: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  devops:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
};

const categorizeTech = (tech) => {
  const frontend = ["React", "Tailwind", "Javascript", "HTML", "CSS"];
  const backend = [
    "Flask",
    "Node.js",
    "Socket.io",
    "REST APIs",
    "Fast API",
    "SQLAlchemy",
  ];
  const database = ["PostgreSQL", "Redis", "MySQL"];
  const cloud = [
    "Google Cloud Platform",
    "Pub/Sub",
    "Firestore",
    "Cloud Scheduler",
    "Cloud Functions",
    "Artifacts Registry",
    "Cloud Run",
  ];
  const auth = ["JWT", "OAuth"];
  const ai = [
    "Transformers",
    "Hugging Face API",
    "Large Language Models",
    "NLTK",
    "SpaCy",
    "Natural Language Processing",
    "FAISS",
    "OpenAI API",
  ];
  const devops = ["Docker", "Microservices", "Git"];

  if (frontend.includes(tech)) return techColors.frontend;
  if (backend.includes(tech)) return techColors.backend;
  if (database.includes(tech)) return techColors.database;
  if (cloud.includes(tech)) return techColors.cloud;
  if (auth.includes(tech)) return techColors.auth;
  if (ai.includes(tech)) return techColors.ai;
  if (devops.includes(tech)) return techColors.devops;
};

const Projects = () => {
  const projects = [
    {
      title: "Wordley AI",
      description:
        "Wordley.ai is an AI tool that breaks down any chunk of text into structured insights using modern NLP techniques and open-source LLMs. It performs full-stack language analysis from tone, sentiment, and emotion detection to classification, summarization, and entity recognition.",
      techStack: [
        "React",
        "Tailwind",
        "Flask",
        "REST APIs",
        "Transformers",
        "NLTK",
        "Hugging Face API",
        "Large Language Models",
        "Natural Language Processing",
        "SpaCy",
      ],
      liveLink: "https://wordleyai.netlify.app",
      githubLink: "https://github.com/Hassanshahzad-x/wordley",
    },
    {
      title: "Safelinks",
      description:
        "SafeLinks is a microservice-based platform for creating, managing, and resolving temporary access links. It has been designed to be fast, scalable, and easy to integrate with other systems.",
      techStack: [
        "React",
        "Tailwind",
        "Node.js",
        "REST APIs",
        "Docker",
        "Microservices",
        "Cloud Run",
        "Firestore",
        "Cloud Scheduler",
        "Artifacts Registry",
      ],
      liveLink: "https://safelinks.netlify.app",
      githubLink: "https://github.com/Hassanshahzad-x/safelink",
    },
    {
      title: "Recaller AI",
      description:
        "A smart knowledge base that lets users upload documents and interact with them through contextual search and AI-powered Q&A. It uses embeddings, vector search, and language models to deliver precise answers from uploaded content.",
      techStack: [
        "React",
        "Tailwind",
        "Flask",
        "Fast API",
        "OpenAI API",
        "Hugging Face API",
        "Large Language Models",
        "FAISS",
      ],
      liveLink: "https://recallerai.netlify.app",
      githubLink: "https://github.com/Hassanshahzad-x/recall",
    },
    {
      title: "Respoon",
      description:
        "A community platform that connects surplus-food donors (restaurants, events, individuals) with nearby recipients. Includes request matching, pickup scheduling, basic verification, and real-time status updates.",
      techStack: [
        "React",
        "Tailwind",
        "Flask",
        "Socket.io",
        "SQLAlchemy",
        "PostgreSQL",
        "Redis",
        "JWT",
        "Cloud Run",
      ],
      liveLink: "https://respoon.netlify.app/",
      githubLink: "https://github.com/Hassanshahzad-x/respoon",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${categorizeTech(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Hassanshahzad-x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

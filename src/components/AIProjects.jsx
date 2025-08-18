import React from "react";
import {
  Brain,
  Bot,
  MessageSquare,
  Search,
  ExternalLink,
  Github,
} from "lucide-react";

const AIProjects = () => {
  const aiProjects = [
    {
      title: "RAG Document Q&A System",
      description:
        "Intelligent document search and question-answering system using RAG architecture with vector databases and LLM integration.",
      techStack: ["LangChain", "OpenAI API", "Pinecone", "FastAPI", "React"],
      liveLink: "https://demo-rag-qa.com",
      githubLink: "https://github.com/username/rag-qa-system",
      icon: <Search className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "AI Content Generator",
      description:
        "Multi-purpose content generation tool with custom prompts, fine-tuned models, and automated content workflows.",
      techStack: [
        "Hugging Face",
        "Transformers",
        "Prompt Engineering",
        "Flask",
        "Redis",
      ],
      liveLink: "https://demo-ai-content.com",
      githubLink: "https://github.com/username/ai-content-generator",
      icon: <Bot className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Intelligent Chatbot",
      description:
        "Context-aware chatbot with memory, personality customization, and multi-turn conversation capabilities.",
      techStack: ["LangChain", "OpenAI API", "Vector DB", "Socket.io", "React"],
      liveLink: "https://demo-chatbot.com",
      githubLink: "https://github.com/username/intelligent-chatbot",
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "ML Model Pipeline",
      description:
        "End-to-end machine learning pipeline with automated training, evaluation, and deployment using MLOps best practices.",
      techStack: ["PyTorch", "MLflow", "Docker", "Kubernetes", "FastAPI"],
      liveLink: "https://demo-ml-pipeline.com",
      githubLink: "https://github.com/username/ml-pipeline",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="ai-projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI & ML Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              Intelligent solutions powered by AI and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium"
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
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-sm font-medium"
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
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <Brain className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">AI Innovation</h3>
              <p className="text-lg opacity-90 mb-6">
                Exploring the frontiers of artificial intelligence and machine
                learning to create intelligent, scalable solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  Large Language Models
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  RAG Systems
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  Prompt Engineering
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  MLOps
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProjects;

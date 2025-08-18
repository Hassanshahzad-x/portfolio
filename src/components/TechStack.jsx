import {
  Monitor,
  Server,
  Brain,
  Cloud,
  Database,
  Settings,
  Globe,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFlask,
  SiFastapi,
  SiNodedotjs,
  SiRedis,
  SiSocketdotio,
  SiOpenai,
  SiPython,
  SiHuggingface,
  SiGooglecloud,
  SiPostgresql,
  SiRender,
  SiVercel,
  SiNetlify,
  SiJsonwebtokens,
  SiAuth0,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiJavascript,
  SiSwagger,
  SiNotion,
  SiClickup,
  SiTrello,
  SiRailway,
  SiApachekafka,
  SiGooglebigquery,
  SiGoogledatastudio,
  SiGooglecloudstorage,
  SiSqlalchemy,
  SiGooglepubsub,
  SiGithubactions,
  SiJquery,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { FaCookieBite, FaKey, FaVectorSquare } from "react-icons/fa";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      technologies: [
        {
          name: "Javascript",
          icon: <SiJavascript className="w-4 h-4" />,
          color:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
        },
        {
          name: "React",
          icon: <SiReact className="w-4 h-4" />,
          color:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
        },
        {
          name: "HTML",
          icon: <SiHtml5 className="w-4 h-4" />,
          color:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
        },
        {
          name: "Typescript",
          icon: <SiTypescript className="w-4 h-4" />,
          color:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
        },
        {
          name: "jQuery",
          icon: <SiJquery className="w-4 h-4" />,
          color:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
        },
        {
          name: "CSS",
          icon: <SiCss3 className="w-4 h-4" />,
          color:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4" />,
          color:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
        },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      technologies: [
        {
          name: "Flask",
          icon: <SiFlask className="w-4 h-4" />,
          color:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs className="w-4 h-4" />,
          color:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
        },
        {
          name: "REST APIs",
          icon: <SiSwagger className="w-4 h-4" />,
          color:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
        },
        {
          name: "FastAPI",
          icon: <SiFastapi className="w-4 h-4" />,
          color:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
        },
        {
          name: "Kafka",
          icon: <SiApachekafka className="w-4 h-4" />,
          color:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
        },
        {
          name: "Socket.io",
          icon: <SiSocketdotio className="w-4 h-4" />,
          color:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
        },
        {
          name: "SQLAlchemy",
          icon: <SiSqlalchemy className="w-4 h-4" />,
          color:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
        },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      iconBg: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-600 dark:text-red-400",
      technologies: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4" />,
          color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4" />,
          color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
        },
        {
          name: "Redis",
          icon: <SiRedis className="w-4 h-4" />,
          color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
        },
      ],
    },
    {
      title: "AI / ML",
      icon: <Brain className="w-6 h-6" />,
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
      technologies: [
        {
          name: "Large Language Models",
          icon: <SiHuggingface className="w-4 h-4" />,
          color:
            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        },
        {
          name: "OpenAI API",
          icon: <SiOpenai className="w-4 h-4" />,
          color:
            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        },
        {
          name: "Prompt Engineering",
          icon: <SiOpenai className="w-4 h-4" />,
          color:
            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        },
        {
          name: "LangChain",
          icon: <SiPython className="w-4 h-4" />,
          color:
            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        },
        {
          name: "Vector Databases",
          icon: <FaVectorSquare className="w-4 h-4" />,
          color:
            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        },
        {
          name: "Transformers",
          icon: <SiPython className="w-4 h-4" />,
          color:
            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        },
        {
          name: "Hugging Face API",
          icon: <SiHuggingface className="w-4 h-4" />,
          color:
            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
      technologies: [
        {
          name: "Google Cloud Platform",
          icon: <SiGooglecloud className="w-4 h-4" />,
          color:
            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
        },
        {
          name: "Pub/Sub",
          icon: <SiGooglepubsub className="w-4 h-4" />,
          color:
            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
        },
        {
          name: "Cloud Functions",
          icon: <SiGooglecloud className="w-4 h-4" />,
          color:
            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
        },
        {
          name: "Cloud Run",
          icon: <SiGooglecloud className="w-4 h-4" />,
          color:
            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
        },
        {
          name: "Cloud Scheduler",
          icon: <SiGooglecloud className="w-4 h-4" />,
          color:
            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
        },
        {
          name: "Cloud Storage",
          icon: <SiGooglecloudstorage className="w-4 h-4" />,
          color:
            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
        },
        {
          name: "BigQuery",
          icon: <SiGooglebigquery className="w-4 h-4" />,
          color:
            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
        },
        {
          name: "Firestore",
          icon: <SiGoogledatastudio className="w-4 h-4" />,
          color:
            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
        },
      ],
    },
    {
      title: "Authentication",
      icon: <ShieldCheck className="w-6 h-6" />,
      iconBg: "bg-teal-100 dark:bg-teal-900/30",
      iconColor: "text-teal-600 dark:text-teal-400",
      technologies: [
        {
          name: "JWT",
          icon: <SiJsonwebtokens className="w-4 h-4" />,
          color:
            "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
        },
        {
          name: "OAuth",
          icon: <SiAuth0 className="w-4 h-4" />,
          color:
            "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
        },
        {
          name: "Token-based",
          icon: <FaKey className="w-4 h-4" />,
          color:
            "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
        },
        {
          name: "Cookie-based",
          icon: <FaCookieBite className="w-4 h-4" />,
          color:
            "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
        },
      ],
    },
    {
      title: "DevOps & Version Control",
      icon: <Settings className="w-6 h-6" />,
      iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      technologies: [
        {
          name: "Docker",
          icon: <SiDocker className="w-4 h-4" />,
          color:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
        },
        {
          name: "CI/CD",
          icon: <SiGithubactions className="w-4 h-4" />,
          color:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
        },
        {
          name: "Microservices",
          icon: <SiKubernetes className="w-4 h-4" />,
          color:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
        },
        {
          name: "Git",
          icon: <SiGit className="w-4 h-4" />,
          color:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
        },
        {
          name: "GitHub",
          icon: <SiGithub className="w-4 h-4" />,
          color:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
        },
        {
          name: "Bitbucket",
          icon: <SiBitbucket className="w-4 h-4" />,
          color:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
        },
      ],
    },
    {
      title: "Hosting",
      icon: <Globe className="w-6 h-6" />,
      iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      technologies: [
        {
          name: "Vercel",
          icon: <SiVercel className="w-4 h-4" />,
          color:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
        },
        {
          name: "Netlify",
          icon: <SiNetlify className="w-4 h-4" />,
          color:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
        },
        {
          name: "Render",
          icon: <SiRender className="w-4 h-4" />,
          color:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
        },
        {
          name: "Railway",
          icon: <SiRailway className="w-4 h-4" />,
          color:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
        },
      ],
    },
    {
      title: "Workflow Management",
      icon: <ClipboardList className="w-6 h-6" />,
      iconBg: "bg-pink-100 dark:bg-pink-900/30",
      iconColor: "text-pink-600 dark:text-pink-400",
      technologies: [
        {
          name: "Notion",
          icon: <SiNotion className="w-4 h-4" />,
          color:
            "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
        },
        {
          name: "Trello",
          icon: <SiTrello className="w-4 h-4" />,
          color:
            "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
        },
        {
          name: "ClickUp",
          icon: <SiClickup className="w-4 h-4" />,
          color:
            "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
        },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                {/* Header with icon and title */}
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-xl ${category.iconBg} ${category.iconColor} mr-4`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Technology pills */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${tech.color} transition-all duration-200 hover:scale-105`}
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

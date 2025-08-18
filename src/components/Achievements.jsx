import { Award, Trophy, Star, Users, GitBranch, BookOpen } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      category: "Certifications",
      icon: <Award className="w-6 h-6" />,
      items: ["Docker for Developers", "Front End Development Libraries"],
    },
    {
      category: "Hackathons & Competitions",
      icon: <Trophy className="w-6 h-6" />,
      items: [
        "Appwrite Hacktoberfest 2023 Participation",
        "ILLA Hacktoberfest 2023 Participation",
      ],
    },
    // {
    //   category: "Open Source",
    //   icon: <GitBranch className="w-6 h-6" />,
    //   items: [
    //     "10+ open source contributions",
    //     "Maintainer of popular React library (2K+ stars)",
    //     "Core contributor to ML framework",
    //     "Active in developer communities",
    //   ],
    // },
    // {
    //   category: "Recognition",
    //   icon: <Star className="w-6 h-6" />,
    //   items: [
    //     "Featured in Tech Blog for AI Innovation",
    //     "Speaker at 5+ tech conferences",
    //     "Mentor for coding bootcamp graduates",
    //     "Tech reviewer for industry publications",
    //   ],
    // },
  ];

  const stats = [
    {
      label: "Projects Completed",
      value: "20+",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      label: "Tech Articles Published",
      value: "5+",
      icon: <Star className="w-8 h-8" />,
    },
    {
      label: "Mentored Developers",
      value: "10+",
      icon: <Users className="w-8 h-8" />,
    },
    {
      label: "Years Experience",
      value: "3+",
      icon: <Award className="w-8 h-8" />,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl mr-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {achievement.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {achievement.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <Trophy className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-lg opacity-90 mb-6">
                Let's work together to build something amazing. I'm always open
                to new opportunities and challenges.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import React from "react";
import { Code, Brain, Cloud } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate full-stack and AI software engineer with over 3
                years of experience building scalable web applications and
                intelligent systems. I specialize in modern frameworks, cloud
                technologies, and intelligent solutions.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My work centers on designing end-to-end systems that balance
                strong backend architecture with intuitive user-facing
                experiences. I’ve built platforms that handle real-time
                interactions, scalable data flows, and intelligent
                decision-making powered by advanced AI techniques. Beyond core
                engineering, I enjoy experimenting with emerging tools and
                translating complex ideas into practical, impactful products.
              </p>
            </div>

            <div className="space-y-6">
              {/* Full-Stack */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Full-Stack Development
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Experienced in building end-to-end systems that combine strong
                  backend architecture with intuitive, user-focused interfaces.
                </p>
              </div>

              {/* AI */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Artificial Intelligence
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Skilled in applying modern AI approaches to create
                  intelligent, adaptive systems that enhance decision-making and
                  user experience.
                </p>
              </div>

              {/* Cloud */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Cloud className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Cloud Architecture
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Focused on scalable, resilient, and secure cloud-native
                  designs that support modern applications at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

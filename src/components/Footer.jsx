import React from "react";
import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Portfolio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Full-Stack Developer & AI Engineer passionate about building
              intelligent web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Hassanshahzad-x"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/hassan-shahzad-0168b51a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hassanshahzad3513@gmail.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">
                  Web Interface and UI Development
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  Server and API Development
                </span>
              </li>
              <li>
                <span className="text-gray-400">AI Integration</span>
              </li>
              <li>
                <span className="text-gray-400">Cloud and Infra Solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

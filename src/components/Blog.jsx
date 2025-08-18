import React from "react";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building RAG Applications with LangChain",
      excerpt:
        "A comprehensive guide to implementing Retrieval-Augmented Generation systems for enhanced AI applications.",
      date: "2024-01-15",
      readTime: "8 min read",
      link: "/blog/rag-applications-langchain",
      tags: ["AI", "RAG", "LangChain", "Python"],
    },
    {
      title: "Scaling React Applications with TypeScript",
      excerpt:
        "Best practices for building maintainable and scalable React applications using TypeScript and modern tooling.",
      date: "2024-01-08",
      readTime: "6 min read",
      link: "/blog/scaling-react-typescript",
      tags: ["React", "TypeScript", "Frontend", "Architecture"],
    },
    {
      title: "Deploying ML Models to Production",
      excerpt:
        "A deep dive into MLOps practices for deploying machine learning models to production environments.",
      date: "2024-01-01",
      readTime: "12 min read",
      link: "/blog/ml-models-production",
      tags: ["MLOps", "Docker", "Kubernetes", "AI"],
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Performance Optimization",
      excerpt:
        "How we improved page load times by 70% and conversion rates by 25% through strategic optimization.",
      link: "/case-studies/ecommerce-optimization",
      tags: ["Performance", "React", "Optimization"],
    },
    {
      title: "AI-Powered Document Processing System",
      excerpt:
        "Building an intelligent document processing system using RAG and LLMs for enterprise clients.",
      link: "/case-studies/ai-document-processing",
      tags: ["AI", "RAG", "Enterprise", "LLM"],
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog & Case Studies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              Technical insights and project deep-dives
            </p>
          </div>

          {/* Blog Posts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
              Latest Blog Posts
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={post.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-600" />
              Case Studies
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {study.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {study.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={study.link}
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Want to Share Your Ideas?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always interested in discussing new technologies, sharing
                insights, or collaborating on technical content.
              </p>
              <a
                href="mailto:john@example.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
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

export default Blog;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendar, FaMoneyBillWave } from 'react-icons/fa';
import Card from '../common/Card';
import { portfolios, categories } from '../../data/portfolio';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredPortfolios =
    selectedCategory === '전체'
      ? portfolios
      : portfolios.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            주요 시공 실적
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            성과로 증명된 시공력. 산업시설부터 교회, 공공기관까지 100여 건의
            프로젝트 실적.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolios.map((project, index) => (
            <Card
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-blue-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-white text-center p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <span className="inline-block bg-secondary px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <h4 className="font-bold text-lg text-dark mb-2">
                {project.client}
              </h4>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-primary" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <FaCalendar className="mr-2 text-primary" />
                  {project.period}
                </div>
                <div className="flex items-center">
                  <FaMoneyBillWave className="mr-2 text-primary" />
                  {project.amount}
                </div>
              </div>

              <p className="text-gray-700 mt-4 text-sm">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 bg-gradient-to-br from-primary to-blue-700 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="font-bold text-2xl mb-3">
                    {selectedProject.title}
                  </h3>
                  <span className="inline-block bg-secondary px-4 py-2 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">{selectedProject.client}</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <FaMapMarkerAlt className="mr-3 text-primary text-xl" />
                  <span>{selectedProject.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaCalendar className="mr-3 text-primary text-xl" />
                  <span>{selectedProject.period}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaMoneyBillWave className="mr-3 text-primary text-xl" />
                  <span>{selectedProject.amount}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                닫기
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

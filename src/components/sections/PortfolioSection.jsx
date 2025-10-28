import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendar, FaMoneyBillWave, FaTimes } from 'react-icons/fa';
import { portfolios, categories } from '../../data/portfolio';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredPortfolios =
    selectedCategory === '전체'
      ? portfolios
      : portfolios.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            주요 시공 실적
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            성과로 증명된 시공력. 산업시설부터 교회, 공공기관까지<br/>100여 건의 프로젝트 실적.
          </p>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 포트폴리오 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolios.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
              {/* 프로젝트 헤더 */}
              <div className="bg-primary-600 text-white p-6">
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs mb-3">
                  {project.category}
                </span>
                <h3 className="font-bold text-lg">{project.title}</h3>
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-6">
                <p className="font-semibold text-gray-900 mb-4">{project.client}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-primary-600 flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaCalendar className="mr-2 text-primary-600 flex-shrink-0" />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMoneyBillWave className="mr-2 text-primary-600 flex-shrink-0" />
                    <span>{project.amount}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mt-4 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 모달 */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTimes className="text-gray-600" />
              </button>

              <div className="bg-primary-600 text-white p-8">
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-3">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-blue-100">{selectedProject.client}</p>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="mr-3 text-primary-600 text-xl flex-shrink-0" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaCalendar className="mr-3 text-primary-600 text-xl flex-shrink-0" />
                    <span>{selectedProject.period}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMoneyBillWave className="mr-3 text-primary-600 text-xl flex-shrink-0" />
                    <span>{selectedProject.amount}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

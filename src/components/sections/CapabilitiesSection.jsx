import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaChartLine } from 'react-icons/fa';
import Counter from '../common/Counter';
import { technicians, stats } from '../../data/companyInfo';

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CAPABILITIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            기술 역량
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            전문성과 안전을 겸비한 시공 인력
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-8 shadow-xl"
          >
            <FaChartLine className="text-4xl mb-4" />
            <Counter end={stats.projects} suffix="+" />
            <p className="text-lg mt-2 text-primary-100">시공 프로젝트</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-2xl p-8 shadow-xl"
          >
            <FaUsers className="text-4xl mb-4" />
            <Counter end={stats.partners} suffix="+" />
            <p className="text-lg mt-2 text-accent-100">협력사</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-8 shadow-xl"
          >
            <FaAward className="text-4xl mb-4" />
            <Counter end={stats.totalAmount} suffix="억+" />
            <p className="text-lg mt-2 text-primary-100">누적 시공금액</p>
          </motion.div>
        </div>

        {/* Technicians */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            보유 기술인력
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicians.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUsers className="text-2xl text-primary-600" />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-1 text-center">
                  {tech.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3 text-center">{tech.position}</p>
                <span className="block text-center bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full font-medium">
                  {tech.license}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;

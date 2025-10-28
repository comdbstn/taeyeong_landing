import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaHardHat, FaClipboardCheck } from 'react-icons/fa';
import Counter from '../common/Counter';
import { technicians, stats } from '../../data/companyInfo';

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            기술 역량
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            전문성과 안전을 겸비한 시공 인력. 건축기사·산업기사·부동산개발
            전문인력 등 다분야 기술자가 함께합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-blue-700 text-white p-10 rounded-xl shadow-xl text-center"
          >
            <FaUserTie className="text-6xl mx-auto mb-4" />
            <Counter end={stats.projects} suffix="+" />
            <p className="text-xl mt-2">시공 프로젝트</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary to-orange-600 text-white p-10 rounded-xl shadow-xl text-center"
          >
            <FaHardHat className="text-6xl mx-auto mb-4" />
            <Counter end={stats.partners} suffix="+" />
            <p className="text-xl mt-2">협력사</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-blue-700 text-white p-10 rounded-xl shadow-xl text-center"
          >
            <FaClipboardCheck className="text-6xl mx-auto mb-4" />
            <Counter end={stats.totalAmount} suffix="억+" />
            <p className="text-xl mt-2">누적 시공금액</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-light p-8 md:p-12 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-dark">
            보유 기술인력
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicians.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUserTie className="text-3xl text-white" />
                </div>
                <h4 className="font-bold text-lg text-dark mb-1">
                  {tech.name}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{tech.position}</p>
                <span className="inline-block bg-secondary text-white text-xs px-3 py-1 rounded-full">
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

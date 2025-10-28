import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';
import Counter from '../common/Counter';
import { technicians, stats } from '../../data/companyInfo';

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            기술 역량
          </h2>
          <p className="text-lg text-gray-600">
            전문성과 안전을 겸비한 시공 인력. 건축기사·산업기사·부동산개발 전문인력 등<br/>다분야 기술자가 함께합니다.
          </p>
        </motion.div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary-600 text-white rounded-lg p-8 text-center"
          >
            <div className="text-5xl md:text-6xl font-bold mb-2">
              <Counter end={stats.projects} suffix="+" />
            </div>
            <p className="text-lg opacity-90">시공 프로젝트</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-accent-500 text-white rounded-lg p-8 text-center"
          >
            <div className="text-5xl md:text-6xl font-bold mb-2">
              <Counter end={stats.partners} suffix="+" />
            </div>
            <p className="text-lg opacity-90">협력사</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary-600 text-white rounded-lg p-8 text-center"
          >
            <div className="text-5xl md:text-6xl font-bold mb-2">
              <Counter end={stats.totalAmount} suffix="억+" />
            </div>
            <p className="text-lg opacity-90">누적 시공금액</p>
          </motion.div>
        </div>

        {/* 보유 기술인력 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            보유 기술인력
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technicians.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUsers className="text-2xl text-primary-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{tech.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{tech.position}</p>
                <span className="inline-block bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full font-medium">
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

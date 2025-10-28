import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaCertificate, FaCheckCircle } from 'react-icons/fa';
import { companyInfo, timeline } from '../../data/companyInfo';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ABOUT US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            회사 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            태영개발공사는 10년 이상의 시공 경험과 숙련된 기술인력을 기반으로
            공공시설, 공장, 상업시설, 종교시설 등 다양한 건축 프로젝트를
            성공적으로 완수해왔습니다.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
              <FaBuilding className="text-2xl text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">법인명</h3>
            <p className="text-gray-700 font-medium mb-2">{companyInfo.name}</p>
            <p className="text-sm text-gray-500">
              대표이사: {companyInfo.ceo}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
              <FaMapMarkerAlt className="text-2xl text-accent-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">본사 위치</h3>
            <p className="text-gray-700 text-sm mb-2">
              {companyInfo.mainOffice.address}
            </p>
            <p className="text-sm text-gray-500">
              설립: {companyInfo.founded}년
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
              <FaCertificate className="text-2xl text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">등록면허</h3>
            <p className="text-gray-700 font-medium mb-2">{companyInfo.license}</p>
            <p className="text-sm text-gray-500">
              사업자번호: {companyInfo.businessNumber}
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">연혁</h3>
            <p className="text-gray-600">태영개발공사의 성장 과정</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  } text-left`}>
                    <div className="bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-colors group">
                      <div className="flex items-center gap-2 mb-2 md:justify-end justify-start">
                        <FaCheckCircle className="text-primary-600 flex-shrink-0" />
                        <span className="text-primary-700 font-bold text-xl">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-700 font-medium">{item.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Empty Space */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

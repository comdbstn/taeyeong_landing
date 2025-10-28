import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaCertificate } from 'react-icons/fa';
import { companyInfo, timeline } from '../../data/companyInfo';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
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
            회사 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            태영개발공사는 10년 이상의 시공 경험과 숙련된 기술인력을 기반으로 공공시설, 공장, 상업시설,
            종교시설 등 다양한 건축 프로젝트를 성공적으로 완수해왔습니다.
          </p>
        </motion.div>

        {/* 회사 정보 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FaBuilding className="text-3xl text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">법인명</h3>
            <p className="text-gray-700 font-medium mb-1">{companyInfo.name}</p>
            <p className="text-sm text-gray-500">대표이사: {companyInfo.ceo}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FaMapMarkerAlt className="text-3xl text-accent-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">본사 위치</h3>
            <p className="text-gray-700 text-sm mb-1">{companyInfo.mainOffice.address}</p>
            <p className="text-sm text-gray-500">설립: {companyInfo.founded}년</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FaCertificate className="text-3xl text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">등록면허</h3>
            <p className="text-gray-700 font-medium mb-1">{companyInfo.license}</p>
            <p className="text-sm text-gray-500">사업자번호: {companyInfo.businessNumber}</p>
          </motion.div>
        </div>

        {/* 연혁 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">연혁</h3>

          <div className="relative max-w-4xl mx-auto">
            {/* 세로 라인 */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200"></div>

            {/* 타임라인 아이템 */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-primary-600 font-bold text-lg">{item.year}</span>
                      </div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                  </div>

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

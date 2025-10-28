import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaCertificate } from 'react-icons/fa';
import { companyInfo, timeline } from '../../data/companyInfo';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            회사 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            태영개발공사는 10년 이상의 시공 경험과 숙련된 기술인력을 기반으로
            공공시설, 공장, 상업시설, 종교시설 등 다양한 건축 프로젝트를
            성공적으로 완수해왔습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <FaBuilding className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">법인명</h3>
            <p className="text-gray-700">{companyInfo.name}</p>
            <p className="text-sm text-gray-500 mt-2">
              대표이사: {companyInfo.ceo}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <FaMapMarkerAlt className="text-5xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">본사 위치</h3>
            <p className="text-gray-700 text-sm">
              {companyInfo.mainOffice.address}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              설립: {companyInfo.founded}년
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <FaCertificate className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">등록면허</h3>
            <p className="text-gray-700">{companyInfo.license}</p>
            <p className="text-sm text-gray-500 mt-2">
              사업자번호: {companyInfo.businessNumber}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-dark">
            연혁
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary hidden md:block"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}
                >
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="text-primary font-bold text-xl">
                      {item.year}
                    </span>
                    <p className="text-gray-700 mt-2">{item.event}</p>
                  </div>
                </div>

                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                </div>

                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

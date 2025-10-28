import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Button from '../common/Button';
import { companyInfo } from '../../data/companyInfo';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Logo/Company Name */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 mb-4">
              <span className="text-sm font-medium tracking-wider">SINCE 2012</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              {companyInfo.slogan}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-light tracking-wide">
              {companyInfo.nameEn}
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl mb-4 font-medium text-white/95">
              {companyInfo.description}
            </p>
            <p className="text-base md:text-lg text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              {companyInfo.subDescription}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">시공 상담 문의하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-primary-700 transition-all duration-300"
            >
              회사소개 보기
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-sm md:text-base text-blue-100">프로젝트</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">13년</div>
              <div className="text-sm md:text-base text-blue-100">신뢰와 경험</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-sm md:text-base text-blue-100">협력사</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center cursor-pointer"
          onClick={scrollToAbout}
        >
          <div className="text-white/70 text-sm mb-2 tracking-wider">SCROLL</div>
          <FaChevronDown className="text-2xl text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

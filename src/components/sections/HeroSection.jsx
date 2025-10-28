import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../../data/companyInfo';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%)',
      }}
    >
      {/* 배경 이미지 오버레이 */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 via-primary-800/30 to-primary-900/50"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* 상단 배지 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20">
              <span className="text-sm font-medium tracking-widest">SINCE 2012</span>
            </div>
          </motion.div>

          {/* 메인 타이틀 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            {companyInfo.slogan}
          </motion.h1>

          {/* 서브타이틀 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4"
          >
            <p className="text-lg md:text-xl text-blue-100 font-light tracking-wide mb-2">
              {companyInfo.nameEn}
            </p>
          </motion.div>

          {/* 설명 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            {companyInfo.description}<br />
            <span className="text-white/70">{companyInfo.subDescription}</span>
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              시공 상담 문의
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded border-2 border-white/30 hover:border-white/50 transition-all duration-300"
            >
              회사소개 보기
            </button>
          </motion.div>

          {/* 통계 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-sm md:text-base text-blue-100">시공 프로젝트</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">13년</div>
              <div className="text-sm md:text-base text-blue-100">신뢰와 경험</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">300억+</div>
              <div className="text-sm md:text-base text-blue-100">누적 시공금액</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

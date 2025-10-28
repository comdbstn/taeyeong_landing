import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import Button from '../common/Button';
import { companyInfo } from '../../data/companyInfo';

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            상담 문의
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            프로젝트의 시작, 태영개발공사와 함께하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark">
              연락처 정보
            </h3>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-4 text-primary">본사</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      {companyInfo.mainOffice.address}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="text-primary mr-3" />
                    <span className="text-gray-700">
                      {companyInfo.mainOffice.tel}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaFax className="text-primary mr-3" />
                    <span className="text-gray-700">
                      {companyInfo.mainOffice.fax}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-4 text-primary">지사</h4>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    {companyInfo.branchOffice.address}
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <FaEnvelope className="text-primary mr-3 text-xl" />
                  <span className="text-gray-700 text-lg">
                    {companyInfo.email}
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-blue-700 p-6 rounded-lg shadow-lg text-white">
                <h4 className="font-bold text-lg mb-3">회사소개서 다운로드</h4>
                <p className="text-sm mb-4 opacity-90">
                  태영개발공사의 상세 정보를 확인하세요
                </p>
                <button className="flex items-center bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  <FaDownload className="mr-2" />
                  PDF 다운로드
                </button>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <FaMapMarkerAlt className="text-5xl mx-auto mb-4 text-primary" />
                <p className="font-medium">지도 위치</p>
                <p className="text-sm mt-2">경남 양산시 회현2길 44</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-dark">
              문의하기
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  이름 *
                </label>
                <input
                  {...register('name', { required: '이름을 입력해주세요' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="홍길동"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  연락처 *
                </label>
                <input
                  {...register('phone', {
                    required: '연락처를 입력해주세요',
                    pattern: {
                      value: /^[0-9-]+$/,
                      message: '올바른 연락처를 입력해주세요',
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="010-1234-5678"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  이메일
                </label>
                <input
                  {...register('email', {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: '올바른 이메일을 입력해주세요',
                    },
                  })}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  문의내용 *
                </label>
                <textarea
                  {...register('message', {
                    required: '문의내용을 입력해주세요',
                  })}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="문의하실 내용을 자세히 작성해주세요"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" variant="primary" className="w-full">
                문의하기
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { partners, testimonials } from '../../data/partners';

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-gray-50">
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
            협력 업체
          </h2>
          <p className="text-lg text-gray-600">
            신뢰받는 파트너, 국내 유수의 기업과 함께합니다
          </p>
        </motion.div>

        {/* 파트너 슬라이더 */}
        <div className="mb-20 max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-36 flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-2xl">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <p className="font-semibold text-sm text-gray-900">
                      {partner.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 고객 후기 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            고객 후기
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <div className="text-5xl text-primary-600 opacity-20 mb-4">"</div>
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.company}</p>
                    <p className="text-sm text-gray-600 mt-1">{testimonial.person}</p>
                  </div>
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <span className="text-accent-600 font-bold text-lg">
                      {testimonial.company.charAt(0)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;

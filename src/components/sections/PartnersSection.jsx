import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { partners, testimonials } from '../../data/partners';

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            신뢰받는 파트너
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            국내 유수의 기업과 함께합니다
          </p>
        </motion.div>

        <div className="mb-16">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
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
                <div className="bg-light p-8 rounded-lg h-32 flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <p className="font-medium text-sm text-gray-800">
                      {partner.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-light p-8 md:p-12 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-dark">
            함께한 기업들이 말하는 태영의 신뢰
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="text-6xl text-primary opacity-20 mr-4">"</div>
                  <p className="text-gray-700 italic mt-4">
                    {testimonial.text}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-dark">{testimonial.company}</p>
                  <p className="text-sm text-gray-600">{testimonial.person}</p>
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

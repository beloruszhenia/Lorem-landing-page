import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Clients = () => {
  const clients = [
    '/assets/img/clients/clients-1.webp',
    '/assets/img/clients/clients-2.webp',
    '/assets/img/clients/clients-3.webp',
    '/assets/img/clients/clients-4.webp',
    '/assets/img/clients/clients-5.webp',
    '/assets/img/clients/clients-6.webp',
    '/assets/img/clients/clients-7.webp',
    '/assets/img/clients/clients-8.webp'
  ];

  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="zoom-in">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
          }}
          slidesPerView="auto"
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 120
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 120
            }
          }}
          className="swiper init-swiper"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <img src={client} className="img-fluid" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;

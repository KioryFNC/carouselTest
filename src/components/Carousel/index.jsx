import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Dish } from '../Dish';
import { CarouselContainer, NavigationButton } from './styles'; // Ajuste o caminho se necessário

export function Carousel({ dishes }) {
  return (
    <CarouselContainer>
      <Swiper
        spaceBetween={16}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next', // Conecta seta customizada
          prevEl: '.swiper-button-prev', // Conecta seta customizada
        }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          650: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
        style={{ padding: '0 10px' }}
      >
        {dishes.map((dish, index) => (
          <SwiperSlide key={index}>
            <Dish dish={dish} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Setas personalizadas */}
      <NavigationButton className="swiper-button-prev">◀</NavigationButton>
      <NavigationButton className="swiper-button-next">▶</NavigationButton>
    </CarouselContainer>
  );
}

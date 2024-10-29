import styled from 'styled-components';

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SwiperSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc; /* Cor de fundo padrão para os slides */
`;

export const SwiperPagination = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
`;

export const SwiperButtonPrev = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: white;
`;

export const SwiperButtonNext = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: white;
`;

export const SwiperScrollbar = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
`;

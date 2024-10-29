import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 900px; /* Define a largura máxima do carrossel */
  margin: 0 auto; /* Centraliza o carrossel horizontalmente */
  position: relative;
  padding: 0 1rem;
`;

export const NavigationButton = styled.button`
  background: none;
  border: none;
  font-size: rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  transition: transform 0.3s ease;
  color: ${({ theme }) => theme.COLORS.WHITE}; /* Cor das setas */

  &:hover {
    transform: scale(1.2); /* Efeito de hover */
  }
  
  &.swiper-button-prev {
    left: 1rem; /* Ajuste a distância à esquerda */
  }
  
  &.swiper-button-next {
    right: 1rem; /* Ajuste a distância à direita */
  }

  @media (max-width: 900px) {
    font-size: 1.5rem; /* Reduz o tamanho das setas para telas menores */
    margin: 0 5rem;
  }
`;

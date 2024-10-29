import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  font-family: 'poppins';
  font-weight: 500;
  font-size: 1.4rem;
  padding: 1.2rem 1.4rem;
  max-width: 20rem;
  height: 3.2rem;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  border: none;
  display: flex;
  width: -webkit-fill-available;
`;
import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BODY_BG};
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  font-family: 'poppins';
  font-weight: 500;
  font-size: 2.2rem;
  margin: 3.6rem 20rem 1.6rem 7rem;
  align-items: center;
  border: none;
  display: flex;

svg{
  fill: white;
}
`;
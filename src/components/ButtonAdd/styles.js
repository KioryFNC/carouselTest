import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BODY_BG};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: .2rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BODY_BG};
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    color: inherit;
    font-size: 3rem;
  }

  span {
    font-size: 2rem;
  }

  .count {
    font-size: 16px;
    margin: 0 10px;
  }    

`;
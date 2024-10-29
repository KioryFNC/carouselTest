import styled from "styled-components";

export const Container = styled.div`

  .card {
    width: 25rem;
    height: 40rem;
    background-color: ${({theme}) => theme.COLORS.BLACK_200};
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    border-radius: .8rem;
    margin-left: 2.4rem;
  }

  img {
    width: 15rem;
    height: 15rem;
  }

  svg {
    width: 3rem;
    height: 3rem;
    display: flex;
    cursor: pointer;
    position: absolute;
    margin: 0 0 32rem 18rem;
    transition: color 0.3s ease-in-out;
     &:active {
      animation: chick 0.4s ease-in-out;
    }
  }

  @keyframes chick {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(-30deg); }
    100% { transform: scale(1) rotate(0deg); }
  }
  margin-bottom: 5rem;
`;
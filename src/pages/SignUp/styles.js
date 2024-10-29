import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  background-color: ${({ theme }) => theme.COLORS.BODY_BG};
`;

export const Form = styled.form`
  gap: 3rem;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto', sans-serif;

  .logo {
    gap: 1rem;
    display: flex;
    margin-left: 1rem;
    margin-bottom: 2rem;
  }
  
  > h1 {
    font-size: 4.8rem;
  }

  > h2 {
    font-size: 2.4rem;
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  a {
    margin-top: 1rem;
    border: none;
    background: none;
    font-size: 1.4rem;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  }

  .container{
    display: flex;
    flex-direction: column;
  }

  .container > *{
    margin-bottom: 2.5rem;
  }

  .container svg {
    margin-left: 1rem;
  }

  .container button {
    margin: 1rem auto;
  }

  @media (min-width: 768px) {
  main{
    gap: 17rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 20%;
    height: 30px;
  }

  h1{
    margin-left: 1rem;
    white-space: nowrap;
  }

  .container {
    padding: 4rem;
    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.COLORS.FOOTER_BG};
  }

  .custom-input {
    border-radius: .4rem;
    background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
  }
} 

`;

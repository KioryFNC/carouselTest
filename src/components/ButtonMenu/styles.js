import styled from 'styled-components';

export const Container = styled.button`
   font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 300;
    margin: 0 3.8rem 0 3.8rem;
    padding-bottom: 1rem;
    background: none;
    border: none;
    color: white;
    position: relative;
    padding-bottom: .6rem;
    display: grid;
    margin-bottom: 2rem;

  &::after {
    
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px; 
    width: 100%;
    height: 1px;
    width: 28rem;
    background-color: #4D585E;
    
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
import styled from "styled-components";

export const Root = styled.header`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  background: ${({ theme }) => theme.COLORS.HEADER_BG};

  @media screen and (min-width: 768px) {
    .firstSvg {
      display: none;
    }
    .logo {
      white-space: nowrap;
    }
    h1 {
      white-space: nowrap;
    }
    input{
      height: 4rem;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
  }

  h6 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    padding: 8rem 0 6rem;
  }
`
export const ToggleNavbar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Navigation = styled.div`
  position: absolute;
  z-index: 3;
  left: 0;
  top: 9rem;
  width: 100vw;
  height: 30rem;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: all .3s ease;
  background: ${({ theme }) => theme.COLORS.HEADER_BG};
`

export const Search = styled.div`
  display: none;
  border-radius: .6rem;
  margin: 1rem;

  @media screen and (min-width: 768px) {
    display: contents;
  }
`
export const Order = styled.div`
   p {
    display: none;
  }

  @media screen and (min-width: 768px) {
    
    .lastSvg {
      display: flex;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      padding: 1rem;
      border-radius: .6rem;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      font-family: 'Roboto', sans-serif;
    }
    
    .lastSvg svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    p {
      font-size: 1.3rem;
      display: contents;
    }
  }
`
export const SignOut = styled.button`
  font-size: 3rem;

  @media screen and (min-width: 768px) {
    display: contents;
    font-size: 6rem;
    margin-right: 2rem;
  }
`
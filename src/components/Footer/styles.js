import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  height: 7.7rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.FOOTER_BG};
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  bottom: 0;
  margin-top: auto;

  @media (min-width: 768px) {
  h4{
    font-size: 1.8rem;
  }

  h5{
    font-size: 1.4rem;
  }
  }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    
    h4 {
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
      font-size: 1.6rem;
      margin: 1rem ;
      white-space: nowrap;
    }
`

export const FooterText = styled.div`
  h5 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
    margin-left: 2rem;
  }
`
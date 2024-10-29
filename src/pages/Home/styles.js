import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;


  main {
    background-color: ${({ theme }) => theme.COLORS.BODY_BG};
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
    font-family: 'poppins', sans-serif;
  }

  
  .macaron {
    margin: 13rem 1.6rem 6.2rem 3.6rem;
    display: flex;
    align-items: center;
    height: 12rem;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: .6rem;
    background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  
  .macaron img {
    position: absolute;
    width: 19rem; 
    height: 14.9rem; 
    left: -1rem;
    margin-bottom: 3.4rem;
    margin-left: 2rem;
  }

.macaronText {
  padding: 1rem;
  z-index: 1;
  margin-left: 15rem;
}

.macaron h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: .3rem;
}
.macaron p {
  font-size: 1.2rem;
  font-weight: 400;
}

main > h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  margin: 0 0 2.4rem 2.4rem;
}

@media (min-width: 768px) {
  
  main .starterDishes {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 2rem;
  }
    .macaron {
      width: auto; 
      margin: 16rem 6rem 3rem;
      display: flex;
      justify-content: end;
      align-items: center;
      box-sizing: border-box;
    }
    .macaron img {
      width: 25rem;
      height: auto; 
      left: 6rem;
      margin-bottom: 8rem;
    }
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

main {
  margin-top: 8rem;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BODY_BG};
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  font-family: 'poppins', sans-serif;
  }

.salad {
  display: flex;
  align-items: center;
  justify-content: center;
}

.responsiveMenu {
  margin: 0 3rem;
}


.content h2, p{
  font-family: 'Poppins', sans-serif;
  display: grid;
  justify-content: center;
  align-items: center;
}

.content h2 {
  margin-top: 1.6rem;
}

.content p {
  margin: 2rem 0 2rem 0;
  font-size: 1.6rem;
  display: flex;
  text-align: center;
}

.edit {
  margin: 4.8rem 5.6rem ;
  display: flex;
  gap: 5rem;
}

@media (min-width: 768px) {
  .responsiveMenu {
    display: flex;
    margin: 0 5%;
    align-items: center;
  }

  .salad img {
    font-size: 3rem;
    width: 450px;
    height: 100%;
  }

  .content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 5%;
  }

  .content h2 {
    font-size: 3rem;
    font-weight: 400;
  }

  .tags{
    white-space: nowrap;
  }

  .pay{
    margin: 4.8rem 5.6rem 5.4rem -1rem;
  }

  .edit {
    display: flex;
    margin: 5rem 0 0;
  }
}
`;
import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BODY_BG};

main{
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  display: grid;
  margin: 0 3.2rem 7.7rem 3.2rem;
  box-sizing: border-box;

  p{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT_300};
    margin: 2.4rem 0 1.6rem 0;
  }
  h2{
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  }
}


.configtag, .price{
  font-family: 'Roboto', sans-serif;
    width: 30rem;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BODY_BG};
    border-radius: .5rem;
    font-size: 1.3rem;
    outline: none;
    background-color:${({ theme }) => theme.COLORS.HEADER_BG};
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_BG};
    border: none;
    border-radius: .4rem;
    cursor: pointer;
    box-sizing: border-box; 
}

.add{
  font-size: 1.2rem;
  padding: .5rem 1.4rem;
  border-radius: .5rem;
  margin-right: .6rem;
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  background-color: transparent;
  border: 1px dashed  ${({ theme }) => theme.COLORS.GRAY_BG};
}


.price p {
  margin: auto;
  color: ${({ theme }) => theme.COLORS.GRAY_BG};
}

.back{
  font-size: 1.6rem;
  margin: 10rem auto 1rem -1rem;
}

.search-container {
    position: relative;
    display: flex;
    align-items: center;
}

#searchInput {
    font-family: 'Roboto', sans-serif;
    width: 30rem;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BODY_BG};
    border-radius: .5rem;
    font-size: 1.4rem;
    outline: none;
    background-color:${({ theme }) => theme.COLORS.HEADER_BG};
    text-align: justify;
    color: white;
    box-sizing: border-box; 
}

.search-results {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: none;
}

.search-results ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.search-results li {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
} 

.ImgDish {
  font-family: 'Roboto', sans-serif;
  width: 30rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BODY_BG};
  border-radius: .5rem;
  font-size: 1.4rem;
  outline: none;
  background-color: ${({ theme }) => theme.COLORS.HEADER_BG};
  text-align: justify;
  color: white;
  display: flex; 
  align-items: center; 
  box-sizing: border-box; 
}

.ImgDishIcon {
  margin-right: 1rem; 
}

.ImgDishIcon svg {
  color: white;
  width: 3rem;
  height: 3rem; 
}

.description {
  width: 30rem;
  height: 15rem;
  font-family: 'Roboto', sans-serif;
  border: 1px solid ${({ theme }) => theme.COLORS.BODY_BG};
  border-radius: .5rem;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.COLORS.HEADER_BG};
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start; 
  padding: 8px;
  word-wrap: break-word;
}

#descriptionInput {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: auto; 
  padding: .8rem;
  font-size: 1.4rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  word-wrap: break-word;
  resize: none;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 30rem;
}

.save {
  background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  font-family: 'poppins';
  font-size: 1.4rem;
  border-radius: .5rem;
  padding: 1rem;
}

.exit {
  background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  font-family: 'poppins';
  font-size: 1.4rem;
  border-radius: .5rem;
  padding: 1rem;
}


@media  (min-width: 1024px) {

  .configtag, .description {
    width: 100%;
  }
  
  main{
    height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  h2{
    margin-bottom: -6rem;
  }
  
  .allContent {
    width: 100%;
    max-width: 1000px;
    padding: 2rem;
    gap: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
    "A B C"
    "D D E"
    "F F F"
    "G G G";
    box-sizing: border-box;
    margin: 0 auto;
    overflow-x: hidden;
  }
  .div1{
    grid-area: A;
  }
  
  .name {
    grid-area: B;
    
  }
  .categoria{
    grid-area: C;
  }
  
  .ingredientes{
    grid-area: D;
    }
    
  .preco{
    grid-area: E;
    }
    
  .descricao{
    grid-area: F;
  }

  .buttons{
    grid-area: G;
    width: 95rem;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 2rem;
  }
}



`;
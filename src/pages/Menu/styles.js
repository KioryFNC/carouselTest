import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  background-color: ${({ theme }) => theme.COLORS.BODY_BG};
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  justify-content: space-between;

  aside {
    flex: 1;
  }
  
  .menu button {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  .menu {
    background-color: ${({ theme }) => theme.COLORS.HEADER_BG};
    display: flex;
    padding: 5.8rem 2.8rem 2.4rem;
    align-items: center;
  }

  .menu svg {
    fill: white;
    margin-right: .5rem;
    width: 3rem;
  }

  .searchContainer {
    position: relative;
    display: flex;
    align-items: center;
    width: 35rem; 
  }

  #searchInput {
    font-family: 'Roboto', sans-serif;
    width: 35rem;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BODY_BG};
    border-radius: .5rem;
    font-size: 1.4rem;
    outline: none;
    background-color: ${({ theme }) => theme.COLORS.HEADER_BG};
    margin: 3.6rem 2.8rem;
    text-align: left;
    color: white;
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

  .search-results li:hover {
    background-color: #f9f9f9;
  }

  .searchContainer svg {
    fill: ${({ theme }) => theme.COLORS.GRAY_TEXT_100};
    right: 3rem;
    position: absolute;
    pointer-events: none;
    width: 3rem;
    height: 3rem;
  }
`;

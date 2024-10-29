import styled from 'styled-components';

export const Button = styled.button`
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
    border-radius: 4px;
    cursor: pointer;
`;

export const DropdownContainer = styled.div`
  margin-top: 1rem;
  border-radius: 4px;
`;

export const DropdownOption = styled.div`
  font-family: 'Roboto', sans-serif;
    width: 30rem;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BODY_BG};
    border-radius: .5rem;
    font-size: 1.3rem;
    outline: none;
    background-color:${({ theme }) => theme.COLORS.GRAY_200};
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_BG};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 1rem;
  
  &:hover {
    background-color: #ddd;
  }
`;

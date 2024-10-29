import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    overflow-x: hidden;
  }

  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: #FFF;
    background: none;
  }

  svg {
    &:active {
    animation: shrink 0.2s ease-in-out;
  }
}
@keyframes shrink {
  0% { transform: scale(1); }
  50% { transform: scale(0.8); }
  100% { transform: scale(1); }
  }

  input {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    border: none;
    outline: none;
    background: none;
    color: #FFF;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #202024;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #4D585E;
  }
`;
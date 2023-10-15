import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
    font-size: 62.5%;
}

body {
    padding: 0;
    margin: 0;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
min-height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center;
    box-sizing: border-box;
}

`;

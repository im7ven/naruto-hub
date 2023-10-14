import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
    font-size: 62.5%;
}

body {
    padding: 0;
    margin: 0;
    background: #1a1a1a;
    min-height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center;
}

`;

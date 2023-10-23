import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
    font-size: 62.5%;
}

body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center;
    box-sizing: border-box;
   
    background: radial-gradient(circle, rgba(55,55,55,1) 14%, rgba(0,0,0,1) 100%);

};
`;

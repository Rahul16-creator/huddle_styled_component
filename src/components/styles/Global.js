import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html {
    font-family:'Poppins',sans-serif;
    background:${(props) => props.theme.body};
    font-size:62.5%;
}

p {
    opacity: 0.6;
    line-height: 1.5;
    font-size:1.5rem;
    margin-bottom:2rem;
    letter-spacing:1px;
}
img {
    max-width:100%
}

h1 {
    font-size:3rem;
    margin-bottom:2rem ;
}

li {
    list-style:none;
}

a{
    text-decoration:none;
}

`;

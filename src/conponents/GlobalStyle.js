import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;

        @media (max-width: 1700px) {
            font-size: 75%;
        }
        @media (max-width: 600px) {
        font-size: 70%;
        overflow-x: hidden;

    }
    }

    body {
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
        @media (max-width: 600px) {
            overflow-x: hidden;
        }
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        font-family: 'Inter', sans-serif;
        transition: 0ms.5s all ease;
        &:hover {
            background: #23d997;
            color: white;
        }
    }

    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: bold;
        font-size: 2rem;
    }
    span {
        font-weight: bold;
        color: #23d997;
    }
    a {
        font-size: 1.1.rem;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    @media (max-width: 450px) {
        h2 {
            font-size: 2.5rem;
        }
        h4 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1.2rem;
        }
    }

`

export default GlobalStyle
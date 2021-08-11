import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
    }

    body {
        font: 400 16px 'Roboto', sans-serif;
        letter-spacing: -0.02em;
        background-color: #E5E5E5;
        color: #000;
    }

    #__next {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    li {
        list-style-type: none;
    }

    input, button, textarea {
        background-color: transparent;
        outline: none;
        border: none;
        font-family: inherit;
        transition: all .5s ease;
    }

    textarea {
        resize: none;
    }

    *::-webkit-input-placeholder {color:rgba(0,0,0,.5); transition: color .5s;}
    *::-moz-placeholder          {color:rgba(0,0,0,.5); transition: color .5s;}/* Firefox 19+ */
    *:-moz-placeholder           {color:rgba(0,0,0,.5); transition: color .5s;}/* Firefox 18- */
    *:-ms-input-placeholder      {color:rgba(0,0,0,.5); transition: color .5s;}

    *:focus::-webkit-input-placeholder {color:#000;}
    *:focus::-moz-placeholder          {color:#000;}/* Firefox 19+ */
    *:focus:-moz-placeholder           {color:#000;}/* Firefox 18- */
    *:focus:-ms-input-placeholder      {color:#000;}

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus
    input:-webkit-autofill, 
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: #000;
        background-color: transparent!important;
        transition: background-color 5000s ease-in-out 0s;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }
`
export default GlobalStyle;
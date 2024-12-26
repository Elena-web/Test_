import { createGlobalStyle } from 'styled-components';

/* Base style */
export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  outline: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}

html {
  font-size: 10px;
  box-sizing: border-box;
  background-color: #fff;
  scroll-behavior: smooth;
}

body {
  font-family: "PT Sans", serif;
  background-color: #F4F5F9;
  height: 100%;
  font-style: normal;
  overflow-x: hidden;
  box-shadow: 2px 2px 5px 0px #42567A;
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
}

button {
  cursor: pointer;
}

button:hover {
  transition: all .3s linear;
}

a {
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  transition: all .3s linear;
}

ul {
  margin: 0;
}

label {
  cursor: pointer;
}

h1 {
  margin: 0;
}

h6 {
    margin: 0;
}
`
export default GlobalStyle;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
html{
    font-size: 62.5%;
    font-family: Be Vietnam Pro;
}
html, body, #root{
    height: 100%;
  
}
a{
    text-decoration: none;
}
button{
  background-color: inherit;
  border: none;
  cursor: pointer;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: ${(props) => props.theme.colors.bg};
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
ul{
  padding: 0;
  list-style: none;
}
.active{
    background-color: ${(props) => props.theme.colors.lightGray} !important;
}`;
export default GlobalStyle;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme.ts";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
button{
  border: none;
  outline: none;
  cursor: pointer;
}
a{
  color: inherit;
}
body{
  background-color: black;
  color: #fff;
}
ul,ol, li{
  list-style: none;
}
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

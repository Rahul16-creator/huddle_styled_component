import React from "react";
import { ThemeProvider } from "styled-components";
import Content from "./components/content";
import Footer from "./components/Footer";
import Header from "./components/header";
import { GlobalStyles } from "./components/styles/Global";

let theme = {
  header: "#ebfbff",
  body: "#fff",
  footer: "#003333",
  mobile: "500px",
  tablet: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

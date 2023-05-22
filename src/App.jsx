import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidenav from "./components/sidenav/Sidenav";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Sidenav />
      <Footer />
    </div>
  );
};

export default App;

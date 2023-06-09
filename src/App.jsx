import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidenav from "./components/header/Sidenav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Sidenav />
      <Footer />
    </div>
  );
}

export default App;

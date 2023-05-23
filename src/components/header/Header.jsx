import React from "react";
import Sidenav from "./Sidenav";
import Cta from "./Cta";

function Header() {
  const profil = {
    name: "Dheru Alam Perkasa",
    profil_image: "assets/img/profile-img.jpg",
  };
  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src={profil.profil_image}
              alt
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">{profil.name}</a>
            </h1>
            <Cta />
          </div>
          <Sidenav />
        </div>
      </header>
    </>
  );
}

export default Header;

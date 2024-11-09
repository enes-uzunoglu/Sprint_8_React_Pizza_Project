import React from "react";

import "../Style/UtilityClasses.css";
import "../Style/Style.css";
import NavMenu from "./NavMenu";

function StartScreen() {
  function handleClick() {
    if (window.scrollY === 0) {
      window.scrollBy({
        top: 73.6, // 80px kadar aşağı kaydır
        behavior: "smooth", // Yumuşak kaydırma
      });
    } else if (window.scrollY >= 73.6) {
      window.scrollTo({
        top: 0, // 0'a götür
        behavior: "smooth", // Yumuşak kaydırma
      });
    }
  }

  return (
    <div className="container1 flex positionCenterStart column">
      <div className="fullScreenBanner flex column positionStartCenter gap-s">
        <h1>Teknolojik Yemekler</h1>
        <p>fırsatı kaçırma</p>
        <p>KOD ACIKTIRIR ,PİZZA DOYURUR</p>
        <button onClick={handleClick}>ACIKTIM</button>
      </div>
      <div>
        <NavMenu> </NavMenu>
      </div>
    </div>
  );
}

export default StartScreen;

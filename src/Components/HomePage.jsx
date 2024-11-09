import React from "react";
import StartScreen from "./StartScreen";
import CardMenu from "./CardMenu";
import Footer from "./Footer";

import "../Style/UtilityClasses.css";
import "../Style/Style.css";

function HomePage(props) {
  const { isim } = props;
  console.log(isim);
  return (
    <div className="flex column gap-m">
      <StartScreen></StartScreen>
      <CardMenu> </CardMenu>
      <Footer> </Footer>
    </div>
  );
}

export default HomePage;

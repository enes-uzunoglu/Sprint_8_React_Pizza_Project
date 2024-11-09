import React from "react";
import CardAdvert from "./CardAdvert";
import CardFav from "./CardFav";

import "../Style/UtilityClasses.css";
import "../Style/Style.css";

function CardMenu() {
  return (
    <div className="flex column gap-m">
      <CardAdvert> </CardAdvert>
      <CardFav> </CardFav>
    </div>
  );
}

export default CardMenu;

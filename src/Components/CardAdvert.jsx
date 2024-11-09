import React from "react";

import "../Style/UtilityClasses.css";
import "../Style/Style.css";

function CardAdvert() {
  return (
    <div className="container4 flex column">
      <div className="flex fullScreenWidth positionCenterStart gap-sm">
        <div>
          <h3>Özel Lezzetus</h3>
          <p>Position:Absolute Acı Burger</p>
          <button>Sipariş Ver</button>
        </div>
        <div className="flex column gap-s">
          <div>
            <h3>Hackathlon Burger Menü</h3>
            <button>Sipariş Ver</button>
          </div>
          <div>
            <h3>
              <span>Çoooook</span> hızlı npm gibi kurye
            </h3>
            <button>Sipariş Ver</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAdvert;

import React from "react";
import "../Style/UtilityClasses.css";
import "../Style/Style.css";

function CardFav() {
  return (
    <div className="container5 flex gap-m positionCenterStart">
      <div>
        <img src="src/imageFolder/food-1.png" alt="food-1" />
        <h3>Terminal Pizza</h3>
        <div className="flex justifyContent-s">
          <p>4.9</p>
          <div className="flex gap-s">
            <p>(200)</p>
            <p>60₺</p>
          </div>
        </div>
      </div>

      <div>
        <img src="src/imageFolder/food-2.png" alt="food-2" />
        <h3>Position Absolute Acı Pizza</h3>
        <div className="flex justifyContent-s">
          <p>4.2</p>
          <div className="flex gap-s">
            <p>(130)</p>
            <p>45₺</p>
          </div>
        </div>
      </div>

      <div>
        <img src="src/imageFolder/food-3.png" alt="food-3" />
        <h3>useEffect Tavuklu Burger</h3>
        <div className="flex justifyContent-s">
          <p>4.7</p>
          <div className="flex gap-s">
            <p>(108)</p>
            <p>72₺</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFav;

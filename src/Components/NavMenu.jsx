import React from "react";

import "../Style/UtilityClasses.css";
import "../Style/Style.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NavMenu() {
  let history = useHistory();
  function handleClick(path) {
    history.push(path);
  }

  return (
    <div className="container2 fulScreenWidth flex positionCenterCenter">
      <ul className="flex positionCenterCenter justifyContent-s">
        <button>
          <img src="src/imageFolder/1.svg" alt="" />
          Ramen
        </button>
        <button onClick={() => handleClick("/form")}>
          {/*buradaki () => bu yapıya bak*/}
          <img src="src/imageFolder/2.svg" alt="" />
          Pizza
        </button>
        <button>
          <img src="src/imageFolder/3.svg" alt="" />
          Burger
        </button>
        <button>
          <img src="src/imageFolder/4.svg" alt="" />
          French Fries
        </button>
        <button>
          <img src="src/imageFolder/5.svg" alt="" />
          Fast Food
        </button>
        <button>
          <img src="src/imageFolder/6.svg" alt="" />
          Soft Drinks
        </button>
      </ul>
    </div>
  );
}

export default NavMenu;

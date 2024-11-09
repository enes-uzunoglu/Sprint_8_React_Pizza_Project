import React from "react";
import "../Style/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="display-flex flex-direction-column min-width-div-100vw min-height-div-14rem background-color-header color-white padding-2rem ">
      <div className="display-flex flex-direction-column align-items-center max-width-35 rem margin-0-auto gap-1rem">
        <h1 className="font-barlow fontsize-3rem ">Teknolojik Yemekler</h1>

        <nav>
          <ul className="fontsize-1-5rem display-flex gap-1rem list-style-type-none align-self-end">
            <li>
              <Link className="li-a" to="/" exact>
                Anasayfa
              </Link>
            </li>
            <li>
              <Link className="li-a" to="/form">
                Sipariş Oluştur
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

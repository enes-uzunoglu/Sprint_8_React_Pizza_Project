import React from "react";
import "../Style/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="display-flex flex-direction-column min-width-div-100vw min-height-div-14rem background-color-header color-white ">
      <div className="display-flex flex-direction-column align-items-center max-width-35 rem margin-0-auto">
        <h1 className="font-barlow fontsize-3rem ">Teknolojik Yemekler</h1>

        <nav>
          <ul className="fontsize-1-5rem display-flex gap-1rem list-style-type-none align-self-end">
            <li>
              <Link to="/" exact>
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="/form">Sipariş Oluştur</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./App.css";

function Header() {
  return (
    <div className="display-flex flex-direction-column min-width-div-100vw min-height-div-14rem background-color-header color-white ">
      <div className="display-flex flex-direction-column align-items-center max-width-35 rem margin-0-auto">
        <h1 className="font-barlow fontsize-3rem ">Teknolojik Yemekler</h1>

        <nav>
          <ul className="fontsize-header-ul display-flex gap-1rem list-style-type-none align-self-end">
            <li>
              <a className="text-decoration-none" href="">
                Anasayfa
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="">
                Sipariş Oluştur
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

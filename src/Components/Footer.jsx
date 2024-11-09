import React from "react";
import NavMenu from "./NavMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; // TWİTTER İCON ÇOK UGRASTIRDI ANLAMADIM DA ZATEN

import "../Style/UtilityClasses.css";
import "../Style/Style.css";

function Communication() {
  return (
    <div className="container6 fullScreenWidth positionCenterCenter flex column">
      <div className="flex positionCenterEnd justifyContent-a gap-xl">
        <div className="flex column gap-xs">
          <h1>Teknolojik Yemekler</h1>

          <div>
            <img src="src/imageFolder/icon-1.png" alt="footer-icon1" />
            <p>341 Londonderry Road, Istanbul Türkiye</p>
          </div>

          <div>
            <img src="src/imageFolder/icon-2.png" alt="footer-icon2" />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>

          <div>
            <img src="src/imageFolder/icon-3.png" alt="footer-icon3" />
            <p>+90 216 123 45 67</p>
          </div>
        </div>

        <div>
          <h3>Hot Menü</h3>
          <p>
            Terminal Pizza useEffect Tavuklu Pizza Beyaz Console Frosty Testler
            Geçti Mutlu Burger Position Absolute Acı Burger
          </p>
        </div>

        <div>
          <h3>Instagram</h3>

          <ul>
            <li>
              <img src="src/imageFolder/li-1.png" alt="li-1" />
            </li>

            <li>
              <img src="src/imageFolder/li-2.png" alt="li-2" />
            </li>

            <li>
              <img src="src/imageFolder/li-3.png" alt="li-3" />
            </li>
          </ul>
          <ul>
            <li>
              <img src="src/imageFolder/li-4.png" alt="li-4" />
            </li>

            <li>
              <img src="src/imageFolder/li-5.png" alt="li-5" />
            </li>

            <li>
              <img src="src/imageFolder/li-6.png" alt="li-6" />
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p>© 2023 Teknolojik Yemekler.</p>
        <a href="#">
          <FontAwesomeIcon
            style={{
              color: "white",
            }} /** Buradaki parantezler de çok enteresan */
            icon={faTwitter}
            size="2x"
          />
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <NavMenu> </NavMenu>
      <Communication> </Communication>
    </div>
  );
}

export default Footer;

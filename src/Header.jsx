import React from "react";
import './App.css'

function Header() {

    return( 

            <div className="display-flex flex-direction-column justify-content-center align-items-center min-width-div-100vw min-height-div-14rem background-color-header color-white ">
                
            <h1 className="font-barlow fontsize-4rem ">Teknolojik Yemekler</h1>

            <nav>

            <ul className="fontsize-header-ul display-flex gap-1rem list-style-type-none">
                <li>
                    <a className="text-decoration-none" href="">Anasayfa</a>
                </li>
                <li>
                    <a className="text-decoration-none" href="">Sipariş Oluştur</a>
                </li>
            </ul>

            </nav>

            </div>

    )
}

export default Header
import React from "react";
import './App.css'
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  
function Header() {

    return( 

        <>
            <div className="display-flex justify-content align-items width height-header-div headerColor">
                
            <h1 className="font-barlow fontsize-h1 ">Teknolojik Yemekler</h1>

            <BrowserRouter>

                <Switch>

                    <Route>

                    <NavLink to="/" exact>
                    Anasayfa
                    </NavLink>

                    <NavLink to="/siparis">
                    Sipariş Oluştur
                    </NavLink>

                    </Route>

                </Switch>

            </BrowserRouter>
            
            </div>

        </>

    )
}

export default Header
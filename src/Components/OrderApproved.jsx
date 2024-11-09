import React from "react";
import Footer from "./Footer";

function OrderApproved(props) {
  const { abc } = props;
  console.log(abc);
  return (
    <div className="container7">
      <div className="fullScreenBanner flex column positionStartCenter gap-s">
        <h2>Teknolojik Yemekler</h2>
        <p>lezzetin yolda</p>
        <p>SİPARİŞ ALINDI</p>
        <h1>Position Absolute Acı Pizza</h1>
      </div>
      <div>{abc}</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default OrderApproved;

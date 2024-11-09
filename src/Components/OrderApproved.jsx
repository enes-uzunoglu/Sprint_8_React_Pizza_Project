import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

function OrderApproved() {
  const location = useLocation();
  const { form } = location.state || {}; // Eğer state boşsa hatayı önlemek için

  return (
    <div className="container7">
      <div className="fullScreenBanner flex column positionStartCenter gap-l">
        <div className="flex column positionStartCenter gap-s">
          <h1>Teknolojik Yemekler</h1>
          <p>Lezzetin yolda</p>
          <p>SİPARİŞ ALINDI</p>
        </div>
        {/* Form verilerini burada kullanabilirsiniz */}
        <h2>Position Absolute Acı Pizza</h2>
        <div className="flex  positionStartCenter gap-l">
          <img
            src="https://text.media.giphy.com/v1/media/giphy.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJwcm9kLTIwMjAtMDQtMjIiLCJzdHlsZSI6Im1lYW53aGlsZSIsInRleHQiOiI0OCIsImlhdCI6MTczMTE4ODg5NH0.RS5VnhA25sfWRr5Yt8puVpjTiySZMZPY_QbPVIzMaDY"
            alt=""
          />
          <div className="flex column positionCenterStart gap-xs">
            <p>Boyut: {form.boyut}</p>
            <p>Hamur: {form.hamur}</p>
            <p>Malzemeler: {form.malzemeler.join(", ")}</p>{" "}
            {/*join i unutmuştuk iyi oldu*/}
            <p>Sipariş Notu: {form.siparisNotu}</p>
          </div>
          <img
            src="https://text.media.giphy.com/v1/media/giphy.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJwcm9kLTIwMjAtMDQtMjIiLCJzdHlsZSI6Im1lYW53aGlsZSIsInRleHQiOiI0OCIsImlhdCI6MTczMTE4ODg5NH0.RS5VnhA25sfWRr5Yt8puVpjTiySZMZPY_QbPVIzMaDY"
            alt=""
          />
        </div>

        <div className="width-div-22rem display-flex flex-direction-column gap-1rem">
          <div className="display-flex justify-content-a">
            <label className="flex-basis-7rem text-align-end">
              Sipariş Toplamı:
            </label>
            <label>{` `}</label> {/* buraya bak */}
          </div>
          <div className="display-flex justify-content-a">
            <label className="flex-basis-7rem text-align-end">
              Ekstra Tutar:
            </label>
            <label> {form.ekstraTutar} ₺</label>
          </div>
          <div className="display-flex justify-content-a">
            <label className="flex-basis-7rem text-align-end">
              Toplam Tutar:
            </label>
            <label> {form.toplamTutar} ₺</label>
          </div>
        </div>

        {/**bu soru ısaretlerıde kıymetlı mı mıymış */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default OrderApproved;

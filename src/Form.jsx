import React, { useState } from "react";
import "./App.css";

const boyutlar = ["Küçük", "Orta", "Büyük"]; // burası doğru yer
const hamurlar = ["İnce", "Orta", "Kalın"];
const malzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Salam",
  "Ananas",
  "Kabak",
];

function Form() {
  const [form, setForm] = useState({ boyut: "", hamur: "", malzemeler: [] });
  const [error, setError] = useState({
    boyutHata: "",
    hamurHata: "",
    malzemelerHata: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    // if (name === "boyut" && value === "Küçük") {
    //   setError({ ...error, boyutHata: "lütfen boyut belirtiniz." });
    // } else {
    //   setError("");
    // }

    // if (name === "hamur" && value === "Kalın") {
    //   setError({ ...error, hamurHata: "lütfen hamur belirtiniz." });
    // } else {
    //   setError("");
    // }

    // if (form.malzemeler.length >= 9 && checked) {
    //   setError({
    //     ...error,
    //     malzemelerHata: "En Fazla 10 malzeme seçebilirsiniz.",
    //   });
    // } else {
    //   setError("");
    // }

    if (name === "boyut") {
      value === "Küçük"
        ? setError({ ...error, boyutHata: "lütfen boyut belirtiniz." })
        : setError({ ...error, boyutHata: "" });
    } else if (name === "hamur") {
      value === "Kalın"
        ? setError({ ...error, hamurHata: "lütfen hamur belirtiniz." })
        : setError({ ...error, hamurHata: "" });
    } else if (form.malzemeler.length >= 9) {
      checked
        ? setError({
            ...error,
            malzemelerHata: "En Fazla 10 malzeme seçebilirsiniz.",
          })
        : setError({
            ...error,
            malzemelerHata: "",
          });
    }

    //boyut seçilmemişse bir error at

    let secilenMalzemeler = [...form.malzemeler];

    if (name === "malzemeler") {
      if (checked) {
        secilenMalzemeler.push(value);
      } else {
        secilenMalzemeler = form.malzemeler.filter(
          (malzeme) => malzeme !== value
        );
      }

      setForm({ ...form, malzemeler: secilenMalzemeler });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="display-flex flex-direction-column gap-3rem width-div-100vw">
      {/* Fiyat-Ürün Bilgisi */}
      <div className="display-flex flex-direction-column gap-1rem font-barlow color-black max-width-35rem margin-0-auto ">
        <h2>Position Absolute Acı Pizza</h2>
        <div className="display-flex justify-content-sb align-items-end">
          <h1>85.50₺</h1>
          {/* ne yaptıysam h1 div in alt cızgısını hızzalanmadı. */}

          <div className="display-flex justify-content-end width-yüz100 gap-3rem ">
            <p>{`${"4.9"}`}</p>
            <p>{`${"200"}`}</p>
          </div>
        </div>
        <p className="text-align-justify">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>

      {/* Boyut - Hamur */}
      <div className="display-flex gap-5rem min-width-35rem margin-0-auto">
        {/* Boyut Seç */}
        <div>
          <h2>
            Boyut Seç<span className="color-star">*</span>
          </h2>
          {boyutlar.map((boyut, ind) => {
            return (
              <label key={ind} className="display-flex gap-1rem">
                <input
                  type="radio"
                  name="boyut"
                  value={boyut}
                  onChange={handleChange}
                />
                {boyut}
              </label>
            );
          })}
          {error && <p style={{ color: "red" }}>{error.boyutHata}</p>}
        </div>
        {/* Hamur Seç */}
        <div>
          <h2>
            Hamur Seç<span className="color-star">*</span>
          </h2>
          <select name="hamur" onChange={handleChange}>
            <option value="" disabled selected>
              Hamur Kalınlığı
            </option>

            {hamurlar.map((hamur, ind) => {
              return (
                <option key={ind} value={hamur}>
                  {hamur}
                </option>
              );
            })}
          </select>
          {error && <p style={{ color: "red" }}>{error.hamurHata}</p>}
        </div>
      </div>

      {/* Ek Malzemeler */}
      <div className="display-flex flex-direction-column max-width-35rem gap-3rem margin-0-auto">
        <div className="display-flex flex-direction-column gap-1rem">
          <h2>Ek Malzemeler</h2>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        <div className="display-flex justify-content-sb gap-1-5rem wrap">
          {malzemeler.map((malzeme, ind) => {
            return (
              <label
                key={ind}
                className="display-flex gap-0-5rem flex-basis-9rem"
              >
                <input
                  type="checkbox"
                  name="malzemeler"
                  value={malzeme}
                  checked={form.checked}
                  disabled={
                    form.malzemeler.length >= 10 &&
                    !form.malzemeler.includes(malzeme)
                  } // buraya bak
                  onChange={handleChange}
                />
                {malzeme}
              </label>
            );
          })}

          <label className="flex-basis-9rem"></label>
        </div>
        {error && <p style={{ color: "red" }}>{error.malzemelerHata}</p>}
      </div>
    </div>
  );
}

export default Form;

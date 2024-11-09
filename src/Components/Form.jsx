import React, { useEffect, useState } from "react";
import "../Style/App.css";
import OrderApproved from "./OrderApproved";

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
  const [form, setForm] = useState({
    boyut: "",
    hamur: "",
    malzemeler: [],
    siparisNotu: "",
    adet: 1,
    ekstraTutar: 0,
    toplamTutar: 0,
  });
  const [error, setError] = useState({
    boyutHata: "",
    hamurHata: "",
    malzemelerHata: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    // form.boyut === ""
    //   ? setError({ ...error, boyutHata: "lütfen boyut belirtiniz." })
    //   : setError({ ...error, boyutHata: "" });

    console.log(form.boyut);

    if (form.malzemeler.length >= 9) {
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

  function handleClick(e) {
    const { name } = e.target;

    name === "siparis"
      ? setError({
          ...error,
          boyutHata: form.boyut === "" ? "Lütfen boyut belirtiniz." : "",
          hamurHata: form.hamur === "" ? "Lütfen hamur belirtiniz." : "",
        })
      : null;

    // form.hamur === ""
    //   ? setError({ ...error, hamurHata: "lütfen hamur belirtiniz." })
    //   : setError({ ...error, hamurHata: "" });
    // setTimeout(() => {
    //   form.boyut === ""
    //     ? setError({ ...error, boyutHata: "lütfen boyut belirtiniz." })
    //     : setError({ ...error, boyutHata: "" });
    // }, 1000);

    //  ÇOK ÖĞRETİCİ

    console.log(error.boyutHata);

    if (name === "azalt" && form.adet > 1) {
      setForm({ ...form, adet: form.adet - 1 });
    } else if (name === "arttır" && form.adet < 10) {
      setForm({ ...form, adet: form.adet + 1 });
    }
  }

  useEffect(() => {
    setForm({
      ...form,
      ekstraTutar: form.adet * form.malzemeler.length * 5,
      toplamTutar: 85.5 * form.adet + form.adet * form.malzemeler.length * 5,
    });
  }, [form.adet, form.malzemeler]);

  return (
    <div className="display-flex flex-direction-column gap-3rem width-div-100vw">
      {/* Fiyat-Ürün Bilgisi */}
      <div className="display-flex flex-direction-column gap-1rem font-barlow color-black max-width-35rem margin-0-auto ">
        <h2>Position Absolute Acı Pizza</h2>
        <div className="display-flex justify-content-sb align-items-end">
          <h1>85.50 ₺</h1>
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
      <div className="display-flex gap-5rem min-width-35rem margin-0-auto ">
        {/* Boyut Seç */}
        <div>
          <h2 className="font-barlow font-weigth-bold">
            Boyut Seç<span className="color-star">*</span>
          </h2>
          {boyutlar.map((boyut, ind) => {
            return (
              <label
                key={ind}
                className="display-flex gap-1rem font-weigth-m font-barlow"
              >
                <input
                  type="radio"
                  name="boyut"
                  value={boyut} // neden diye bır sorgula
                  checked={form.boyut === boyut} // Burada form.boyut'u kontrol ediyoruz
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
          <select name="hamur" value={form.hamur} onChange={handleChange}>
            {" "}
            {/** buraya bı bak */}
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
      <div className="display-flex flex-direction-column max-width-35rem gap-2rem margin-0-auto">
        <div className="display-flex flex-direction-column gap-1rem">
          <h2>Ek Malzemeler</h2>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          {error && <p style={{ color: "red" }}>{error.malzemelerHata}</p>}
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
      </div>

      {/* Sipariş Notu */}
      <div className="display-flex flex-direction-column min-width-35rem margin-0-auto">
        <label htmlFor="siparisNotu">Sipariş Notu</label>
        <textarea
          className="resize"
          name="siparisNotu"
          id="siparisNotu"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          value={form.siparisNotu}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Sipariş Sayısal */}
      <div className="display-flex justify-content-sb min-width-35rem margin-0-auto">
        {/* Sipariş Adet */}
        <div className="display-flex ">
          <button
            name="azalt"
            disabled={form.adet < 2} // = 0 yapınca 2 butonu da tıklanamaz yaptı
            onClick={handleClick}
            className="size-square-2-5 background-color-button text-align-c fontsize-1-5rem font-weigth-bold cursor"
          >
            —
          </button>
          <label
            className="size-square-input-2-5 display-flex justify-content-center align-items-center border-0-1rem "
            type="text"
          >
            {form.adet}
          </label>
          <button
            name="arttır"
            disabled={form.adet > 9} // = 10 mantıklı olmaz !!! = ile hep true ya da false olur sürekli değil.
            onClick={handleClick}
            className="size-square-2-5 background-color-button text-align-c fontsize-1-5rem font-weigth-bold cursor"
          >
            ＋
          </button>
        </div>

        {/* Sipariş Ver */}
        <div className="display-flex flex-direction-column justify-content-end gap-1rem max-width-div-26rem border-0-1rem border-radius-0-3rem height-12rem padding-top-2rem">
          {/* buralarda bi max ile normal width ? */}
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
              <label> {form.ekstraTutar} </label>
            </div>
            <div className="display-flex justify-content-a">
              <label className="flex-basis-7rem text-align-end">
                Toplam Tutar:
              </label>
              <label> {form.toplamTutar} </label>
            </div>
          </div>
          <button
            name="siparis"
            className="width-div-22rem background-color-button text-align-c border-none border-radius-0-3rem min-height-div-2-5rem cursor"
            onClick={handleClick}
            //onSubmit={handleSubmit}
          >
            Sipariş Ver
          </button>
        </div>
      </div>
      {false && <OrderApproved abc={form}> </OrderApproved>}
    </div>
  );
}

export default Form;

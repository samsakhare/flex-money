import React, { useEffect, useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import CardAPI from "../../Helpers/CardAPI";
import CardList from "./CartList";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  saveLocalStorage,
} from "../../Helpers/utils";

const Card = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [cardsList, setCardsList] = useState([]);

  const [focus, setFocus] = useState("number");
  const [cardView, setCardView] = useState("front");

  const toogleCardView = () => {
    if (cardView === "front") {
      setCardView("back");
      setFocus("cvc");
    } else {
      setCardView("front");
      setFocus("number");
    }
  };

  const handleInputFocus = (e) => {
    const { name, value } = e.target;
    name === "cvc" ? setCardView("back") : setCardView("front");
    setFocus(name);
  };

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "number":
        e.target.value = formatCreditCardNumber(e.target.value);
        setNumber(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "expiry":
        e.target.value = formatExpirationDate(e.target.value);
        setExpiry(e.target.value);
        break;
      case "cvc":
        e.target.value = formatCVC(e.target.value);
        setCVC(e.target.value);
        break;
      default:
        "";
    }
  };

  const payNow = (e) => {
    e.preventDefault();
    const objCardAPI = new CardAPI();
    let arrExpiry = [];
    let strMonth = "";
    let strYear = "";
    if (expiry) {
      arrExpiry = expiry.split("/");
      strMonth = arrExpiry[0];
      strYear = arrExpiry[1];
    }
    objCardAPI
      .processCard("/v3/0b14a8da-5fc7-4443-8511-53d687399bc9", {
        cardNo: number.replace(/\s/g, ""),
        cvv: cvc,
        expiryMonth: strMonth,
        expiryYear: strYear,
        name: name,
      })
      .then((res) => {
        if (res.status === 200) {
          // save object in localStorage and passit card list
          cardsList.push({
            number,
            name,
            expiry,
            cvc,
          });
          setCardsList([...cardsList]);
        } else {
          console.log("Unable to save data");
        }
      })
      .catch((e) => {
        console.error("Unable to save data", e);
      });
  };

  useEffect(() => {
    console.log(cardsList);
  }, [cardsList]);

  return (
    <div id="PaymentForm">
      <div
        className="rccs relative z-10"
        onMouseEnter={() => {
          toogleCardView();
        }}
        onMouseLeave={() => {
          toogleCardView();
        }}
      >
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
      </div>
      <div className="z-9 card-input-form">
        <form className="mt-20" onSubmit={(e) => payNow(e)}>
          <div>
            <label
              htmlFor="credit-card-number"
              className="block uppercase text-xs text-gray-400 font-bold mb-2 label label-card-number"
            >
              Credit Card Number
            </label>
            <input
              id="credit-card-number"
              type="tel"
              name="number"
              className="form-control w-full mb-2 p-5 border rounded text-sm"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <label
            htmlFor="credit-card-name"
            className="block uppercase text-xs text-gray-400 font-bold mb-2 label label-card-name"
          >
            Customer Name
          </label>
          <div>
            <input
              id="credit-card-name"
              type="text"
              name="name"
              className="form-control w-full mb-2 p-5 border rounded text-sm"
              placeholder="Name"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="inline-flex">
            <div className="w-1/2">
              <label
                htmlFor="credit-card-expiry"
                className="block uppercase text-xs text-gray-400 font-bold mb-2 label label-card-expiry"
              >
                Expiry
              </label>

              <input
                id="credit-card-expiry"
                type="tel"
                name="expiry"
                className="form-control w-full mb-2 p-5 border rounded text-sm"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="w-1/2 ml-4">
              <label
                htmlFor="credit-card-cvc"
                className="block uppercase text-xs text-gray-400 font-bold mb-2 text-xs label label-card-cvc"
              >
                CVC
              </label>

              <input
                id="credit-card-cvc"
                type="tel"
                name="cvc"
                className="form-control w-full mb-2 p-5 border rounded text-sm"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={toogleCardView}
              />
            </div>
          </div>
          <button className="w-full bg-blue-600 p-5 rounded text-sm mt-4 text-white font-bold">
            Pay Now
          </button>
        </form>
      </div>
      <CardList cardsList={cardsList} />
    </div>
  );
};

export default Card;

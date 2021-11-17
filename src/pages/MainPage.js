import React, { Fragment, useState, useEffect } from "react";
import styled from "@emotion/styled";
import Formulario from "../components/Formulario";
import Popup from "../components/Popup";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
`;

const Panell = styled.div`
  padding: 1rem;
  border: 3px solid black;
  border-radius: 15px;
  width: 30%;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const MainPage = () => {
  const [total, setTotal] = useState(0);

  const [webPageSelected, setWebPageSelected] = useState(false);
  const [consultoriaSelected, setConsultoriaSelected] = useState(false);
  const [googleCampaignSelected, setGoogleCampaignSelected] = useState(false);

  // Quantity of pages & languages.

  const [quantityOfPages, setquantityOfPages] = useState(1);
  const [quantityOfLanguages, setquantityOfLanguages] = useState(0);
  const [suplements, setsuplements] = useState(0);

  const updateTotal = (value) => {
    setTotal((prev) => prev + value);
  };

  const handleClickWebPage = () => {
    webPageSelected ? updateTotal(-500) : updateTotal(500);
    setWebPageSelected(!webPageSelected);
  };

  const handleClickConsultoria = () => {
    consultoriaSelected ? updateTotal(-300) : updateTotal(300);
    setConsultoriaSelected(!consultoriaSelected);
  };

  const handleClickGoogle = () => {
    googleCampaignSelected ? updateTotal(-200) : updateTotal(200);
    setGoogleCampaignSelected(!googleCampaignSelected);
  };

  const increaseNumberPages = () => {
    setquantityOfPages((prev) => prev + 1);
  };

  const decreaseNumberPages = () => {
    setquantityOfPages((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return 1;
    });
  };

  const increaseNumberLanguages = () => {
    setquantityOfLanguages((prev) => prev + 1);
  };

  const decreaseNumberLanguages = () => {
    setquantityOfLanguages((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return 0;
    });
  };

  const [displayPopup, setDisplayPopup] = useState(false);

  const handleSetQuantityOfPages = (e) => {
    setquantityOfPages(parseInt(e.target.value));
  };

  const handleSetQuantityOfLanguages = (e) => {
    setquantityOfLanguages(parseInt(e.target.value));
  };

  // UseEffect for closing when cliked outside of the popup
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!e.target) {
      }
      setDisplayPopup(false);
    });
  });

  useEffect(() => {
    setsuplements(quantityOfLanguages * quantityOfPages * 30);
  }, [quantityOfPages, quantityOfLanguages]);

  // UseEffect to load localstorage.
  useEffect(() => {
    return (
      localStorage.setItem("WebPageSelected", webPageSelected),
      localStorage.setItem("consultoriaSelected", consultoriaSelected),
      localStorage.setItem("googleCampaignSelected", googleCampaignSelected),
      localStorage.setItem("quantityOfPages", quantityOfPages),
      localStorage.setItem("quantityOfLanguages", quantityOfLanguages)
    );
  }, [
    webPageSelected,
    consultoriaSelected,
    googleCampaignSelected,
    quantityOfLanguages,
    quantityOfPages,
  ]);

  return (
    <Fragment>
      <h1>Main Page</h1>

      <Formulario />
      <p>Select the service you are interested in:</p>
      <Div>
        <input type="checkbox" onClick={handleClickWebPage} />
        <p> Web Page (500€) </p>
        {webPageSelected && (
          <Panell>
            <p>
              Number of pages:
              <button value={quantityOfPages} onClick={increaseNumberPages}>
                +
              </button>
              <input
                type="number"
                value={quantityOfPages}
                min="1"
                onChange={handleSetQuantityOfPages}
              />
              <button value={quantityOfPages} onClick={decreaseNumberPages}>
                -
              </button>
              <button onClick={() => setDisplayPopup(true)}> i</button>
              {
                <Popup trigger={displayPopup} setTrigger={setDisplayPopup}>
                  <p>You are required to select a number of pages.</p>
                </Popup>
              }
            </p>
            <p>
              Number of Languages:
              <button
                value={quantityOfLanguages}
                onClick={increaseNumberLanguages}
              >
                +
              </button>
              <input
                type="number"
                value={quantityOfLanguages}
                min="0"
                onChange={handleSetQuantityOfLanguages}
              />
              <button
                value={quantityOfLanguages}
                onClick={decreaseNumberLanguages}
              >
                -
              </button>
              <button onClick={() => setDisplayPopup(true)}> i</button>
              {
                <Popup trigger={displayPopup} setTrigger={setDisplayPopup}>
                  <p>You are required to select a number of languages.</p>
                </Popup>
              }
            </p>
          </Panell>
        )}
      </Div>

      <Div>
        <input type="checkbox" onClick={handleClickConsultoria} />{" "}
        <p> CEO Consulting (300€)</p>{" "}
      </Div>
      <Div>
        <input type="checkbox" onClick={handleClickGoogle} />{" "}
        <p> Google Ads Campaign (200€) </p>{" "}
      </Div>

      <p>Precio:{total + suplements}€</p>
    </Fragment>
  );
};
export default MainPage;

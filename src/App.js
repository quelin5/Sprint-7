import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

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
  width: 25%;
`;

function App() {
  const [total, setTotal] = useState(0);

  const [webPageSelected, setWebPageSelected] = useState(false);
  const [consultoriaSelected, setConsultoriaSelected] = useState(false);
  const [googleCampaignSelected, setGoogleCampaignSelected] = useState(false);

  // Cantidad de páginas y de idiomas:

  const [cantidadPaginas, setCantidadPaginas] = useState(0);
  const [cantidadIdiomas, setCantidadIdiomas] = useState(0);
  const [suplementos, setSuplementos] = useState(0);

  const updateTotal = (value) => {
    setTotal((prev) => prev + value);
  };

  const updateNumeroPaginas = (e) => {
    const value = parseInt(e.target.value);
    setCantidadPaginas(value);
    setSuplementos(value * cantidadIdiomas * 30);
  };

  const updateNumeroIdiomas = (e) => {
    const value = parseInt(e.target.value);
    setCantidadIdiomas(value);
    setSuplementos(value * cantidadPaginas * 30);
  };

  const handleClickWebPage = () => {
    webPageSelected ? updateTotal(-500) : updateTotal(500);
    setWebPageSelected(!webPageSelected);
    // SetTotal(total + 500 + (cantidadIdiomas + cantidadPaginas) * 30)
    // Si cambia el número de páginas o idiomas, que se renderice de nuevo. ¿cómo?
    //Mostrar Panell cuando se hace click: webPageSelected(true)
  };

  const handleClickConsultoria = () => {
    consultoriaSelected ? updateTotal(-300) : updateTotal(300);
    setConsultoriaSelected(!consultoriaSelected);
  };

  const handleClickGoogle = () => {
    googleCampaignSelected ? updateTotal(-200) : updateTotal(200);
    setGoogleCampaignSelected(!googleCampaignSelected);
  };

  const decreaseNumber = () => {
    //pillar numero de paginas o idiomas y restar
    setCantidadPaginas(cantidadPaginas - 1);
  };

  // RETURN

  return (
    <Fragment>
      <h1>Sprint-7</h1>
      <p>¿Qué quieres hacer?</p>
      <Div>
        <input type="checkbox" onClick={handleClickWebPage} />
        <p> Una página web (500€) </p>
        {webPageSelected && (
          <Panell>
            <p>
              Número de páginas:
              <button> + </button>
              <input
                type="text"
                min="0"
                value="0"
                onChange={updateNumeroPaginas}
              />
              <button onClick={decreaseNumber}> - </button>
            </p>
            <p>
              {" "}
              Número de idiomas:
              <button> + </button>
              <input
                type="text"
                min="0"
                value="0"
                onChange={updateNumeroIdiomas}
              />
              <button onClick={decreaseNumber}> - </button>
            </p>
          </Panell>
        )}
      </Div>

      <Div>
        <input type="checkbox" onClick={handleClickConsultoria} />{" "}
        <p> Una consultoria SEO (300€)</p>{" "}
      </Div>
      <Div>
        <input type="checkbox" onClick={handleClickGoogle} />{" "}
        <p> Una campaña de Google Ads (200€) </p>{" "}
      </Div>

      <p>Precio:{total + suplementos}€</p>
    </Fragment>
  );
}

export default App;

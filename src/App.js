import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Popup from "./components/Popup";
//import Formulario from "./components/Formulario";
import MainPage from "./pages/MainPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

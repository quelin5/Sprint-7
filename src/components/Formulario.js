import React, { Fragment } from "react";

const Formulario = () => {
  const createDate = () => {
    return new Date();
  };
  return (
    <Fragment>
      <h2>Clients</h2>
      <form>
        <label> Client's name </label>
        <input type="text" name="" />
        <label> Budget's name </label>
        <input type="text" />
        <label> Date</label>
        <input value={createDate()} />
      </form>
    </Fragment>
  );
};

export default Formulario;

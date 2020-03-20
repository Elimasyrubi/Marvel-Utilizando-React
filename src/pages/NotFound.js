import React from "react";
import "./styles/NotFoundPage.scss";
import Back from "../images/back.svg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="fondo">
      <Link className="volver" to="/">
        <img src={Back} alt="icono Back" />
      </Link>
      <div>
        <p className="error">Error 404</p>
        <p className=" mensaje">Pagina No encontrada</p>
      </div>
    </div>
  );
}

export default NotFound;

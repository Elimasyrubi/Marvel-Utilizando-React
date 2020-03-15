import React from "react";
import "./styles/Details.scss";
import Comic from "../images/comic.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="background ">
        <div className="container">
          <div className="details">
            <img src={Comic} alt="comiic"  className="details_image"/>
            <div>
              <h2> Nombre de la revista</h2>
              <p>Publicacion</p>
              <p>Descripcion</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

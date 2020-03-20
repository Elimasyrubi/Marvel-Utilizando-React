import React, { Component } from "react";
import Logo from '../images/marvelLogo.png'
import "./styles/Loader.scss";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <img className="loading_logo" src={Logo} alt="logo marvel" />
      </div>
    );
  }
}

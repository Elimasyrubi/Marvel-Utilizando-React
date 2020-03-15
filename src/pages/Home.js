import React from "react";
import "./styles/Home.scss";
import Card from "../components/Card";

class Home extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="card_container container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;

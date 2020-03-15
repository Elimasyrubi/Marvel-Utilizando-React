import React from "react";

import "./styles/Home.scss";
import Card from "../components/Card";
import Modal from "../components/Modal";
import SearchResult from "../components/SearchResult";

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
   {/*      <button > Open Modal</button> */}
       <Modal isOpen={false}>
        <h2 className="modal_tittle">Spiderman</h2>
        <SearchResult/>
       </Modal>
      </div>
    );
  }
}

export default Home;

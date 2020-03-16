import React from "react";

import "./styles/Home.scss";
import Card from "../components/Card";
import LoadingPage from "../components/LoadingPage";
import Modal from "../components/Modal";
import SearchResult from "../components/SearchResult";


class Home extends React.Component {
  state = {
    loading:true,
    comicData: {
      data: {
        results: []
      }
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=b880453eb1ab8bd6dab05e2d968864ad"
    );
    const data = await response.json();
    this.setState({ comicData: data, loading: false });
    
  };

  render() {
    if(this.state.loading){
      return <LoadingPage/>
    }
    return (
      <div className="background">
        <div>
          <Card data={this.state.comicData.data.results} /> 
        </div>


        <Modal isOpen={false}>
          <h2 className="modal_tittle">Spiderman</h2>
          <SearchResult />
        </Modal>
      </div>
    );
  }
}

export default Home;

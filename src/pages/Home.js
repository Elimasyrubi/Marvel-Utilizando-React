import React from "react";

import "./styles/Home.scss";
import Card from "../components/Card";
import Modal from "../components/Modal";
import SearchResult from "../components/SearchResult";
import StarIcon from "../images/star.svg";

class Home extends React.Component {
  state = {
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
    this.setState({ comicData: data });
    console.log(this.state.comicData.data.results[0].name);
  };

  render() {
    return (
      <div className="background">
        <div className="card_container container">
          {/* <Card /> */}
          <ul className="card">
            {this.state.comicData.data.results.map(character => (
              <li key={character.id}>
                <img
                  className="card_image"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt="Super Heroe"
                />
                <a className="card_icon" href="#">
                  <img src={StarIcon} className="card_icon" alt="StarIcon" />
                </a>
            <p className="card_name">{character.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/*     <ul>
            {this.state.comicData.data.results.map(character => (
              <li key={character.id}>
                <p>{character.name}</p>
              </li>
            ))}
          </ul>

          <div className="card">
            <img className="card_image" src={SuperHeroe} alt="Super Heroe" />
            <a className="card_icon" href="#">
              <img src={StarIcon} className="card_icon" alt="StarIcon" />
            </a>
            <p className="card_name">3d man</p>
          </div>
        </div>
 */}
        <Modal isOpen={false}>
          <h2 className="modal_tittle">Spiderman</h2>
          <SearchResult />
        </Modal>
      </div>
    );
  }
}

export default Home;

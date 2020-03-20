import React from "react";
import "./styles/Details.scss";
import { Link } from "react-router-dom";
import Back from "../images/back.svg";
import Loader from "../components/Loader";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    idhero: undefined,
    name: undefined,
    image: undefined,
    comicsList: [],
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
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b880453eb1ab8bd6dab05e2d968864ad&hash=e1d9463a032f3aef03c2129907e924c7"
      );
      const data = await response.json();
      this.setState({ comicData: data, loading: false });
      const Datos = this.state.comicData.data.results;
      const idPage = this.props.match.params.badgeId;

      let i = 0;
      for (i = 0; i < Datos.length; i++) {
        if (idPage == this.state.comicData.data.results[i].id) {
          this.setState({
            idhero: i,
            name: Datos[i].name,
            image: `${Datos[i].thumbnail.path}.${Datos[i].thumbnail.extension}`,
            comicsList: Datos[i].comics.items
          });
        }
      }
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <React.Fragment className="background ">
        <div className="container">
          <Link className="volver" to="/">
            <img src={Back} alt="icono Back" />
          </Link>

          <div className="details">
            <img
              src={this.state.image}
              alt="comic"
              className="details_image"
              alt="hero"
            />
            <div>
              <h2 className="details_tittle">{this.state.name}</h2>
              <div className="details_comics">
                <p className="comics_tittle">
                  Lista de Comics de este personaje{" "}
                </p>
                <ul className="comics_list">
                  {this.state.comicsList.map((heroe, index) => (
                    <li key={index}>
                      <p className="comics_items">{heroe.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

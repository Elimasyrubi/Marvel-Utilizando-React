import React from "react";

import "./styles/Home.scss";
import Card from "../components/Card";
import LoadingPage from "../components/LoadingPage";
import Modal from "../components/Modal";
import SearchResult from "../components/SearchResult";
import NotFound from "../components/NotFound";
import {Link} from 'react-router-dom'
import Logo from '../images/marvelLogo.png'
import SearchIcon from '../images/search.svg'
import StarIcon from '../images/star.svg'



class Home extends React.Component {
  state = {
    query: '',
    loading: false,
    error: null,
    modalIsOpen:false,
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
        "https://gateway.marvel.com:443/v1/public/characters?apikey=b880453eb1ab8bd6dab05e2d968864ad"
      );
      const data = await response.json();
      this.setState({ comicData: data, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal= e =>{
    this.setState({modalIsOpen:true})
  }
  handleCloseModal= e =>{
    this.setState({modalIsOpen:false})
  }

  render() {
    
    const characters =  this.state.comicData.data.results
    const filter = characters.filter(characters =>{
      return characters.name.toLowerCase().includes(this.state.query.toLowerCase());
    })


    if (this.state.loading) {
      return <LoadingPage />;
    }
    if (this.state.error) {
      return `error: ${this.state.error} `;
    }

    if (filter.length === 0) {
      return (
        <div>
          <div className="Navbar">
          <Link to="/">
            <img className="Navbar_logo" src={Logo} alt="logo marvel" />
          </Link>
          <hr className="Navbar_line" />
          <form>
            <button>
              <img src={SearchIcon} className="Navbar_icon" alt="SearchIcon" />
            </button>
            <input
            value={this.state.query}
            onChange={(e)=>{
              this.setState({query:e.target.value})
            }}
             type="text"
             placeholder="Buscar"
             className="Navbar_input" />
            <button>
              <img src={StarIcon} className="Navbar_icon" alt="StarIcon" />
            </button>
            <Link to="/list"> Detail </Link>
          </form>

          <hr className="Navbar_line" />
        </div>

          <NotFound/>
         
        </div>)}


    return (
      <div className="background">
        <div className="Navbar">
          <Link to="/">
            <img className="Navbar_logo" src={Logo} alt="logo marvel" />
          </Link>
          <hr className="Navbar_line" />
          <form>
            <button>
              <img src={SearchIcon} className="Navbar_icon" alt="SearchIcon" />
            </button>
            <input
            value={this.state.query}
            onChange={(e)=>{
              this.setState({query:e.target.value})
            }}
             type="text"
             placeholder="Buscar"
             className="Navbar_input" />
            <button>
              <img src={StarIcon} className="Navbar_icon" alt="StarIcon" />
            </button>
            <Link to="/list"> Detail </Link>
          </form>

          <hr className="Navbar_line" />
        </div>

          <Card data={filter} onOpenModal={this.handleOpenModal} />


        <Modal isOpen={this.state.modalIsOpen} onCloseModal={this.handleCloseModal}>
          <h2 className="modal_tittle">Spiderman</h2>
          <SearchResult />
        </Modal>
      </div>
    );
  }
}

export default Home;

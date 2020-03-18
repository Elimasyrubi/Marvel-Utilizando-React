import React from "react";
import "./styles/Details.scss";


class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    idhero: undefined,
    name:undefined,
    image:undefined,
    comicsList: [],
    comicData: {
      data: {
        results: []
      }
    }
  };

  //console.log(this.props.match.params.badgeId)
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
      const Datos = this.state.comicData.data.results;
      const idPage = this.props.match.params.badgeId;

      let i = 0;
      for (i = 0; i < Datos.length; i++) {
        if (idPage == this.state.comicData.data.results[i].id) {
          this.setState({ 
            idhero: i,
            name: Datos[i].name,
            image:`${Datos[i].thumbnail.path}.${Datos[i].thumbnail.extension}`,
            comicsList: Datos[i].comics.items
          });
      
          //`${character.thumbnail.path}.${character.thumbnail.extension}`
          console.log(this.state.idhero);
        }
      }
      console.log(Datos);
      console.log(this.state.comicsList);
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {

    return (
    
      <div className="background ">
        <div className="container">
          <div className="details">
            <img src={this.state.image} alt="comiic" className="details_image"  alt={this.state.name}/>
            <div>
              <h2>{this.state.name}</h2>
           
           <div className="comics">
             <p>Comics donde ha estado {this.state.name} </p>



             <ul className="comics_list">
               {
               this.state.comicsList.map((heroe,index) => (
                 <li key={index}>
                   <p>{heroe.name}</p>
                 </li>
               )

               )
               }
             </ul>

           </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

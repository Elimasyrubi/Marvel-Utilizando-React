import React from "react";
import "./styles/Card.scss";
import StarIcon from "../images/star.svg";
import {Link} from 'react-router-dom'


class Card extends React.Component {

  render() {
    return (
      <ul className="card">
        {this.props.data.map(character => (
            
              <li  key={character.id}>
                <Link  to={`/list/${character.id}`}>
                <p className="card_name">{character.name}</p>
                </Link>
                <img className="card_image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                   <a  className="card_icon" href="/">
                  <img src={StarIcon} className="card_icon" alt="StarIcon" />
                </a> 
              </li>
            
        ))}
      </ul>
    );
  }
}

export default Card;

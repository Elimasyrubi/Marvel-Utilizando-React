import React from "react";
import "./styles/SearchResult.scss";
import Comic from "../images/marvelLogo.png";
import StarIcon from "../images/star.svg";


function SearchResult() {
    return (
        <React.Fragment className= "SearchResult_container">
            <img src={Comic} alt="marvel comic" className="SearchResult_image"/>
            <div className="SearchResult_description">
                <h3 className="SearchResult_tittle">Spiderman Comic <img src={StarIcon} alt="star icon" className="SearchResult_icon"/></h3>
                <p className="SearchResult_text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's sta</p>
            </div>
        </React.Fragment>
    )
}

export default SearchResult;
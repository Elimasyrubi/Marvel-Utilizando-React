import React from 'react'
import "./styles/Navbar.scss"
import Logo from '../images/marvelLogo.png'
import SearchIcon from '../images/search.svg'
import StarIcon from '../images/star.svg'

class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <img className="Navbar_logo" src={Logo} alt="logo marvel"/>
                <hr className="Navbar_line"/>
                <form>
                    <button><img src={SearchIcon} className="Navbar_icon" alt="SearchIcon"/></button>
                    <input type="text" placeholder="Buscar" className="Navbar_input"/>
                    <button><img src={StarIcon} className="Navbar_icon" alt="StarIcon"/></button>
                </form>
                <hr className="Navbar_line"/>
            </div>
        );
    }
}

export default Navbar;
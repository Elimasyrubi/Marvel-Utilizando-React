import React from 'react'
import "./styles/Navbar.scss"
import Logo from '../images/marvelLogo.png'

class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <img className="Navbar_logo" src={Logo} alt="logo marvel"/>
                <hr className="Navbar_line"/>
                <form>
                    <input type="text" placeholder="Buscar" className="Navbar_input"/>
                </form>
                <hr className="Navbar_line"/>
            </div>
        );
    }
}

export default Navbar;
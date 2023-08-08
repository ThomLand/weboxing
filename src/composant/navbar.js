import { Component } from "react";
import "./navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";


class Navbar extends Component {
  
 state = { clicked: false};
 handleClick = () =>{
  this.setState({ clicked: !this.state.clicked})}
  render() {
    return (

      <nav className="NavbarItems">
        <h1 className="navebar-logo">weboxing</h1>
                            {/**/}
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/*sers a voir l'etat de mon burger ouvrir ou fermer*/}
        <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
          {MenuItems.map((item, index) =>{
          return(   
              <li key={index}>
              <Link cllinkssNlinkme={item.cName}to={item.URL}>
              <i className={item.icon}></i>
              {item.title}
              </Link>
              </li>
              )
              })} 
            </ul>
          </nav>
        )}}

export default Navbar;
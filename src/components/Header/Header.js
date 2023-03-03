import "./Header.css";
import img from "../../assets/img/digibootcamp.jpg";
import menu from "../../assets/img/menu.svg";

import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuButtonClick(){
        setMenuOpen(!menuOpen);
    }
    return (
        <header>
            <picture className="header__logo">
                <img src={img} alt=""/>
                <span>DIGIBOOTCAMP</span>
            </picture>
            <nav className={`header__nav ${menuOpen ? "" : "header__nav--mobile-hidden"}`}>
                <ul>
                    <li>
                        <a href="#">
                            INICIO
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            SERVICES
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header__btn">
                <button className="button__sesion animate__animated animate__bounceInRight">
                    INICIAR SESION
                </button>
                <button className="button__menu" onClick={handleMenuButtonClick}> 
                    <img src={menu} alt=""/>
                </button>
            </div>
        </header>
    );
}

export default Header;

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
            <nav className="{`header__nav ${menuOpen ? '' : 'header__nav--mobile-hidden'}`}">
                <ul>
                    <li>
                        <a href="#">
                            INICIO
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            CAMPAMENTO
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            BOOTCAMPS
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            BOLETIN
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header__btn">
                <button className="button__sesion">
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

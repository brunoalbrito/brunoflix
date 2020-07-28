import React from 'react';
import Logo from '../../assets/img/Logo.png';
//import ButtonLink from './components/ButtonLink';
import './Menu.css';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo"/>
            </a>

            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;
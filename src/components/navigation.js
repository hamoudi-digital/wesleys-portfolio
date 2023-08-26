// src/components/Navigation.js
import React from 'react';
// import logo from '../assets/logo.png'
import { useEffect } from 'react';


function Navigation() {
    let activeMenu = false;

    const menuToggle = () => {
        activeMenu = !activeMenu;
        let navigation = document.getElementById('navigation');
        let mainMenu = document.getElementById('main-menu');
        if (activeMenu) {
            navigation.classList.add('active');
            mainMenu.classList.add('active');
        }
        else {
            navigation.classList.remove('active');
            mainMenu.classList.remove('active');
        }
    }
    const menuClick = () => {
        var navToggle = document.querySelector('#nav-toggle');
        navToggle.click();
    }
    return (
        <div className="navigation" id='navigation'>
            <div className="container main-nav">
                <div className="row">
                    <div className="col-4 d-flex justify-content-center flex-column">
                        <div className="name-wrap">
                            <a href="/" style={{color: '#000000'}}>
                                Test
                            </a>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center flex-column">
                        <div className="logo-container text-center">
                            <a href='/'>
                                {/* <img src={logo} className="logo"/> */}
                            </a>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center flex-column">
                        <div className='toggle-container text-right'>
                            <div id='nav-toggle' className='nav-toggle' onClick={menuToggle} >
                                <div className="bar top"></div>
                                <div className="bar middle"></div>
                                <div className="bar bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-menu" id='main-menu'>
                <ul>
                    <li>
                        <a href='#about' onClick={menuClick}>About</a>
                    </li>
                    <li>
                        <a href='/' onClick={menuClick}>Portfolio</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={menuClick}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;


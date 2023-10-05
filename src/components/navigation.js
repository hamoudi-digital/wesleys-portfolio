// src/components/Navigation.js
import React from 'react';


function Navigation() {
    let activeMenu = false;

    const menuToggle = () => {
        activeMenu = !activeMenu;
        let navigation = document.getElementById('navigation');
        let mainMenu = document.getElementById('mobile-menu');
        if (activeMenu) {
            let docHeight = Math.max(document.body.getBoundingClientRect().height, document.documentElement.getBoundingClientRect().height);
            document.querySelector(':root').style.setProperty('--doc-height', docHeight - 173.5 + 'px');
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
        <div className="section navigation" id='navigation'>
            <div className="container main-nav">
                <div className="row">
                    <div className="col-md-6 col-8">
                        <div className="name-wrap">
                            <a href="#">
                                <p className='logo'>Wesley Lewis</p>
                                <p className='sub'>Saxophonist / Composer / Arranger</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-4">
                        <div className="main-menu" id='main-menu'>
                            <ul>
                                <li>
                                    <a href='#about'>About</a>
                                </li>
                                 <li>
                                    <a href='#media'>Media</a>
                                </li>
                                <li>
                                    <a href='#gallery'>Gallery</a>
                                </li>
                                <li>
                                    <a href='#contact'>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mobile-menu" id='mobile-menu'>
                            <div className='toggle-container text-right'>
                                <div id='nav-toggle' className='nav-toggle' onClick={menuToggle} >
                                    <div className="bar top"></div>
                                    <div className="bar middle"></div>
                                    <div className="bar bottom"></div>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <a href='#about' onClick={menuClick}>About</a>
                                </li>
                                 <li>
                                    <a href='#media' onClick={menuClick}>Media</a>
                                </li>
                                <li>
                                    <a href='#gallery' onClick={menuClick}>Gallery</a>
                                </li>
                                <li>
                                    <a href='#contact' onClick={menuClick}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;


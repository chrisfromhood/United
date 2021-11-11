import React from "react";
import "./_header.css";

function Header() {
    return (

        <header className="global-header">
            <div className="header-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-auto col-sm-12 align-self-center">
                            <a className="branding-logo" href="/">
                                <img src="https://cdn.searchkings.ca/img/assets/logo-8d549571fa.png" alt="Jordan Air Quality Air & Heating and Energy Solutions Logo" className="header-logo" />
                            </a>
                        </div>
                        <div className="col align-self-center">
                            <div className="header-info">
                                <div className="info-items place">
                                    <span className="icon location">
                                        <span className="fas fa-location-arrow"></span>
                                    </span>
                                    <span className="text">
                                        <span className="sub-text">Our Location</span> <br /> Local Service </span>
                                </div>
                                <a className="info-items phone" href="tel:706-995-7485">

                                    <span className="icon"><span className="fas fa-phone-alt"></span> </span>
                                    <span className="text">
                                        <span className="sub-text">
                                            CALL US NOW</span> <br /> 706-995-7485  </span>

                                </a>
                                <button type="button" className="btn-oval">EMERGENCY SERVICE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="row justify-content-center">

                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="nav navbar-nav mx-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SALES
                                            <span className="fas fa-chevron-down"></span>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item nav-link" href="http://localhost:3000/ac-installations">AIR CONDITIONER INSTALLATIONS</a>
                                            <a className="dropdown-item nav-link" href="/">FURNACE INSTALATIONS</a>

                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            REPAIRS
                                            <span className="fas fa-chevron-down"></span>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item nav-link" href="http://localhost:3000/ac-installations">AIR CONDITIONERS</a>
                                            <a className="dropdown-item nav-link" href="/">FURNACES</a>
                                            <a className="dropdown-item nav-link" href="/">Heat pumps</a>
                                            <a className="dropdown-item nav-link" href="/">Ductless Systems</a>
                                            <a className="dropdown-item nav-link" href="/">Air Handlers</a>
                                            <a className="dropdown-item nav-link" href="/">Indoor Air Quality</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            PLUMBING
                                            <span className="fas fa-chevron-down"></span>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item nav-link" href="/">General plumbing</a>
                                            <a className="dropdown-item nav-link" href="/">Toilet Repair</a>
                                            <a className="dropdown-item nav-link" href="/">Faucet & sink repair</a>
                                            <a className="dropdown-item nav-link" href="/">Shower repair</a>
                                            <a className="dropdown-item nav-link" href="/">Leak Detection</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="http://localhost:3000/promotions">Promotions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Financing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="http://localhost:3000/about-us">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="http://localhost:3000/contact-us">Contact us</a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header >
    );
}
export default Header;
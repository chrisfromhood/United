import React from "react";
import "./_header.css";

function Header() {
    return (

        <header className="global-header">
            <div className="header-top">
                <div className="container">
                    <div className="row">
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
                                <div className="info-items phone">
                                    <a href="tel:706-995-7485" className="phone">
                                        <span className="icon"><span className="fas fa-phone-alt"></span> </span>
                                        <span className="text"> <span className="sub-text">Call us now</span> <br /> 706-995-7485 </span>
                                    </a>
                                </div>
                                <button type="button" className="btn-oval">EMERGENCY SERVICE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul className="nav navbar-nav mx-auto">
                                <li className="nav-item dropdown mr-4">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        SALES
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item nav-link" href="http://localhost:3000/ac-installations">AIR CONDITIONER INSTALLATIONS</a>
                                        <a className="dropdown-item nav-link" href="/">FURNACE INSTALATIONS</a>

                                    </div>
                                </li>
                                <li className="nav-item dropdown mr-4">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        REPAIRS
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/">Action</a>
                                        <a className="dropdown-item" href="/">Another action</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown mr-4">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        PLUMBING
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/">Action</a>
                                        <a className="dropdown-item" href="/">Another action</a>
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

        </header >
    );
}
export default Header;
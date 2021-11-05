import "./_footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="general-info row">
                        <div className="col-lg-auto col-sm-12 align-self-center">
                            <div className="left">
                                <a className="branding-logo" href="/" >
                                    <img src="https://cdn.searchkings.ca/img/assets/logo-white-ff53a61ba2.png" alt="Jordan Air Quality Air & Heating and Energy Solutions Logo" className="header-logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col align-self-center">
                            <div className="right">
                                <div className="info-items place">
                                    <span className="icon location"><span className="fas fa-location-arrow"></span></span>
                                    <span className="text">
                                        <span className="sub-text">Our Location</span> <br /> Local Service </span>
                                </div>
                                <div className="info-items phone">
                                    <a href="tel:706-995-7485" className="phone">
                                        <span className="icon"><span className="fas fa-phone-alt"></span> </span>
                                        <span className="text"> <span className="sub-text">Call us now</span> <br /> 706-995-7485 </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <span className="copyright">Copyright © 2021
                        <a href="/" title=" Jordan Air Quality Air &amp; Heating and Energy Solutions">Jordan Air Quality Air &amp; Heating and Energy Solutions</a>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>


    );
}
export default Footer;
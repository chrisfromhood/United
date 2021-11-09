import "../BaseContent/_BaseContent.css";
import "../CTA/Resources";
import Resources from "../CTA/Resources";

function BaseContent() {
    return (
        <div>
            <section className="services-info">
                <div className="container">
                    <div className="box-wrapper col-12">
                        <div className="h2-text"><strong>24/7 EXPERT SERVICES IN LOCAL SERVICE</strong></div>
                        <div className="row align-items-start">

                            <div className="col-lg-3 col-6 item">
                                <div className="card-style">
                                    <a className="service-link" href="/">
                                        <span className="overlay"></span>
                                        <img src="https://cdn.searchkings.ca/img/services/trane-furnace-c1e46c4293.jpg" className="card-img-top " alt="..." />
                                        <h4 className="service-title">Furnances</h4>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 item">
                                <div className="card-style">
                                    <a className="service-link" href="/">
                                        <span className="overlay"></span>
                                        <img src="https://cdn.searchkings.ca/img/services/trane-air-quality-6e8f047f16.jpg" className="card-img-top " alt="..." />
                                        <h4 className="service-title">Air quality</h4>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 item">
                                <div className="card-style">
                                    <a className="service-link" href="/">
                                        <span className="overlay"></span>
                                        <img src="https://cdn.searchkings.ca/img/services/trane-ac-6d23ab4053.jpg" className="card-img-top " alt="..." />
                                        <h4 className="service-title">Air Condition</h4>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 item">
                                <div className="card-style">
                                    <a className="service-link" href="/">
                                        <span className="overlay"></span>
                                        <img src="https://cdn.searchkings.ca/img/services/trane-water-heaters-315d322903.jpg" className="card-img-top " alt="..." />
                                        <h4 className="service-title">Water heaters</h4>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="why-us py-0">
                <div className="container-fluid why-us-bg-color">
                    <div className="row">
                        <div className="col-lg-6 px-0">
                            <div className="bg-holder"></div>
                        </div>
                        <div className="col-lg-6"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6"></div>
                                <div className="col-lg-6">
                                    <div className="right-side-text">
                                        <div className="why-us_heading">Why Choose us</div>
                                        <p className="why-us_p">Jordan Air provides residential heating ventilation, plumbing and air conditioning services. We have provided quality HVAC services and repairs to our community since 1993. </p>
                                        <p className="why-us_p">We offer a wide range of services and products that allow us to maximize our customers' comfort and their homes' efficiency. We specialize in plumbing repair, installation, duct cleaning, HVAC repair, emergency service, and routine maintenance. We also offer weekend and emergency services. </p>
                                        <p className="why-us_p">
                                            <a href="/about-us/">LEARN MORE ABOUT US
                                                <span className="icon fa fa-angle-double-right"></span>
                                            </a>
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-image">
                <div className="testimonial-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-2 icon text-center align-self-center">
                            <span className="fas fa-quote-left"></span>
                        </div>
                        <div className="col-12 col-md-6 col-lg-7 quote align-self-center">
                            <blockquote className="blockquote">
                                <p className="user-quote">"I was very pleased with Zack Goodman. He was professional and thorough, and he offered helpful suggestions. I’m very pleased with your service. The maintenance check every six months gives me peace of mind that my systems are working properly."</p>
                                <footer className="blockquote-footer">
                                    <cite title="Source Title">Jacquelin H.</cite>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 text-center btn-cta align-self-center">
                            <a href="/about-us#customer-reviews" className="btn-oval">READ MORE
                                <span className="fa fa-angle-double-right"></span></a>
                        </div>
                    </div>
                </div>
            </div>

            <Resources></Resources>

        </div>
    );
}
export default BaseContent;
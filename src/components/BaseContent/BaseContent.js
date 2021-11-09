import "../BaseContent/_BaseContent.css";

function BaseContent() {
    return (
        <div>
            <section className="services-info">
                <div className="container">
                    <div className="box-wrapper col-12">
                        <div className="h2-text"><strong>24/7 EXPERT SERVICES IN LOCAL SERVICE</strong></div>
                        <div className="row align-items-start">
                            <div className="col-lg-3 col-6 item">
                                <div className="card my-5">
                                    <img src="https://cdn.searchkings.ca/img/services/trane-furnace-c1e46c4293.jpg" className="card-img-top " alt="..." />
                                    <div className="card-body bg-success ">
                                        <h4 className="card-title font-weight-bold text-center text-uppercase">Furnances</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 item">
                                <div className="card my-5">
                                    <img src="https://cdn.searchkings.ca/img/services/trane-air-quality-6e8f047f16.jpg" className="card-img-top " alt="..." />
                                    <div className="card-body bg-success ">
                                        <h4 className="card-title font-weight-bold text-center text-uppercase">Air quality</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 item">
                                <div className="card my-5">
                                    <img src="https://cdn.searchkings.ca/img/services/trane-ac-6d23ab4053.jpg" className="card-img-top " alt="..." />
                                    <div className="card-body bg-success ">
                                        <h4 className="card-title font-weight-bold text-center text-uppercase">Air Condition</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 item">
                                <div className="card my-5">
                                    <img src="https://cdn.searchkings.ca/img/services/trane-water-heaters-315d322903.jpg" className="card-img-top " alt="..." />
                                    <div className="card-body bg-success ">
                                        <h4 className="card-title font-weight-bold text-center text-uppercase">Water heaters</h4>
                                    </div>
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
                        <div className="col-lg-6">

                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                </div>
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


            <section className="resources-section">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col badges align-self-center text-center">
                            <img data-src="https://cdn.searchkings.ca/img/badges/bbb-a-plus-v-416c877c89.png" alt="Better Business Bureau" src="https://cdn.searchkings.ca/img/badges/bbb-a-plus-v-416c877c89.png" data-was-processed="true" />
                            <img data-src="https://cdn.searchkings.ca/img/badges/home-advisor-1ca28017c0.png" alt="Home Advisor" src="https://cdn.searchkings.ca/img/badges/home-advisor-1ca28017c0.png" data-was-processed="true" />
                            <img data-src="https://cdn.searchkings.ca/img/badges/super-service-c37e073c9c.png" alt="" src="https://cdn.searchkings.ca/img/badges/super-service-c37e073c9c.png" data-was-processed="true" />
                            <img data-src="https://cdn.searchkings.ca/img/badges/facebook-reviews-f8f17ebab9.png" alt="" src="https://cdn.searchkings.ca/img/badges/facebook-reviews-f8f17ebab9.png" data-was-processed="true" />
                            <img data-src="https://cdn.searchkings.ca/img/badges/trane-comfort-specialist-shield-539c7f9f8b.png" alt="Trane Comfort Specialist" src="https://cdn.searchkings.ca/img/badges/trane-comfort-specialist-shield-539c7f9f8b.png" data-was-processed="true" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default BaseContent;
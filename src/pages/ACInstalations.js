import "./_ac_installations.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function ACInstalations() {
    return (
        <div>
            <Header></Header>

            <div className="content">
                <div className="full-inner-banner">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-12 align-self-center">
                                <h1>Looking at <strong>New cooling</strong> Options? </h1>
                                <p>We'll help you find the right air conditioner for your needs.</p>
                                <div className="hero-promo">
                                    <span className="h2">Free 1 year maintenance with new installation of a complete system
                                        <sup>*</sup></span>
                                </div>
                                <a className="full-inner-slab-button" href="http://localhost:3000/contact-us">
                                    <span className="text">Speak with a home comfort specialist to learn more</span>
                                    <span className="icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="full-inner-content container">
                    <div className="post-content">
                        <div className="post-header">
                            <h2>Learn about your options</h2>
                            <p>Did you know the average lifespan of a home air conditioner is 12-15 years? If your unit is approaching or has exceeded this time frame, you are likely considering a new HVAC system. Learn how we can help you save with our rebates and special offers.</p>
                        </div>
                        <div className="tab-section">
                            <ul className="nav nav-justified">
                                <li className="nav-item">
                                    <a href="#savings-offers" className="nav-link" data-toggle="pill" aria-controls="savings-offers" aria-selected="true">Savings & Free Offers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#warranty-maintenance" className="nav-link show" data-toggle="pill" aria-controls="warranty-maintenance" aria-selected="false">Warranty Maintenance</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#specs-info" className="nav-link active show" data-toggle="pill" aria-controls="specs-info" aria-selected="false">Savings & Free Offers</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-panel show" id="savings-offers">
                                    <img data-src="https://cdn.searchkings.ca/img/post-inner-full/savings-free-offers-tab-4b7dcd06eb.jpg" className="img-fluid tab-image lazy loaded" alt="Air Conditioner Installations" src="https://cdn.searchkings.ca/img/post-inner-full/savings-free-offers-tab-4b7dcd06eb.jpg" data-was-processed="true" />
                                    <p>Your air conditioner is a big investment. We understand that making the right decisions today are crucial to your long-term home comfort.</p>
                                    <p>Here are some of our incentives:</p>
                                    <div className="jumbotron big-list">
                                        <ul className="list fa-ul">
                                            <li><span className="fa-li fas fa-toolbox"></span>1 Year Free Maintenance</li>
                                            <li><span className="fa-li fas fa-box"></span>1 Year Free Filters</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-panel show" id="warranty-maintenance"></div>
                                <div className="tab-panel active show" id="specs-info"></div>
                            </div>
                        </div>
                    </div>
                    <div className="post-end">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-12 align-self-center">
                                <span className="h3">Start Saving Today</span>
                            </div>
                            <div className="col-xl-8 col-12 align-self-center">
                                <a href="tel:706-995-7485" className="full-inner-slab-button left">
                                    <span className="text">706-995-7485</span>
                                    <span className="icon circle">
                                        <span className="fas fa-phone"></span>
                                    </span>
                                </a>
                                <span className="or">OR</span>
                                <a data-toggle="collapse" href="#collapseForm" aria-expanded="false" role="button" aria-controls="collapseForm" className="full-inner-slab-button right collapsed">
                                    <span className="text">Send Us a Message</span>
                                    <span className="icon circle">
                                        <span className="fas close-arrow fa-arrow-right"></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="collapse form-wrapper">

                        </div>

                    </div>
                    <div className="full-inner-testimonial">
                        <div className="row">
                            <div className="col-xl-4 col-12 align-self-end order-xl-2">
                                <div className="image-wrapper">
                                    <a href="/">
                                        <img className="google-review-badge" src="https://cdn.searchkings.ca/img/post-inner-full/google-reviews-296a53feb5.png" alt="Google Review" />
                                    </a>
                                    <img className="testimonial-family" src="https://cdn.searchkings.ca/img/post-inner-full/testimonial-family-f3a6d8ac67.png" alt="Testimonial Family" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-12 align-self-center order-xl-1">
                                <div id="testimonial-carousel-indicators" className="carousel slide" data-interval="false">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <h3 className="name">Jacquelin H.</h3>
                                            <p>I was very pleased with Zack Goodman. He was professional and thorough, and he offered helpful suggestions. I’m very pleased with your service. The maintenance check every six months gives me peace of mind that my systems are working properly.</p>
                                            <div className="rating">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                            </div>
                                        </div>
                                        <div className="carousel-item ">
                                            <h3 className="name">Rebel S.</h3>
                                            <p>Absolutely wonderful! Wyatt and Jeremiah were professional, efficient, polite and I absolutely recommended Jordan Air.</p>
                                        </div>
                                        <div className="carousel-item">
                                            <h3 className="name">Pamela H..</h3>
                                            <p>Great service. Tehnicians very knowledgeable!</p>
                                        </div>
                                    </div>
                                    <ol className="carousel-indicators">
                                        <li data-target="#testimonial-carousel-indicators" data-slide-to="0" className=""></li>
                                        <li data-target="#testimonial-carousel-indicators" data-slide-to="1" className=""></li>
                                        <li data-target="#testimonial-carousel-indicators" data-slide-to="2" className="active"></li>
                                    </ol>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
export default ACInstalations;
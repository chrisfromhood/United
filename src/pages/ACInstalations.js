import "./_ac_installations.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Resources from "../components/CTA/Resources";

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
                                    <span className="icon fas fa-arrow-circle-right"></span>
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
                                    <a className="nav-link active show" href="#savings-offers" data-toggle="pill" aria-controls="savings-offers" aria-selected="true">Savings & Free Offers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link show" href="#warranty-maintenance" data-toggle="pill" aria-controls="warranty-maintenance" aria-selected="false">Warranty Maintenance</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#specs-info" data-toggle="pill" aria-controls="specs-info" aria-selected="false">Air Conditioner Specifications</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane show active" id="savings-offers">
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
                                <div className="tab-pane show" id="warranty-maintenance">
                                    <img data-src="https://cdn.searchkings.ca/img/post-inner-full/ac-maintenance-tab-a6ac158200.jpg" className="img-fluid tab-image lazy loaded" alt="Air Conditioner Installations" src="https://cdn.searchkings.ca/img/post-inner-full/ac-maintenance-tab-a6ac158200.jpg" data-was-processed="true" />
                                    <p>To protect you from surprise breakdowns and costly repairs, we provide a comprehensive maintenance package backed up by both parts &amp; labor warranties.</p>
                                    <div className="jumbotron big-list">
                                        <ul className="list fa-ul">
                                            <li><span className="fa-li fas fa-toolbox"></span>1-year Free Maintenance Package with New Installation</li>
                                        </ul>
                                    </div>
                                    <h3 className="highlight">What's included in your 1-year complimentary maintenance package:</h3>
                                    <div className="jumbotron">
                                        <div className="list-items">
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <div className="list fa-ul">
                                                        <li><span className="fa-li fas fa-check"></span><strong>Check fan control</strong></li>
                                                        <li><span className="fa-li fas fa-check"></span><strong>Ensure all safety controls are in working order</strong></li>
                                                        <li><span className="fa-li fas fa-check"></span><strong>Test your thermostat</strong></li>
                                                        <li><span className="fa-li fas fa-check"></span><strong>Review electrical voltage and amp draws</strong></li>
                                                        <li><span className="fa-li fas fa-check"></span><strong>Check carbon monoxide levels</strong></li>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <div className="list fa-ul">
                                                        <li><span className="fa-li fas fa-check"></span><strong>Inspect air filters</strong></li>
                                                        <li><span className="fa-li fas fa-check"></span><strong>Adjust airflow for proper temperature changes</strong></li>
                                                        <li><span className="fa-li fas fa-check"></span><strong>Clean flame sensor if required</strong></li>
                                                        <li><span className="fa-li fas fa-check"></span><strong>Adjust gas pressure</strong></li>
                                                        <li><span className="fa-li fas fa-check"></span><strong>Monitor the system for optimal performance</strong></li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Regular air conditioner tune-ups and safety checks will ensure your system is running efficiently, saving you money on monthly cooling bills.</p>
                                    <p>A thorough maintenance plan completed by licensed and certified technicians also secures the longevity of your air conditioner, providing you peace-of-mind.</p>
                                </div>
                                <div className="tab-pane show" id="specs-info">
                                    <img data-src="https://cdn.searchkings.ca/img/post-inner-full/ac-specs-tab-064df7bf1f.jpg" className="img-fluid tab-image lazy loaded" alt="Air Conditioner Installations" src="https://cdn.searchkings.ca/img/post-inner-full/ac-specs-tab-064df7bf1f.jpg" data-was-processed="true" />
                                    <h3>What size air conditioner do I need?</h3>
                                    <p>Choosing the right size air conditioner for your home can be stressful. There are many factors about your home that directly affect the performance, efficiency, and cost of an air conditioning system.</p>
                                    <p>An A/C that is too small can actually leave your home feeling clammy and uncomfortable, while a unit that is too large will cycle on and off frequently, wasting energy and costing you more on monthly bills.</p>
                                    <p>Don’t worry though; our certified technicians can help guide you through the process to find the best A/C size for your needs.</p>
                                    <h3>How we determine the right size air conditioner for your needs</h3>
                                    <p>As a general rule, you can multiply your home’s square footage by 25 to roughly estimate the size of air conditioner you require. On average a 2,500 sq/ft home needs a unit with 62,500 BUs, but there are many other factors that need to be considered, such as:</p>
                                    <div className="jumbotron big-list">
                                        <ul className="list fa-ul">
                                            <li><span className="fa-li fas fa-toolbox"></span>Age of Home</li>
                                            <li><span className="fa-li fas fa-toolbox"></span>Number of Windows</li>
                                            <li><span className="fa-li fas fa-toolbox"></span>Room Sizes</li>
                                            <li><span className="fa-li fas fa-toolbox"></span>Average Climate</li>
                                            <li><span className="fa-li fas fa-toolbox"></span>Building Insulation</li>
                                        </ul>
                                    </div>
                                    <p>Based on these factors and more, our experienced team of cooling technicians can determine the perfect size air conditioner for your home.</p>
                                    <h3>Why choose a high-efficiency air conditioner?</h3>
                                    <p>When we talk about a systems “efficiency” we’re talking about the amount of energy it uses. The more energy a system uses, the less efficient it becomes.</p>
                                    <p>An air conditioner with a high-efficiency rating will use less energy to cool down your home, leaving your monthly costs low and your comfort level high.</p>
                                    <p>Find out what size air conditioner you need by contacting our licensed and certified team of technicians.</p>
                                </div>

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
                                            <div className="rating">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <h3 className="name">Pamela H..</h3>
                                            <p>Great service. Tehnicians very knowledgeable!</p>
                                            <div className="rating">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                            </div>
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
                <Resources></Resources>
            </div>

            <Footer></Footer>
        </div>
    )
}
export default ACInstalations;
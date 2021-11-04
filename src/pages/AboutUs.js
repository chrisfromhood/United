import "./_about_us.css";
import Header from "../components/Header/Header";
import Repair from "../components/CTA/Repair";
import BaseContent from "../components/BaseContent/BaseContent";
import PostCTA from "../components/CTA/PostCTA";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
function AboutUs() {
    return (

        <div>
            <Header></Header>

            <div className="content">
                <div className="inner-page-header">
                    <div className="fill">
                        <div className="container">
                            <h1 className="title">About Us</h1>
                        </div>
                    </div>
                </div>
                <div className="inner-page-content container">
                    <div className="row">
                        <div className="col-lg-8 content-info">
                            <div className="post-header">
                                <div className="post-parallax">
                                    <img src="https://cdn.searchkings.ca/img/banner/about-us-c4c89c7a4c.jpg" alt="About us" />
                                </div>
                            </div>

                            <div className="post-content">

                                <p>Jordan Air Quality Air &amp; Heating and Energy Solutions is a full service HVAC company founded by Donnie and Carolyn Jordan in 1993. Donnie is a thinker, dreamer and problem solver; Carolyn is an organizer, planner and accounting whiz. Together they make the perfect business combo!</p>
                                <p>They employ technicians who are not only highly skilled and technically qualified, but who are also a pleasure to have in your home. They take pride in their work and always act in a professional and polite manner.</p>
                                <h2>12 REASONS TO CHOOSE JORDAN AIR</h2>
                                <p><strong>WE VALUE OUR CUSTOMERS.</strong> We acknowledge that without our customers, we would not be able to do what we do. Your comfort and happiness are of the highest importance to us.</p>
                                <p><strong>JORDAN AIR HAS BEEN SERVING</strong> the surrounding Athens areas since 1993. This means that we are familiar with the area and the needs of our customers.</p>
                                <p><strong>WE USE TOP QUALITY MATERIALS.</strong> We purchase only high quality products for service and installation, including Trane heating and cooling products.</p>
                                <p><strong>WE ARE A DRUG FREE WORKPLACE</strong> in the state of Georgia. This allows you to have a peace of mind when we are in your home.</p>
                                <p><strong>WE KEEP AN INVENTORY</strong> of hundreds of different parts to fit your specific unit. This saves you time and money.</p>
                                <p><strong>WE ARE MEMBERS</strong> of the Athens Clarke County, Oconee County, Madison County, Jackson County, Taliaferro County, Greene County, and Oglethorpe County Chambers of Commerce. Economic development and growth and service in your area are important to us.</p>
                                <p><strong>OUR TEAM</strong> is made up of skilled, certified professionals. You can rest assured that you are being well taken care of.</p>
                                <p><strong>OUR TRUCKS, TOOLS, AND FACILITY</strong> are of the highest quality. This allows us to easily get to your home and perform the job as quickly as possible.</p>
                                <p><strong>WE ABIDE BY THE RULES.</strong> Following all EPA laws is of the highest importance to us.</p>
                                <p><strong>WE ARE AN AWARD WINNING COMPANY.</strong></p>
                                <div className="jumbotron">
                                    <div className="list-items">
                                        <div className="list">
                                            <li>
                                                <span className="icon fa fa-check"></span>Trane SOAR Award- Trane's top dealer in Georgia 2015</li>
                                            <li>
                                                <span className="icon fa fa-check"></span>Trane Outstanding Performer Award 2014</li>
                                            <li>
                                                <span className="icon fa fa-check"></span>Trane Gold Club Award 2008, 2009, 2010</li>
                                            <li>
                                                <span className="icon fa fa-check"></span>Trane Comfort Specialist 2014</li>
                                            <li>
                                                <span className="icon fa fa-check"></span>Georgia Power Heating and Cooling Parternship Award 2008, 2011</li>
                                            <li>
                                                <span className="icon fa fa-check"></span>Tri-State Distributor's Most Improved Sales 2009, 2011</li>
                                            <li>
                                                <span className="icon fa fa-check"></span>High Efficiency Award 2009</li>

                                        </div>
                                    </div>
                                </div>

                                <p><strong>WE PROVIDE ENERGY SOLUTIONS.</strong> This not only conserves energy, but saves you money.</p>
                                <p><strong>WE PROVIDE EMERGENCY SERVICE.</strong> You never have to panic and can rest assured that we will be there to fix your system.</p>

                                <hr id="customer-reviews" />

                                <div className="quote-block text-center">
                                    <span className="icon"><span className="fa fa-quote-left"></span></span>
                                    <p> I was very pleased with Zack Goodman. He was professional and thorough, and he offered helpful suggestions. I’m very pleased with your service. The maintenance check every six months gives me peace of mind that my systems are working properly. </p>
                                    <footer className="blockquote-footer"><cite title="Source Title">Jacquelin H.</cite></footer>
                                    <div className="rating">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                </div>

                                <hr id="customer-reviews" />

                                <div className="quote-block text-center">
                                    <span className="icon"><span className="fa fa-quote-left"></span></span>
                                    <p> Absolutely wonderful! Wyatt and Jeremiah were professional, efficient, polite and I absolutely recommended Jordan Air. </p>
                                    <footer className="blockquote-footer"><cite title="Source Title">Rebel S.</cite></footer>
                                    <div className="rating">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                </div>

                                <hr id="customer-reviews" />

                                <div className="quote-block text-center">
                                    <span className="icon"><span className="fa fa-quote-left"></span></span>
                                    <p> Great service. Technicians very knowledgeable!</p>
                                    <footer className="blockquote-footer"><cite title="Source Title">Pamela H.</cite></footer>
                                    <div className="rating">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                </div>

                                <hr id="customer-reviews" />

                                <PostCTA></PostCTA>
                            </div>

                        </div>

                        <div className="col-lg-4 sticky-sidebar">
                            <Sidebar></Sidebar>
                        </div>
                    </div>

                </div>


            </div>

            <Repair></Repair>


            <BaseContent></BaseContent>
            <Footer></Footer>
        </div>

    );
}
export default AboutUs;
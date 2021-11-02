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
                                <article>WE VALUE OUR CUSTOMERS. We acknowledge that without our customers, we would not be able to do what we do. Your comfort and happiness are of the highest importance to us.

                                    JORDAN AIR HAS BEEN SERVING the surrounding Athens areas since 1993. This means that we are familiar with the area and the needs of our customers.

                                    WE USE TOP QUALITY MATERIALS. We purchase only high quality products for service and installation, including Trane heating and cooling products.

                                    WE ARE A DRUG FREE WORKPLACE in the state of Georgia. This allows you to have a peace of mind when we are in your home.

                                    WE KEEP AN INVENTORY of hundreds of different parts to fit your specific unit. This saves you time and money.

                                    WE ARE MEMBERS of the Athens Clarke County, Oconee County, Madison County, Jackson County, Taliaferro County, Greene County, and Oglethorpe County Chambers of Commerce. Economic development and growth and service in your area are important to us.

                                    OUR TEAM is made up of skilled, certified professionals. You can rest assured that you are being well taken care of.

                                    OUR TRUCKS, TOOLS, AND FACILITY are of the highest quality. This allows us to easily get to your home and perform the job as quickly as possible.

                                    WE ABIDE BY THE RULES. Following all EPA laws is of the highest importance to us.

                                    WE ARE AN AWARD WINNING COMPANY.</article>

                                <div className="jumbotron">
                                    <div className="list-items">
                                        <div className="list">
                                            <li>Trane SOAR Award- Trane's top dealer in Georgia 2015</li>
                                            <li>Trane Outstanding Performer Award 2014</li>
                                            <li>Trane Gold Club Award 2008, 2009, 2010</li>
                                            <li>Trane Comfort Specialist 2014</li>
                                            <li>Georgia Power Heating and Cooling Parternship Award 2008, 2011</li>
                                            <li>Tri-State Distributor's Most Improved Sales 2009, 2011</li>
                                            <li>High Efficiency Award 2009</li>

                                        </div>
                                    </div>
                                </div>

                                <p><strong>WE PROVIDE ENERGY SOLUTIONS.</strong> This not only conserves energy, but saves you money.</p>
                                <p><strong>WE PROVIDE EMERGENCY SERVICE.</strong> You never have to panic and can rest assured that we will be there to fix your system.</p>

                                <blockquote className="blockquote text-center">
                                    <p className="mb-0"><i className="fa fa-quote-left"></i> "I was very pleased with Zack Goodman. He was professional and thorough, and he offered helpful suggestions. I’m very pleased with your service. The maintenance check every six months gives me peace of mind that my systems are working properly."
                                    </p>
                                    <footer className="blockquote-footer">Albert Einstein <cite title="Source Title">genius</cite></footer>

                                </blockquote>

                                <blockquote className="blockquote text-center">
                                    <p className="mb-0"><i className="fa fa-quote-left"></i> "Absolutely wonderful! Wyatt and Jeremiah were professional, efficient, polite and I absolutely recommended Jordan Air."
                                    </p>
                                    <footer className="blockquote-footer">Albert Einstein <cite title="Source Title">genius</cite></footer>

                                </blockquote>

                                <blockquote className="blockquote text-center">
                                    <p className="mb-0"><i className="fa fa-quote-left"></i> "Great service. Technicians very knowledgeable!"
                                    </p>
                                    <footer className="blockquote-footer">Albert Einstein <cite title="Source Title">genius</cite></footer>

                                </blockquote>

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
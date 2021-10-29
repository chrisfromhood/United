import "./_contact_us.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BaseContent from "../components/BaseContent/BaseContent";

function ContactUs() {
    return (

        <div>
            <Header></Header>

            <div className="content">

                <div className="inner-page-header">
                    <div className="fill">
                        <div className="container">
                            <h1 className="title">Contact Us</h1>
                        </div>
                    </div>
                </div>

                <div className="inner-page-content container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="post-content">
                                <div className="contact-info">
                                    <div className="g-map">
                                        <iframe title="G32" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.0740521381044!2d19.663965011692227!3d46.09757389619935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474366cf4b445a57%3A0x991ec87d248a3906!2sGigatron%20prodavnica%20G32%20-%20Subotica!5e0!3m2!1sen!2srs!4v1635495058534!5m2!1sen!2srs" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                                    </div>
                                    <div className="inner">
                                        <span className="h2 title">GET STARTED WITH A FREE QUOTE TODAY!</span>
                                        <p className="sub-line">
                                            We would love to hear from you! If you have any comments, questions, or concerns, let us know, and we will get back to you right away.
                                        </p>
                                        <div className="row">
                                            <div className="col-lg-8 col-xs-12 info-items info-box place">
                                                <a href="/" target="_blank">
                                                    <span className="icon location">
                                                        <span className="fa fa-location-arrow"></span>
                                                    </span>
                                                    <span className="text">1165 Athens Road Crawford, Georgia 30630</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-8 col-xs-12 info-items info-box phone">
                                                <a href="/" target="_blank">
                                                    <span className="icon location">
                                                        <span className="fa fa-phone"></span>
                                                    </span>
                                                    <span className="text">706-995-7485</span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="stocky-wrapper">
                                <aside className="sidebar">
                                    <div className="s-box-wrapper">
                                        <div className="s-box-large">
                                            <div className="h4">CONNECT WITH SPECIALIST</div>

                                            <div className="form-message">
                                                <form>
                                                    <div className="form-row">
                                                        <div className="col">
                                                            <div className="field-name">
                                                                <label for="validationDefault01">First name</label>
                                                                <input type="text" className="form-control " id="validationDefault01" />
                                                                <div className="valid-feedback">Looks good!</div>
                                                            </div>
                                                            <div className="field-last-name">
                                                                <label for="validationDefault01">Last name</label>
                                                                <input type="text" className="form-control " id="validationDefault01" />
                                                                <div className="valid-feedback">Looks good!</div>
                                                            </div>
                                                            <div className="field-phone">
                                                                <label for="validationDefault01">Phone</label>
                                                                <input type="text" className="form-control" id="validationDefault01" aria-describedby="validationServer05Feedback" required />
                                                                <div id="validationServer05Feedback" className="invalid-feedback">
                                                                    Please provide a valid phone number.
                                                                </div>
                                                            </div>
                                                            <div className="field-zip">
                                                                <label for="validationDefault01">Zip</label>
                                                                <input type="text" className="form-control" id="validationDefault01" aria-describedby="validationServer05Feedback" required />
                                                                <div id="validationServer05Feedback" className="invalid-feedback">
                                                                    Please provide a valid zip.
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label for="validationTextarea">Textarea</label>
                                                                <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required=""></textarea>
                                                                <div className="invalid-feedback">
                                                                    How can we help?
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button className="btn btn-primary" type="submit">Submit</button>
                                                </form>
                                            </div>

                                        </div>
                                        <div className="review-box">Review box</div>
                                        <div className="s-box-small text-center">
                                            <h4>Quick, easy &amp; affordable financing is available for you</h4>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-post-part">

                </div>
            </div>
            <BaseContent></BaseContent>
            <Footer></Footer>
        </div>

    );
}
export default ContactUs;
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Homepage() {
  return (
    <div className="main">

      <Header></Header>

      <section className="section-hero">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-8">
              <div className="hero-text-box">
                <h3>LOCALLY OWNED & OPERATED SINCE 1993</h3>
                <h1 className="heading-primary">Heating ventilation, air conditioning and plumbing</h1>
                <ul class="list-group list-group-horizontal">
                  <li class="list-group-item-info">Award-winning</li>
                  <li class="list-group-item-info">Top-quality materials</li>
                </ul>
                <ul class="list-group list-group-horizontal">
                  <li class="list-group-item-info">Trained, certified tehnicians</li>
                  <li class="list-group-item-info">Licensed, bonded, insured</li>
                </ul>
                <button type="button" class="btn btn-info">Connect with a specialist &gt;&gt;</button>

              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="promo">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 align-self-center">
              <h3 className="sub-heading">Take advantage of our new promotion</h3>
              <h2>0% FINANCING FOR 72 MONTHS ON NEW SYSTEMS</h2>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8 align-self-center">
              <ul className="list-group">
                <a className="promo-btn" href="/">AIR CONDITIONER INSTALLATIONS</a>
                <a className="promo-btn" href="/">FURNACE INSTALLATIONS</a>
                <a className="promo-btn" href="/">PLUMBING</a>
              </ul>

            </div>
          </div>
        </div>
      </section>
      {/* CARDS SECTION */}
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

      <section className="why-us">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 message-block align-self-center">
              <div className="why-us_right-content">
                <div className="why-us_heading">Why Choose us</div>
                <p className="why-us_text">Jordan Air provides residential heating ventilation, plumbing and air conditioning services. We have provided quality HVAC services and repairs to our community since 1993. </p>
                <p className="why-us_text">We offer a wide range of services and products that allow us to maximize our customers' comfort and their homes' efficiency. We specialize in plumbing repair, installation, duct cleaning, HVAC repair, emergency service, and routine maintenance. We also offer weekend and emergency services. </p>
                <a href="/about-us/">LEARN MORE ABOUT US &gt;&gt;
                  <span className="icon fa fa-angle-double-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="testimonial-wrapper container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-2 icon text-center align-self-center">
          </div>
          <div class="col-12 col-md-6 col-lg-7 quote align-self-center">
            <blockquote class="blockquote">
              <p class="user-quote">"I was very pleased with Zack Goodman. He was professional and thorough, and he offered helpful suggestions. I’m very pleased with your service. The maintenance check every six months gives me peace of mind that my systems are working properly."</p>
              <footer class="blockquote-footer"><cite title="Source Title">Jacquelin H.</cite></footer> </blockquote>
          </div>
          <div class="col-12 col-md-4 col-lg-3 text-center btn-cta align-self-center">
            <a href="/about-us#customer-reviews" class="btn-oval">READ MORE
              <span class="fa fa-angle-double-right"></span></a>
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

      <Footer></Footer>

    </div>
  );
}
export default Homepage;



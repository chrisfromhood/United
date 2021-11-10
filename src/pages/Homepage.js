import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BaseContent from "../components/BaseContent/BaseContent";

function Homepage() {
  return (
    <div className="main">

      <Header></Header>

      <section className="section-hero">
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-lg-8">
              <div className="hero-text-box">
                <h4 className="since">LOCALLY OWNED & OPERATED SINCE 1993</h4>
                <h1 className="heading-primary">Heating ventilation, air conditioning and plumbing</h1>
                <div className="list-wrapper">
                  <ul className="list-grid">
                    <li className="list-item">
                      <span className="fas fa-check"></span>Award-winning
                    </li>
                    <li className="list-item">
                      <span className="fas fa-check"></span>Top-quality materials
                    </li>
                    <li className="list-item">
                      <span className="fas fa-check"></span>Trained, certified tehnicians
                    </li>
                    <li className="list-item">
                      <span className="fas fa-check"></span>Licensed, bonded, insured
                    </li>
                  </ul>
                </div>
                <a type="button" className="main-btn" href="http://localhost:3000/contact-us">Connect with a specialist <span className="fa fa-angle-double-right"></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="promo">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 align-self-center">
              <div className="promo-content">
                <div className="promo-content-icon">
                  <span className="fas fa-tags"></span>
                </div>
                <div className="heading">Take advantage of our new promotion</div>
                <div className="sub-heading">0% FINANCING FOR 72 MONTHS ON NEW SYSTEMS</div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-8 align-self-center">

              <a className="promo-btn special" href="/">
                <div className="text">Air conditioner Installations</div>
                <span className="icon cooling">
                  <span className="fas fa-snowflake"></span>
                </span>
              </a>

              <a className="promo-btn special" href="/">
                <div className="text">Furnace Installations</div>
                <span className="icon heating">
                  <span className="fas fa-fire"></span>
                </span>
              </a>

              <a className="promo-btn special" href="/">
                <div className="text">Plumbing</div>
                <span className="icon plumbing">
                  <span className="fas fa-wrench"></span>
                </span>
              </a>

            </div>


          </div>
        </div>
      </section>

      <BaseContent></BaseContent>

      <Footer></Footer>

    </div>
  );
}
export default Homepage;



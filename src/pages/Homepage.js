import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BaseContent from "../components/BaseContent/BaseContent";

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
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item-info">Award-winning</li>
                  <li className="list-group-item-info">Top-quality materials</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item-info">Trained, certified tehnicians</li>
                  <li className="list-group-item-info">Licensed, bonded, insured</li>
                </ul>
                <button type="button" className="btn btn-info">Connect with a specialist &gt;&gt;</button>

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

      <BaseContent></BaseContent>


      <Footer></Footer>

    </div>
  );
}
export default Homepage;



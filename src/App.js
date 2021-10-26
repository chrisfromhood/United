function App() {
  return (
    <div className="main">

      <header className="global-header">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <a className="branding-logo" href="/">
                  <img src="https://localunitedservices.com/wp-content/themes/san-diego-home-services/img/local-united-header-logow.png" alt="United Plumbing, Heating, Air and Electric Logo" class="header-logo" />
                </a>
              </div>
              <div className="col-9 align-self-center">
                <div className="header-info">
                  <div class="info-items place">
                    <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    <span class="text">
                      <span class="sub-text">Our Location </span> <br /> Local Service </span>
                  </div>
                  <div class="info-items phone">
                    <span class="text">
                      <span class="sub-text">Call us now</span> <br /> 706-995-7485 </span>
                  </div>
                  <button type="button" class="btn btn-primary btn-lg">EMERGENCY SERVICE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">

            <div className="row">
              <div className="col-12">
                <nav class="navbar navbar-expand-lg navbar-light">

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                      <li class="nav-item dropdown mr-4">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          SALES
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>

                        </div>
                      </li>
                      <li class="nav-item dropdown mr-4">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          REPAIRS
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>


                        </div>
                      </li>
                      <li class="nav-item dropdown mr-4">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          PLUMBING
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>


                        </div>
                      </li>

                    </ul>

                  </div>
                </nav>
              </div>



            </div>
          </div>
        </div>

      </header>

      <section className="hero">
        <div className="container">
          HERO SECTION
        </div>
      </section>

      <section className="promo">
        <div className="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-12 align-self-center">
              <h3 className="sub-heading">Take advantage of our new promotion</h3>
              <h2>0% FINANCING FOR 72 MONTHS ON NEW SYSTEMS</h2>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-8 align-self-center">
              <ul className="list-group">
                <a className="promo-btn">AIR CONDITIONER INSTALLATIONS</a>
                <a className="promo-btn">FURNACE INSTALLATIONS</a>
                <a className="promo-btn">PLUMBING</a>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <section className="services-info">
        <div className="container">
          <div className="box-wrapper col-12">
            <div className="h2-text"><strong>24/7 EXPERT SERVICES IN LOCAL SERVICE</strong></div>
            <div className="row align-items-start">
              <div className="col-lg-3 col-6 item">
                <div class="card my-5">
                  <img src="https://cdn.searchkings.ca/img/services/trane-furnace-c1e46c4293.jpg" class="card-img-top " alt="..." />
                  <div class="card-body bg-success ">
                    <h4 class="card-title font-weight-bold text-center text-uppercase">Furnances</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 item">
                <div class="card my-5">
                  <img src="https://cdn.searchkings.ca/img/services/trane-air-quality-6e8f047f16.jpg" class="card-img-top " alt="..." />
                  <div class="card-body bg-success ">
                    <h4 class="card-title font-weight-bold text-center text-uppercase">Air quality</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 item">
                <div class="card my-5">
                  <img src="https://cdn.searchkings.ca/img/services/trane-ac-6d23ab4053.jpg" class="card-img-top " alt="..." />
                  <div class="card-body bg-success ">
                    <h4 class="card-title font-weight-bold text-center text-uppercase">Air Condition</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 item">
                <div class="card my-5">
                  <img src="https://cdn.searchkings.ca/img/services/trane-water-heaters-315d322903.jpg" class="card-img-top " alt="..." />
                  <div class="card-body bg-success ">
                    <h4 class="card-title font-weight-bold text-center text-uppercase">Water heaters</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
export default App;
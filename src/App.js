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
                      <span class="sub-text">Our Location </span> Local Service </span>
                  </div>
                  <div class="info-items phone">
                    <span class="text">
                      <span class="sub-text">Call us now</span> 706-995-7485 </span>
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
              <h5>AIR CONDITIONER INSTALLATIONS</h5>
              <h5>FURNACE INSTALLATIONS</h5>
              <h5>PLUMBING</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <form className="contact-form" action="#" method="post">
                <div>
                  <label for="fullName">Your Name:</label>
                  <input type="text" name="fullName" id="fullName" required />
                </div>

                <div>
                  <label for="phone">Phone:</label>
                  <input type="tel" name="phone" id="phone" maxlength="12" placeholder="111-222-3333" required />
                </div>

                <div>
                  <label for="email">Email:</label>
                  <input type="email" name="email" id="email" required />
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
export default App;
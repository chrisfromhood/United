function App() {
  return (

    <header className="global-header">

      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-auto col-sm-12 align-self-center">
              <div className="branding">
                <a className="branding-logo" href="/">
                  <img src="https://localunitedservices.com/wp-content/themes/san-diego-home-services/img/local-united-header-logow.png" alt="United Plumbing, Heating, Air and Electric Logo" class="header-logo" />
                </a>
                {/* <div className="nav-toggler">
                  <button type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-expanded="false" aria-controls="navbarResponsive" class=""> <span class="menu">MENU</span> <span class="menu-icon fas fa-bars"></span> </button>
                </div> */}
              </div>
            </div>
            <button type="button" class="btn btn-primary btn-lg">EMERGENCY SERVICE</button>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="navbar-toggleable navbar-expand-lg" id="navbarResponsive">
            <nav className="navbar">
              <ul className="nav navbar-nav mx-auto">
                <li class="dropdown trigger-fix">
                  <a href="＃" class="drop-toggle" data-toggle="dropdown"> Services
                    <span class="fas fa-chevron-down"></span> </a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Plumbing</a></li>
                    <li><a href="#">Heating</a></li>
                  </ul>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>

    </header>


  );
}
export default App;
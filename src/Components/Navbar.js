const Navbar = () => {
    return (
      <nav
        id="navbar-main"
        aria-label="Primary navigation"
        className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light"
      >
        <div className="container position-relative">
          <a className="navbar-brand me-lg-5" href="../../index.html">
            <img className="navbar-brand-dark" src="../../assets/img/brand/light.svg" alt="Logo light" />
            <img className="navbar-brand-light" src="../../assets/img/brand/dark.svg" alt="Logo dark" />
          </a>
          <div className="navbar-collapse collapse me-auto" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="../../index.html">
                    <img src="../../assets/img/brand/dark.svg" alt="Themesberg logo" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <a
                    href="#navbar_global"
                    className="fas fa-times"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar_global"
                    aria-controls="navbar_global"
                    aria-expanded="false"
                    title="close"
                    aria-label="Toggle navigation"
                  ></a>
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
              <li className="nav-item ">
                <a href="#" className="nav-link ">
                  Pages
                </a>
              </li>
              <li className="nav-item ">
                <a href="#" className="nav-link ">
                  Dashboard
                </a>
              </li>
              <li className="nav-item ">
                <a href="#" className="nav-link ">
                  Components
                </a>
              </li>
              <li className="nav-item ">
                <a href="#" className="nav-link ">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
const Navbar = () => {
    return (
      <nav
        id="navbar-main"
        aria-label="Primary navigation"
        className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light"
      >
        <div className="container position-relative">
          <a className="navbar-brand me-lg-5" href="/" style={{ fontSize: 50}}>
            TI
          </a>
          <div className="navbar-collapse collapse me-auto" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  TI
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
                  >Toggle</a>
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
              <li className="nav-item ">
                <a href="#about" className="nav-link ">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a href="#experience" className="nav-link ">
                  Experience
                </a>
              </li>
              <li className="nav-item ">
                <a href="#skills" className="nav-link ">
                  Skills
                </a>
              </li>
              <li className="nav-item ">
                <a href="#projects" className="nav-link ">
                  Projects
                </a>
              </li>
              <li className="nav-item ">
                <a href="#contact" className="nav-link ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
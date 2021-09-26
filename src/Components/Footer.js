const Footer = () => {
    return (
      <div class="container">
        <div class="row align-items-md-center">
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="d-flex align-items-center">
              <a class="footer-brand brand-sm me-3" href="/" style={{ fontSize: 50}}>
                TI
              </a>
              <p class="small mb-0">
                © Tumuhirwe Iden. { new Date().getFullYear() }
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 mb-4 mb-sm-0">
            <ul class="list-inline list-group-flush list-group-borderless text-md-center mb-0">
              <li class="list-inline-item px-0 px-sm-2">
                <a class="text-muted" href="#about">
                  About
                </a>
              </li>
              <li class="list-inline-item px-0 px-sm-2">
                <a class="text-muted" href="#experience">
                  Experience
                </a>
              </li>
              <li class="list-inline-item px-0 px-sm-2">
                <a class="text-muted" href="#skills">
                  Skills
                </a>
              </li>
              <li class="list-inline-item px-0 px-sm-2">
                <a class="text-muted" href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-md-4">
            <ul class="list-inline text-sm-right mb-0">
              <li class="list-inline-item">
                <a class="icon icon-xs icon-white me-3"
                href="https://twitter.com/kallyasl"
                >
                  <span class="fab fa-twitter"></span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="icon icon-xs icon-white me-3" href="/">
                  <span class="fab fa-facebook-f"></span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="icon icon-xs icon-white me-3"
                href="https://github.com/kallyas"
                >
                  <span class="fab fa-github"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
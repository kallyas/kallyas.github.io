const Contact = () => {
    return (
      <div className="container" id="contact">
        <div className="row mb-5 mb-lg-6">
          <div className="col-12 col-sm-4 text-center">
            <div className="icon-box mb-4">
              <div className="icon icon-secondary-app mb-4">
                <span className="fas fa-map-marker-alt"></span>
              </div>
              <h2 className="h5 icon-box-title">Visit me</h2>
              <span>Kampala, Uganda</span>
            </div>
          </div>
          <div className="col-12 col-sm-4 text-center">
            <div className="icon-box mb-4">
              <div className="icon icon-secondary-app mb-4">
                <span className="fas fa-phone-volume"></span>
              </div>
              <h2 className="h5 icon-box-title">Call</h2>
              <span>+256788226829</span>
              <div className="text-small text-gray">Mon - Fri, 8am - 4pm</div>
            </div>
          </div>
          <div className="col-12 col-sm-4 text-center">
            <div className="icon-box mb-4">
              <div className="icon icon-secondary-app mb-4">
                <span className="far fa-paper-plane"></span>
              </div>
              <h2 className="h5 icon-box-title">Email</h2>
              <a href="mailto:identumu@gmail.com">
                <span
                  className="__cf_email__"
                  data-cfemail="4e262b2222210e3a262b232b3d2c2b3c29602d2123"
                >
                  [email&#160;protected]
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 text-center mb-4">
            <h2>Want to work with me?</h2>
            <p>Cool! Let’s talk about your project</p>
          </div>
          <div className="col-12 col-lg-8">
            <form action="#">
              <div className="mb-4">
                <label for="name">Your Name</label>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="e.g. John Doe" id="name" />
                </div>
              </div>
              <div className="mb-4">
                <label for="email">Your Email</label>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@company.com"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label for="message">Your Message</label>
                <textarea
                  placeholder="Your message"
                  className="form-control"
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn rounded btn-secondary">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  
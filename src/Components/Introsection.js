const Introsection = () => {
    return (
      <div className="section-header bg-primary-app pb-0">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <img
                src="profile.png"
                className="rounded-circle img-thumbnail image-lg border-gray-300 p-2"
                alt="my Profile"
              />
              <div className="mt-4 mb-5">
                <h1 className="display-2 fw-normal my-4">
                  Hello, I’m Tumuhirwe Iden
                </h1>
                <h5 className="fw-normal text-gray">
                  Fullstack Software Developer
                </h5>
              </div>
              <ul className="list-inline text-center mb-0">
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/kallyasl"
                    className="icon icon-md icon-twitter me-3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="twitter"
                  >
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/kallyas"
                    className="icon icon-md icon-github me-3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="github"
                  >
                    <span className="fab fa-github"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Introsection;
  
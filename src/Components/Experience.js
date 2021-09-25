import experience from "../experience.json";

const Experience = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center mb-5 mb-lg-6">
          <h2 className="display-2 fw-bold">Experience</h2>
          <p className="lead">And if it’s not listed here, I learn incredibly quickly</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="card bg-white border-gray-300">
            <div className="border-bottom px-4 py-5">
              {experience.map((exp, index) => (
                <div className="row align-items-center" key={index}>
                  <div className="col-12 col-md-3 pb-3 pb-md-0">
                    <h2 className="h5">{exp.company}</h2>
                  </div>
                  <div className="col-md-5 pb-2 pb-md-0">
                    <h3 className="h5 mb-3">{exp.position}</h3>
                    <p className="mb-0">{exp.description}</p>
                  </div>
                  <div className="col-md-4 text-md-right">
                    <span className="badge bg-primary">{exp.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

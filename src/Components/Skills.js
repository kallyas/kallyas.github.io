import skills from "../skills.json";

const Skills = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center mb-4 mb-md-6">
          <h2 className="display-2 fw-bold">Skills</h2>
          <p className="lead">And if it’s not listed here, I learn incredibly quickly</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-4 col-md-3 mb-4 mb-md-0">
          <ul className="list-unstyled">
            <>
              <li className="list-item h3 mb-4">Design</li>
              {skills.design.map((skill, index) => (
                <li className="list-item h6 fw-normal mb-3 text-muted" key={index}>
                  {skill}
                </li>
              ))}
            </>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-md-3 mb-4 mb-md-0">
          <ul className="list-unstyled">
            <>
              <li className="list-item h3 mb-4">Development</li>
              {skills.development.map((skill, index) => (
                <li className="list-item h6 fw-normal mb-3 text-muted" key={index}>
                  {skill}
                </li>
              ))}
            </>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-md-3">
          <ul className="list-unstyled">
            <>
              <li className="list-item h3 mb-4">Software</li>
              {skills.software.map((skill, index) => (
                <li className="list-item h6 fw-normal mb-3 text-muted" key={index}>
                  {skill}
                </li>
              ))}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

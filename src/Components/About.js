import { ProductDesign, ProtoTyping, Development, TeamLead } from ".";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="row justify-content-center mb-0 mb-md-6">
        <div className="col-6 col-md-3 text-center mb-5 mb-md-0">
          <div className="mb-2 mb-md-3">
            <ProductDesign />
          </div>
          <h2 className="h4">Product Design</h2>
        </div>
        <div className="col-6 col-md-3 text-center mb-5 mb-md-0">
          <div className="mb-2 mb-md-3">
            <ProtoTyping />
          </div>
          <h2 className="h4">Prototyping</h2>
        </div>
        <div className="col-6 col-md-3 text-center mb-5 mb-md-0">
          <div className="mb-2 mb-md-3">
            <Development />
          </div>
          <h2 className="h4">Development</h2>
        </div>
        <div className="col-6 col-md-3 text-center mb-5 mb-md-0">
          <div className="mb-2 mb-md-3">
            <TeamLead />
          </div>
          <h2 className="h4">Team Lead</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 text-left text-md-right">
          <p className="lead fw-bold text-dark">
            I work at the intersection of design, brand, code, strategy and content; helping
            organisations bring their concepts and products to life… to make people’s lives better.
          </p>
        </div>
        <div className="col-md-4">
          <p>
            With more than a decade of experience I tackle a broad variety of disciplines in the
            process of creating meaningful products that make a real difference. With carefully
            selected tools and skills I express my visions ranging from product design to the
            creation of user experience up to development and delivery.
          </p>
          <p className="d-none d-lg-block">
            My distinctive strategic thinking helps me to pinpoint the holistic scope of a product
            and evolve it by adding new business ideas, innovations and values that meet user needs
            as well as business objectives. Besides building user flows, information architecture
            and wireframes, tailor-made interactive prototypes
          </p>
        </div>
        <div className="col-md-4">
          <p>
            are constantly putting concepts and ideas to the test and emphasize the user-centered
            approach in my work. I work with the latest techniques in web development and my agile
            workflow is the result of the precisely combined tools and strategies that include
            object oriented patterns, build scripts, pre-processors and minification, source code
            management, testing as well as deployment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

const Card = ({ data }) => {
    return (
      <div className="col-md-6 col-lg-4 text-center">
        <div className="card border-gray-300 mb-4">
          <div className="card-body py-5">
            <img
              src="../../assets/img/clients/airbnb.svg"
              className="img-fluid image-sm"
              alt="Airbnb logo"
            />
            <p className="card-text py-4 mb-0">description</p>
            <a href="#" className="btn btn-primary btn-sm">
              Preview
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  
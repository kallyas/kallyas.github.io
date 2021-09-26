const Card = ({ data }) => {
  return (
    <div class="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
      <div class="card shadow mb-4">
        <img
          src={data.image}
          class="card-img-top rounded-top"
          alt={data.title}
        />
        <div class="card-body">
          <span class="h4 icon-secondary small">
            {data.tech.map((tech, index) => (
              <span key={index} class={`fab fa-${tech} me-2`} style={{ fontSize: "25px"}}></span>
            ))}
          </span>
          <h3 class="h5 card-title mt-3 d-flex">{data.title}</h3>
          <p class="card-text">
            {data.description}
          </p>
          <a href={data.preview} class="btn btn-primary btn-lg">
            preview
          </a>
          <a href={data.github} class="btn btn-primary btn-lg mx-4">
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

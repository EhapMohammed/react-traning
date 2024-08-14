function Services(props) {
  const servicesList = props.servicsPramiters.map((service) => (
    <div key={service.id} className="service-container category0  col-lg-12">
      <div className="d-flex justify-content-start gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <rect width="60" height="60" rx="8" fill="#F5F8FA" />
          <path
            d="M23.3333 20.6673V16.6673C23.3333 15.9309 23.9303 15.334 24.6666 15.334H35.3333C36.0697 15.334 36.6666 15.9309 36.6666 16.6673V20.6673H42C42.7364 20.6673 43.3333 21.2643 43.3333 22.0007V40.6673C43.3333 41.4037 42.7364 42.0006 42 42.0006H18C17.2636 42.0006 16.6666 41.4037 16.6666 40.6673V22.0007C16.6666 21.2643 17.2636 20.6673 18 20.6673H23.3333ZM19.3333 34.0007V39.334H40.6666V34.0007H19.3333ZM28.6666 28.6673V31.334H31.3333V28.6673H28.6666ZM26 18.0007V20.6673H34V18.0007H26Z"
            fill="#090A22"
          />
        </svg>
        {/* <img src="" alt="" /> */}
        <div className="serv-name">
          <h2>{service.name}</h2>
          <div className="serv-price">
            {service.price}
            <span>
              {" "}
              / <i className="far fa-clock"></i> {service.time}
            </span>
          </div>
        </div>
      </div>

      <p className="service-descrption">{service.description}</p>
    </div>
  ));

  return <div className="all-services">{servicesList}</div>;
}

export default Services;

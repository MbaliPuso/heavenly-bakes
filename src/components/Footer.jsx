import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Office Address</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a
                  href="/"
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  href="/"
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="/"
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  href="/"
                  className="btn btn-square btn-outline-light rounded-circle me-0"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a href="/" className="btn btn-link">
                About Us
              </a>
              <a href="/" className="btn btn-link">
                Contact Us
              </a>
              <a href="/" className="btn btn-link">
                Our Services
              </a>
              <a href="/" className="btn btn-link">
                Terms &amp; Condition
              </a>
              <a href="/" className="btn btn-link">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a href="/" className="btn btn-link">
                About Us
              </a>
              <a href="/" className="btn btn-link">
                Contact Us
              </a>
              <a href="/" className="btn btn-link">
                Our Services
              </a>
              <a href="/" className="btn btn-link">
                Terms &amp; Condition
              </a>
              <a href="/" className="btn btn-link">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Photo Gallery</h4>
              <div className="row g-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="img/product-1.jpg"
                    alt="Product 1"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="img/product-2.jpg"
                    alt="Product 2"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="img/product-3.jpg"
                    alt="Product 3"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="img/product-2.jpg"
                    alt="Product 4"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="img/product-3.jpg"
                    alt="Product 5"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="img/product-1.jpg"
                    alt="Product 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

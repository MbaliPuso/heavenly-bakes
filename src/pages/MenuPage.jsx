import React from "react";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";

const MenuPage = () => {
  return (
    <>
      {/* Navbar start */}
      <Navbar />
      {/* Navbar end */}

      {/* Product Start */}
      <div className="container-xxl bg-light my-6 py-6 pt-0">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="text-primary text-uppercase mb-2">Bakery Products</p>
            <h1 className="display-6 mb-4">
              Explore The Categories Of Our Bakery Products
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                <div className="text-center p-4">
                  <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">
                    R119 - R990
                  </div>
                  <h3 className="mb-3">Cake</h3>
                  <span>
                    Enjoy our delicious cakes, made with the finest ingredients and a touch of love. Perfect for any occasion.
                  </span>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="img/product-1.jpg"
                    alt="product 1"
                  />
                  <div className="product-overlay">
                    <a
                      href="/"
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                    >
                      <i className="fa fa-eye text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                <div className="text-center p-4">
                  <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">
                    R119 - R990
                  </div>
                  <h3 className="mb-3">Bread</h3>
                  <span>
                    Freshly baked bread, soft and flavorful. Perfect for sandwiches, toast, or just on its own.
                  </span>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="img/product-2.jpg"
                    alt="product 2"
                  />
                  <div className="product-overlay">
                    <a
                      href="/"
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                    >
                      <i className="fa fa-eye text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                <div className="text-center p-4">
                  <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">
                    R119 - R990
                  </div>
                  <h4 className="mb-3">Cookies</h4>
                  <span>
                  Enjoy our delightful assortment of cookies, crafted with care and the finest ingredients. Perfect for any occasion or as a sweet treat.
                  </span>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="img/product-3.jpg"
                    alt="product 3"
                  />
                  <div className="product-overlay">
                    <a
                      href="/"
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                    >
                      <i className="fa fa-eye text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default MenuPage;

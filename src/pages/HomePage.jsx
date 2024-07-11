import React, { useState } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div>
        {/* Navbar start */}
        <Navbar />
        {/* Navbar end */}

        {/* Carousel Start */}
        <Container fluid className="p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
          <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/carousel-1.jpg"
                alt="Carousel 1"
              />
              <Carousel.Caption className="d-md-block">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg={8}>
                      <p className="text-primary text-uppercase fw-bold mb-2">
                        The Best Bakery
                      </p>
                      <h1 className="display-1 text-light mb-4 animated slideInDown">
                        We Bake With Passion
                      </h1>
                      <p className="text-light fs-5 mb-4 pb-3">
                        Experience the warmth and aroma of freshly baked bread, pastries, and cakes made with love and the finest ingredients. Indulge in our delightful treats that bring joy to every bite.
                      </p>
                      <Button
                        href="/"
                        className="btn btn-primary rounded-pill py-3 px-5"
                      >
                        Read More
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/carousel-2.jpg"
                alt="Carousel 2"
              />
              <Carousel.Caption className="d-md-block">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg={8}>
                      <p className="text-primary text-uppercase fw-bold mb-2">
                        The Best Bakery
                      </p>
                      <h1 className="display-1 text-light mb-4 animated slideInDown">
                        We Bake With Passion
                      </h1>
                      <p className="text-light fs-5 mb-4 pb-3">
                        From crusty artisanal loaves to sweet and savory pastries, our bakery offers a wide range of delicious baked goods that are perfect for any occasion. Come and taste the difference!
                      </p>
                      <Button
                        href="/"
                        className="btn btn-primary rounded-pill py-3 px-5"
                      >
                        Read More
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="header-carousel owl-nav">
            <span className="owl-prev" onClick={() => setIndex(index === 0 ? 1 : 0)}><i className="bi bi-chevron-left"></i></span>
            <span className="owl-next" onClick={() => setIndex(index === 1 ? 0 : 1)}><i className="bi bi-chevron-right"></i></span>
          </div>
        </Container>
        {/* Carousel End */}
        {/* Facts Start */}
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                  <i className="fa fa-certificate fa-4x text-primary mb-4" />
                  <p className="mb-2">Years Experience</p>
                  <h1 className="display-5 mb-0" data-toggle="counter-up">
                    50
                  </h1>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                  <i className="fa fa-users fa-4x text-primary mb-4" />
                  <p className="mb-2">Skilled Professionals</p>
                  <h1 className="display-5 mb-0" data-toggle="counter-up">
                    175
                  </h1>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                  <i className="fa fa-bread-slice fa-4x text-primary mb-4" />
                  <p className="mb-2">Total Products</p>
                  <h1 className="display-5 mb-0" data-toggle="counter-up">
                    135
                  </h1>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeIn"
                data-wow-delay="0.7s"
              >
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                  <i className="fa fa-cart-plus fa-4x text-primary mb-4" />
                  <p className="mb-2">Order Everyday</p>
                  <h1 className="display-5 mb-0" data-toggle="counter-up">
                    9357
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Facts End */}

        {/* Service Start */}
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="text-primary text-uppercase mb-2">Our Services</p>
                <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
                <p className="mb-5">
                  We offer a variety of services to meet all your bakery needs.
                  From custom cakes for special occasions to everyday bread and
                  pastries, our products are made with the highest quality
                  ingredients and the utmost care.
                </p>
                <div className="row gy-5 gx-4">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                        <i className="fa fa-bread-slice text-white" />
                      </div>
                      <h5 className="mb-0">Quality Products</h5>
                    </div>
                    <span>
                      We use only the finest ingredients to create delicious and
                      nutritious baked goods.
                    </span>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                        <i className="fa fa-birthday-cake text-white" />
                      </div>
                      <h5 className="mb-0">Custom Products</h5>
                    </div>
                    <span>
                      Our team can create custom cakes and pastries to make your
                      special occasion even more memorable.
                    </span>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                        <i className="fa fa-cart-plus text-white" />
                      </div>
                      <h5 className="mb-0">Online Order</h5>
                    </div>
                    <span>
                      Convenient online ordering allows you to enjoy our
                      products from the comfort of your home.
                    </span>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                        <i className="fa fa-truck text-white" />
                      </div>
                      <h5 className="mb-0">Home Delivery</h5>
                    </div>
                    <span>
                      We offer home delivery to ensure you receive fresh and
                      delicious baked goods right at your doorstep.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="row img-twice position-relative h-100">
                  <div className="col-6">
                    <img
                      className="img-fluid rounded"
                      src="img/service-1.jpg"
                      alt="service 1"
                    />
                  </div>
                  <div className="col-6 align-self-end">
                    <img
                      className="img-fluid rounded"
                      src="img/service-2.jpg"
                      alt="service 2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}

        {/* Testimonial Start */}
        <div className="container-xxl bg-light my-6 py-6 pb-0">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <p className="text-primary text-uppercase mb-2">
                Client's Review
              </p>
              <h1 className="display-6 mb-4">
                More Than 20000+ Customers Trusted Us
              </h1>
            </div>

            <div
              className="owl-carousel testimonial-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <Carousel indicators={false} controls={true} interval={null}>
                <Carousel.Item>
                  <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        className="flex-shrink-0 rounded-circle border p-1"
                        src="img/testimonial-1.jpg"
                        alt="testimonial 1"
                      />
                      <div className="ms-4">
                        <h5 className="mb-1">Jane Doe</h5>
                        <span>Food Blogger</span>
                      </div>
                    </div>
                    <p className="mb-0">
                      "The pastries here are simply divine! Every bite takes me
                      on a journey of delightful flavors. Highly recommend!"
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        className="flex-shrink-0 rounded-circle border p-1"
                        src="img/testimonial-2.jpg"
                        alt="testimonial 2"
                      />
                      <div className="ms-4">
                        <h5 className="mb-1">John Smith</h5>
                        <span>Chef</span>
                      </div>
                    </div>
                    <p className="mb-0">
                      "This bakery has some of the best bread I've ever tasted.
                      The texture and flavor are unmatched. A true gem!"
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        className="flex-shrink-0 rounded-circle border p-1"
                        src="img/testimonial-3.jpg"
                        alt="testimonial 3"
                      />
                      <div className="ms-4">
                        <h5 className="mb-1">Emily Johnson</h5>
                        <span>Pastry Enthusiast</span>
                      </div>
                    </div>
                    <p className="mb-0">
                      "The cakes are not just beautiful but also incredibly
                      delicious. Perfect for any celebration or just a sweet
                      treat."
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        className="flex-shrink-0 rounded-circle border p-1"
                        src="img/testimonial-4.jpg"
                        alt="testimonial 4"
                      />
                      <div className="ms-4">
                        <h5 className="mb-1">Michael Brown</h5>
                        <span>Local Resident</span>
                      </div>
                    </div>
                    <p className="mb-0">
                      "I love the variety of baked goods available here. The
                      service is always friendly, and the ambiance is cozy."
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            {/* Carousel end */}

            <div
              className="bg-primary text-light rounded-top p-5 my-6 mb-0 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h1 className="display-4 text-light mb-0">
                    Subscribe Our Newsletter
                  </h1>
                </div>
                <div className="col-md-6 text-md-end">
                  <div className="position-relative">
                    <input
                      className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Your email"
                    />
                    <button
                      type="button"
                      className="btn btn-dark py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}

        {/* Back to Top */}
        <a
          href="/"
          className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </>
  );
};

export default HomePage;

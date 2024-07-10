import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from '../components/Navigation';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
         <div>
          {/* Navbar start */}
        <Navbar />
        {/* Navbar end */}
  
  {/* Carousel Start */}
  <Container fluid className="p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/carousel-1.jpg"
            alt="Carousel 1"
          />
          <Carousel.Caption className="d-none d-md-block">
            <Container>
              <Row className="justify-content-start">
                <Col lg={8}>
                  <p className="text-primary text-uppercase fw-bold mb-2">The Best Bakery</p>
                  <h1 className="display-1 text-light mb-4 animated slideInDown">We Bake With Passion</h1>
                  <p className="text-light fs-5 mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
                  <Button href="/" className="btn btn-primary rounded-pill py-3 px-5">Read More</Button>
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
          <Carousel.Caption className="d-none d-md-block">
            <Container>
              <Row className="justify-content-start">
                <Col lg={8}>
                  <p className="text-primary text-uppercase fw-bold mb-2">The Best Bakery</p>
                  <h1 className="display-1 text-light mb-4 animated slideInDown">We Bake With Passion</h1>
                  <p className="text-light fs-5 mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
                  <Button href="/" className="btn btn-primary rounded-pill py-3 px-5">Read More</Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  {/* Carousel End */}
  {/* Facts Start */}
  <div className="container-xxl py-6">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="fact-item bg-light rounded text-center h-100 p-5">
            <i className="fa fa-certificate fa-4x text-primary mb-4" />
            <p className="mb-2">Years Experience</p>
            <h1 className="display-5 mb-0" data-toggle="counter-up">50</h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
          <div className="fact-item bg-light rounded text-center h-100 p-5">
            <i className="fa fa-users fa-4x text-primary mb-4" />
            <p className="mb-2">Skilled Professionals</p>
            <h1 className="display-5 mb-0" data-toggle="counter-up">175</h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="fact-item bg-light rounded text-center h-100 p-5">
            <i className="fa fa-bread-slice fa-4x text-primary mb-4" />
            <p className="mb-2">Total Products</p>
            <h1 className="display-5 mb-0" data-toggle="counter-up">135</h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
          <div className="fact-item bg-light rounded text-center h-100 p-5">
            <i className="fa fa-cart-plus fa-4x text-primary mb-4" />
            <p className="mb-2">Order Everyday</p>
            <h1 className="display-5 mb-0" data-toggle="counter-up">9357</h1>
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
          <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <div className="row gy-5 gx-4">
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-3">
                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                  <i className="fa fa-bread-slice text-white" />
                </div>
                <h5 className="mb-0">Quality Products</h5>
              </div>
              <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
            </div>
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
              <div className="d-flex align-items-center mb-3">
                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                  <i className="fa fa-birthday-cake text-white" />
                </div>
                <h5 className="mb-0">Custom Products</h5>
              </div>
              <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
            </div>
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex align-items-center mb-3">
                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                  <i className="fa fa-cart-plus text-white" />
                </div>
                <h5 className="mb-0">Online Order</h5>
              </div>
              <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
            </div>
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
              <div className="d-flex align-items-center mb-3">
                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                  <i className="fa fa-truck text-white" />
                </div>
                <h5 className="mb-0">Home Delivery</h5>
              </div>
              <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="row img-twice position-relative h-100">
            <div className="col-6">
              <img className="img-fluid rounded" src="img/service-1.jpg" alt='service 1' />
            </div>
            <div className="col-6 align-self-end">
              <img className="img-fluid rounded" src="img/service-2.jpg" alt='service 2' />
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
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
        <p className="text-primary text-uppercase mb-2">Client's Review</p>
        <h1 className="display-6 mb-4">More Than 20000+ Customers Trusted Us</h1>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
        <div className="testimonial-item bg-white rounded p-4">
          <div className="d-flex align-items-center mb-4">
            <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-1.jpg" alt='testimonial 1' />
            <div className="ms-4">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
          <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
        </div>
        <div className="testimonial-item bg-white rounded p-4">
          <div className="d-flex align-items-center mb-4">
            <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-2.jpg" alt='testimonial 2' />
            <div className="ms-4">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
          <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
        </div>
        <div className="testimonial-item bg-white rounded p-4">
          <div className="d-flex align-items-center mb-4">
            <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-3.jpg" alt='testimonial 3' />
            <div className="ms-4">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
          <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
        </div>
        <div className="testimonial-item bg-white rounded p-4">
          <div className="d-flex align-items-center mb-4">
            <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-4.jpg" alt='testimonial 4' />
            <div className="ms-4">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
          <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
        </div>
      </div>
      <div className="bg-primary text-light rounded-top p-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 text-light mb-0">Subscribe Our Newsletter</h1>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="position-relative">
              <input className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-dark py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
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
  <a href="/" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
</div>

        </>
    );
};

export default HomePage;
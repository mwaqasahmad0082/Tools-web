import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import slider1 from "../images/size1.jpg"
import slider2 from "../images/size2.jpg"
import slider3 from "../images/size3.jpg"
import slider4 from "../images/size4.jpg"
import slider5 from "../images/size5.jpg"
import slider6 from "../images/size6.jpg"
import slider7 from "../images/size7.jpg"
import slider8 from "../images/size8.jpg"
import slider9 from "../images/size9.jpg"


const Slider = () => {
  return (
    <div className="bg-dark my-5 p-2 ">
      <div className="container">
        <div className="col-12 text-center common-title fw-bold">
          <h2 className="common-heading text-capitalize fw-bold text-white">
            What Clients Say <br /> About Us
          </h2>
          <hr className="w-25 mx-auto" />
        </div>
      </div>
      
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          {/* ///////////////////////first slider////////////////////// */}
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 mb-4">
                 <div className="d-flex justify-content-center align-items-center">
                <Card className="card-slider">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={slider1}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <div className="stars">
                      <FaStar/> <FaStar/>  
                      <FaStar/> <FaStar/>  <FaStarHalfAlt/>
                    </div>
                  </Card.Body>
                </Card>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <Card className="card-slider">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={slider2}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <div className="stars">
                      <FaStar/> <FaStar/>  
                      <FaStar/> <FaStar/>  <FaStarHalfAlt/>
                    </div>
                  </Card.Body>
                </Card>
                </div>
                {/* ////////// */}
              </div>
              <div className="col-12 col-md-4 mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <Card className="card-slider">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={slider9}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <div className="stars">
                      <FaStar/> <FaStar/>  
                      <FaStar/> <FaStar/>  <FaStarHalfAlt/>
                    </div>
                  </Card.Body>
                </Card>

                </div>
              </div>
              {/* ////////////////// */}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* ///////////////////////second slider////////////////////////// */}
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <Card className="card-slider">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={slider3}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <div className="stars">
                      <FaStar/> <FaStar/>  
                      <FaStar/> <FaStar/>  <FaStarHalfAlt/>
                    </div>
                  </Card.Body>
                </Card>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <Card className="card-slider">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={slider4}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <div className="stars">
                      <FaStar/> <FaStar/>  
                      <FaStar/> <FaStar/>  <FaStarHalfAlt/>
                    </div>
                  </Card.Body>
                </Card>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <Card className="card-slider">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={slider5}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <div className="stars">
                      <FaStar/> <FaStar/>  
                      <FaStar/> <FaStar/>  <FaStarHalfAlt/>
                    </div>
                  </Card.Body>
                </Card>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* /////////////////////////////third slider///////////////////// */}
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <Card className="card-slider">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={slider6}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <div className="stars">
                      <FaStar/> <FaStar/>  
                      <FaStar/> <FaStar/>  <FaStarHalfAlt/>
                    </div>
                  </Card.Body>
                </Card>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <Card className="card-slider">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={slider7}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <div className="stars">
                      <FaStar/> <FaStar/>  
                      <FaStar/> <FaStar/>  <FaStarHalfAlt/>
                    </div>
                  </Card.Body>
                </Card>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <Card className="card-slider">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={slider8}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <div className="stars">
                      <FaStar/> <FaStar/>  
                      <FaStar/> <FaStar/>  <FaStarHalfAlt/>
                    </div>
                  </Card.Body>
                </Card>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;

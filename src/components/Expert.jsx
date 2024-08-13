import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaBookReader } from "react-icons/fa";
import expert1 from "../images/size1.jpg";
import expert2 from "../images/size3.jpg";
import expert3 from "../images/size6.jpg";
import expert4 from "../images/size7.jpg";

const Expert = () => {
  return (
    <div className="py-5">
      <div className="container ">
        <div className="col-12 text-center common-title fw-bold">
          <h2 className="common-heading text-capitalize fw-bold">
            tips and tricks from
            <br /> our experts
          </h2>
          <hr className="w-25 mx-auto" />
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-6 col-lg-3 ">
            <div className="d-flex justify-content-center align-items-center ">
              <Card style={{ width: "18rem" }} className="shadow">
                <Card.Img variant="top" src={expert1} />
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <p className="small text-gray">
                      <FaBookReader />
                      :5000
                    </p>
                    <p className="small text-gray">05-10-2024</p>
                  </div>
                  <Card.Title className="fw-bold">Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark px-4">Read More</Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex justify-content-center align-items-center">
              <Card style={{ width: "18rem" }} className="shadow">
                <Card.Img variant="top" src={expert2} />
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <p className="small text-gray">
                      <FaBookReader />
                      :5000
                    </p>
                    <p className="small text-gray">05-10-2024</p>
                  </div>
                  <Card.Title className="fw-bold">Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark px-4">Read More</Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex justify-content-center align-items-center">
              <Card style={{ width: "18rem" }} className="shadow">
                <Card.Img variant="top" src={expert3} />
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <p className="small text-gray">
                      <FaBookReader />
                      :5000
                    </p>
                    <p className="small text-gray">05-10-2024</p>
                  </div>
                  <Card.Title className="fw-bold">Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark px-4">Read More</Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex justify-content-center align-items-center">
              <Card style={{ width: "18rem" }} className="shadow">
                <Card.Img variant="top" src={expert4} />
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <p className="small text-gray">
                      <FaBookReader />
                      :5000
                    </p>
                    <p className="small text-gray">05-10-2024</p>
                  </div>
                  <Card.Title className="fw-bold">Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark px-4">Read More</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;

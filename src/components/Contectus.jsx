import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contectus = () => {
  return (
    <div className="py-5 bg-dark contectus-component">
      <div class="custom-shape-divider-top-1723037015">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="col-12 text-center common-title fw-bold text-white">
          <h2 className="common-heading text-capitalize fw-bold mt-5">
            contact us
          </h2>
          <hr className="w-25 mx-auto " />
          <div className="container">

            <div className="form-section mx-auto">
            <Form className="text-form">
                <div className="mb-3">
                    <div className="row">
                        <div className="col-lg-6 col-12 mt-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Inter Your First Name" />
                        </div>
                        <div className="col-lg-6 col-12 mt-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Inter Your Last Name" />
                        </div>
                        <div className="col-12 mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Inter Your Email" />
                        </div>
                    </div>
                </div>
              
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contectus;

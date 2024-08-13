import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ser1 from "../images/social1.jpg";
import ser2 from "../images/tool4.jpg";
import ser3 from "../images/tools5.jpg";

const Services = () => {
  return (
    <div className="services">
      <div className="container text-center fw-bold common-title">
        <h2 className="common-heading text-capitalize">
          what we will do for <br /> your Business
        </h2>
        <hr className="w-25 mx-auto" />
      </div>

      <div className="container mt-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-12">
            <div className="text-center card-box rounded-2 p-5 shadow">
              <img
                src={ser1}
                alt="Service 1"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h5 className="my-3 fw-normal">Link Building</h5>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                consequatur.
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="#services"
                  className="icon-span rounded-circle bg-primary d-flex justify-content-center align-items-center"
                >
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="text-center card-box rounded-2 p-5 shadow">
              <img
                src={ser2}
                alt="Service 2"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h5 className="my-3 fw-normal">Link Building</h5>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                consequatur.
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="#services"
                  className="icon-span rounded-circle bg-primary d-flex justify-content-center align-items-center"
                >
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="text-center card-box rounded-2 p-5 shadow">
              <img
                src={ser3}
                alt="Service 3"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h5 className="my-3 fw-normal">Link Building</h5>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                consequatur.
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="#services"
                  className="icon-span rounded-circle bg-primary d-flex justify-content-center align-items-center"
                >
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

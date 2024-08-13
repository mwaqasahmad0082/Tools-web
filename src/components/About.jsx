import React from "react";
import about1 from "../images/tool3.jpg"

const About = () => {
  return (
    <div className=" about-component bg-dark">
      <div className="container about-container">
        <div className="row ">
          <div className=" col-lg-6 col-md-12 img-about">
            <div className="text-center">
              <figure>
                <img
                  src={about1}
                  alt="degital products"
                  className="about-pic img-fluid"
                />
              </figure>
            </div>
          </div>

          <div className=" col-lg-6 col-md-12 text-capitalize d-flex flex-column justify-content-center align-items-start">
            <h2 className="text-capitalize fw-bolder common-heading text-white">
              step to build a successful dgital product
            </h2>
            <p className="mt-3 mb-5 para-width text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              omnis sequi atque Lorem ipsum dolor sit amet. aperiam nam
              quo?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tempora, dolore. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis, eveniet?
            </p>
            <div className="text-center w-100 text-lg-start">
              <button className="btn btn-primary px-5 py-2 mb-4">
                click me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

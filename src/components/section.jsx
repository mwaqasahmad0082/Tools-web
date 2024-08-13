import React from "react";
import section1 from "../images/tools4.jpg";

const section = () => {
  return (
    <div className=" section-component bg-dark">
      <div className="container section-container">
        <div className="row">
          <div className=" col-lg-6 col-md-12 text-capitalize d-flex flex-column justify-content-center align-items-start">
            <h1 className="text-capitalize fw-bolder">
              we collect high quality of leads
            </h1>
            <p className="mt-3 mb-5 para-width text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              omnis sequi atque Lorem ipsum dolor sit amet. aperiam nam quo?
            </p>
            <div className="text-center w-100 text-lg-start">
              <button className="btn btn-primary px-5 py-2 mb-2">
                click me
              </button>
            </div>
          </div>
          {/* section img //////////////////////////////////*/}

          <div className=" col-lg-6 col-md-12">
            <div className="text-center">
              <img src={section1} alt="" className="section-pic" />
            </div>
          </div>
        </div>
      </div>

      <div class="custom-shape-divider-bottom-1723040442">
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
    </div>
  );
};

export default section;

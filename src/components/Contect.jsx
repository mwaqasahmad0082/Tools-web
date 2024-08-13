import React from "react";
import contect1 from "../images/tools2.jpg";
import contect2 from "../images/tool1.jpg";
import contect3 from "../images/tool3.jpg";
import contect4 from "../images/cat4.jpg";

const Contect = () => {
  const imgStyle = { width: "120px", height: "120px", objectFit: "cover" };

  return (
    <div>
      <div>
        <div className="container text-center fw-bold common-title mt-5">
          <h2 className="text-capitalize">
            generating new customers <br /> via online mood
          </h2>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <div className="d-flex px-3 py-5 shadow">
                <img
                  src={contect1}
                  alt="Service 1"
                  style={imgStyle}
                  className="d-md-block d-none img-fluid mx-3"
                />
                <div>
                  <p className="mb-3 fw-bolder ">Social Media Advertisement</p>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    aliquam eveniet dolorum excepturi, totam repellat?
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="d-flex px-3 py-5 shadow">
                <img
                  src={contect2}
                  alt="Service 2"
                  style={imgStyle}
                  className="d-md-block d-none img-fluid mx-3"
                />
                <div>
                  <p className="mb-3 fw-bolder ">Social Media Advertisement</p>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    aliquam eveniet dolorum excepturi, totam repellat?
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="d-flex px-3 py-5 shadow">
                <img
                  src={contect3}
                  alt="Service 3"
                  style={imgStyle}
                  className="d-md-block d-none img-fluid mx-3"
                />
                <div>
                  <p className="mb-3 fw-bolder ">Social Media Advertisement</p>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    aliquam eveniet dolorum excepturi, totam repellat?
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="d-flex px-3 py-5 shadow">
                <img
                  src={contect4}
                  alt="Service 4"
                  style={imgStyle}
                  className="d-md-block d-none img-fluid mx-3"
                />
                <div>
                  <p className="mb-3 fw-bolder ">Social Media Advertisement</p>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    aliquam eveniet dolorum excepturi, totam repellat?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;

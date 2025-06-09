import React from "react";
import Header from "../components/Header";
import homepg from "../assets/img/homepg.png";
import homepg1 from "../assets/img/homepg1.png";
import third from "../assets/img/third.webp";



import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import Projectcard from "../components/Projectcard";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center mt-4">
            <h1 className="font-1rem mt-5">
              <i className="fa-solid fa-house-chimney"></i>
              <span className="fw-bold text-red">Prism Buliders</span>
            </h1>
            <p>
              Welcome to <span className="text-warning">Prism Builders</span>{" "}
              Your Digital Partner in Construction At Prism Builders, we bring
              innovation and efficiency to the heart of construction management.
              Whether you're planning, building, or tracking progress, our
              platform simplifies every step of the project lifecycle. From
              real-time collaboration and task scheduling to budget tracking and
              document management, we provide all the tools you need to keep
              your construction projects on time and within budget. Build
              smarter, faster, and betterwith Prism Builders.
            </p>
          </div>
          <div className="col-lg-6 mt-2 image fluid ">
            <Carousel  className="ms-5" fade interval={3000}>
              <Carousel.Item>
                {" "}
                <img
                  style={{ width: "500px", height: "300px" }}
                  src={homepg}
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "500px", height: "300px" }}
                  src={homepg1}
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                {" "}
                <img
                  style={{ width: "500px", height: "300px" }}
                  src={third}
                  alt=""
                />
              </Carousel.Item>
          
            </Carousel>
          </div>
        </div>
        <div className=" shadow container p-3">
          <h2 className="text-center fw-bold mt-2">Our Projects</h2>
          <div> <Projectcard/></div>
          
        </div>
      </div>
    </>
  );
};

export default Home;

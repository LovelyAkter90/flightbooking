import React from "react";
import Container from "@mui/material/Container";
import "./style.css";
import img4 from "../../images/map2.jpg";
import img5 from "../../images/pic1.jpg";
import img6 from "../../images/pic2.jpg";
import Button from "@mui/material/Button";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import CountUp from "react-countup";

const About = () => {
  return (
    <div>
      <div className="about">
        <img src={img4} alt="" />
        <div className="about-overlay">
          <Container fixed>
            <div className="about-main">
              <div className="about-right">
                <div className="about-content">
                  <h4>You Will Get</h4>
                  <p>
                    Popular<span>Destination</span>
                  </p>
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Exercitationem, nihil incidunt totam voluptatem omnis
                    minima.
                  </h5>
                  <div className="about-btn">
                    <Button variant="contained">Read More</Button>
                  </div>
                </div>
              </div>
              <div className="about-left">
                <picture>
                  <img src={img5} alt="p" />
                  <div className="about-left-text">
                    <h4>London-Rome</h4>
                    <span>Departure: 17:50pm</span>
                    <p>Arrival: 5:00am</p>
                  </div>
                  <div className="about-icon">
                    <BsArrowLeftCircle />
                  </div>
                </picture>
              </div>
              <div className="about-left">
                <picture>
                  <img src={img6} alt="p" />
                  <div className="about-left-text">
                    <h4>Venis-Paris</h4>
                    <span>Departure: 12:50pm</span>
                    <p>Arrival: 15:00pm</p>
                  </div>
                  <div className="about-icon2">
                    <BsArrowRightCircle />
                  </div>
                </picture>
              </div>
            </div>
            <div className="about-main-2">
              <div className="about-items">
                <h4>Clients</h4>
                <div
                  style={{
                    fontSize: "40px",
                    color: "#ffff",
                    textAlign: "center",
                  }}
                >
                  <CountUp start={0} end={25000} duration={3} />
                </div>
              </div>
              <div className="about-items">
                <h4>Online</h4>
                <div
                  style={{
                    fontSize: "40px",
                    color: "#ffff",
                    textAlign: "center",
                  }}
                >
                  <CountUp start={0} end={8000} duration={3} />
                </div>
              </div>
              <div className="about-items">
                <h4>Inter City</h4>
                <div
                  style={{
                    fontSize: "40px",
                    color: "#ffff",
                    textAlign: "center",
                  }}
                >
                  <CountUp start={0} end={100} duration={3} />
                </div>
              </div>
              <div className="about-items">
                <h4>Discout</h4>
                <div
                  style={{
                    fontSize: "40px",
                    color: "#ffff",
                    textAlign: "center",
                  }}
                >
                  <CountUp start={0} end={100} duration={3} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default About;

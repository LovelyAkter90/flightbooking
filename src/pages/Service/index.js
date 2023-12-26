import React from "react";
import Container from "@mui/material/Container";
import img9 from "../../images/b.avif";
import img2 from "../../images/flight.jpg";
import { TbArmchair } from "react-icons/tb";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsSafe2 } from "react-icons/bs";
import { MdOutlinePriceCheck } from "react-icons/md";

const Service = () => {
  return (
    <>
      <div>
        <div className="service-header">
          <img src={img9} alt="" />
          <Container fixed>
            <div className="service-main">
              <div className="service-left">
                <h3>We Provide The Best Service Of The World</h3>
              </div>
              <div className="service-right">
                <div className="service-2">
                  <picture>
                    <img src={img2} alt="" />
                  </picture>
                </div>
                <div className="service-1">
                  <div className="service-card">
                    <div className="service-icon">
                      <TbArmchair />
                    </div>
                    <h4>Luxury And Comfort</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere quo molestiae necessitatibus? Architecto, eius
                      dolore?
                    </p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <AiOutlineSchedule />
                    </div>
                    <h4>Personal Schedule</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere quo molestiae necessitatibus? Architecto, eius
                      dolore?
                    </p>
                  </div>
                </div>
                <div className="service-1">
                  <div className="service-card">
                    <div className="service-icon">
                      <MdOutlinePriceCheck />
                    </div>
                    <h4>Reasonable Price</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere quo molestiae necessitatibus? Architecto, eius
                      dolore?
                    </p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <BsSafe2 />
                    </div>
                    <h4>Safty And Confidentialy</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere quo molestiae necessitatibus? Architecto, eius
                      dolore?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Service;

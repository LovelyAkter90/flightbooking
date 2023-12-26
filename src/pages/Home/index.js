import React from "react";
import "./style.css";
import { BsTelephoneFill } from "react-icons/bs";
import Container from "@mui/material/Container";
import img6 from "../../images/sale.png";
import img1 from "../../images/facebook.png";
import img2 from "../../images/insta.png";
import img3 from "../../images/you.png";
import img4 from "../../images/pin.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["World Travel"], // Strings to display
      startDelay: 100,
      typeSpeed: 200,
      backSpeed: 250,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: " |",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div>
        <div className="bg-img">
          <Container fixed>
            <div className="image">
              <div className="main-part">
                <div className="main-overlay">
                  <div className="bg-content">
                    <h1>
                      Are You Ready For<span ref={el}></span>
                    </h1>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Commodi qui alias nulla nobis non dolores ducimus debitis
                      delectus dolorem natus?
                    </p>
                    <div className="flight-search">
                      <button type="submit">Reservation</button>
                      <button type="submit">Search</button>
                    </div>
                  </div>
                  <div className="bg-icons">
                    <div className="icons-1">
                      <picture>
                        <img src={img1} />
                      </picture>
                    </div>
                    <div className="icons-1">
                      <picture>
                        <img src={img2} />
                      </picture>
                    </div>
                    <div className="icons-1">
                      <picture>
                        <img src={img3} />
                      </picture>
                    </div>
                    <div className="icons-1">
                      <picture>
                        <img src={img4} />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="flight-last">
                  <div className="last-1">
                    <span>
                      <BsTelephoneFill />
                      12398765637
                    </span>
                  </div>
                  <div className="last-2">
                    <img src={img6} alt="" />
                  </div>
                  <div className="last-3">
                    <span>TravelAsia@gmail.com</span>
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

export default Home;

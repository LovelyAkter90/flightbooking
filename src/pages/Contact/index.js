import React from "react";
import img10 from "../../images/r.jpg";
import { Container } from "@mui/material";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import img1 from "../../images/r1.jpg";
import img2 from "../../images/r2.jpg";
import img3 from "../../images/r3.jpg";
import img4 from "../../images/r4.jpg";
import img5 from "../../images/r5.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="contact-img">
          <img src={img10} alt="" />
        </div>
        <Container fixed>
          <div className="contact-header">
            <div className="contact-items">
              <h3>Download Our Mobile App Now</h3>
              <p>
                Download Our Mobile App For The Fastest,Most of The Convenient
                Way To Recharge & Bill Payment,Booking And More...
              </p>
              <div className="contact-btn">
                <button type="button">
                  <AiFillApple />
                  App Store
                </button>
                <button type="button">
                  <BsGooglePlay />
                  Play Store
                </button>
              </div>
            </div>
          </div>
          <div className="contact-mid">
            <div className="contact-logo">
              <h4>Our Partners</h4>
              <div className="logo-1">
                <div className="logo-items">
                  <img src={img1} alt="" />
                </div>
                <div className="logo-items">
                  <img src={img2} alt="" />
                </div>
                <div className="logo-items">
                  <img src={img3} alt="" />
                </div>
                <div className="logo-items-2">
                  <img src={img4} alt="" />
                </div>
                <div className="logo-items-2">
                  <img src={img5} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="contact-last">
            <div className="last-1">
              <h4>Services</h4>
              <p>
                <li>
                  <a href="#">Flight Booking</a>
                </li>
              </p>
              <p>
                <li>
                  <a href="#">Hotel Booking</a>
                </li>
              </p>
              <p>
                <li>
                  <a href="#">Bus Reservation</a>
                </li>
              </p>
              <p>
                <li>
                  <a href="#">Lowest Price</a>
                </li>
              </p>
            </div>
            <div className="last-1">
              <h4>Pages</h4>
              <p>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </p>
              <p>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </p>
              <p>
                <li>
                  <Link to="/service">Service</Link>
                </li>
              </p>
              <p>
                <li>
                  <Link to="/Reservation">Reservation</Link>
                </li>
              </p>
              <p>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </p>
            </div>
            <div className="last-1">
              <h4>For Supporting</h4>
              <p>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </p>
              <p>
                <li>
                  <a href="#">Support</a>
                </li>
              </p>
              <p>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </p>
              <p>
                <li>
                  <a href="#">Help</a>
                </li>
              </p>
            </div>
            <div className="last-1">
              <h4>Polics</h4>
              <p>
                <li>
                  <a href="#">Privacy Policis</a>
                </li>
              </p>
              <p>
                <li>
                  <a href="#">Terms & Conditions </a>
                </li>
              </p>
            </div>
            <div className="last-2">
              <h4>Subscribe</h4>
              <input type="email" placeholder="Your Email Address" />
              <FaTelegramPlane />
              <p>Subscribe to receive for the latest updates </p>
              <div className="last-1-btn">
                <button type="button">Sign Up</button>
                <button type="button">Log In</button>
              </div>
            </div>
          </div>
          <div className="last-3">
            <p>Copyright @2023 Traveling. All Rights Reserved</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/system";
import img2 from "../../images/logo.png";
import "./style.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div class="div1">
        <Container fixed>
          <nav class="nav1">
            <div className="content">
              <div className="logo">
                <picture>
                  <img src={img2} alt="" />
                </picture>
              </div>
              <div class="nav">
                <ul>
                  <li>
                    <NavLink to="/" class="h1">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" class="h1">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service" class="h1">
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Reservation" class="h1">
                      Reservation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" class="h1">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="search-box">
                <BiSearchAlt2 />
                <p>Search Here...</p>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
};
export default Navbar;

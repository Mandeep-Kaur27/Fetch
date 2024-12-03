import React, { useState } from 'react';
import { Fragment } from "react";
import Popup from "../../components/Popup";
import { ButtonIcon } from "../../svgIcon/svg"
import { FaBars, FaFacebookF, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen,] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <Fragment>
      <div className="header_top">
        <div className="top-bar">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-sm-6">
                <ul className="header-info mb-0 d-flex align-items-center list-unstyled">
                  <span className='d-flex'><FaRegEnvelope /> </span><li className='small-text'><a href="mailto:jonathan@fetchpetservice.com" target="blank">jonathan@fetchpetservice.com </a></li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="nav navbar-nav flex-row justify-content-end social-icons">
                  <li className="nav-item me-4 nav-link">
                    <a href="#hh">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#hh">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg light-bg">
          <div className="container">
            <div className="col-md-10">
              <button
                class="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content"
              >
                <div class="hamburger-toggle">
                  <FaBars className="hamburger" />
                </div>
              </button>
              <div className="collapse navbar-collapse justify-content-start" id="navbar-content">
                <ul className="nav navbar-nav flex-row align-items-center">
                  <li className="nav-item nav-link ps-0">
                    <a href="#home" className="nav-anchor">
                      Home
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#Our-Canine-Services " className="nav-anchor">
                      Our Canine Services
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#Our-Service-Areas" className="nav-anchor">
                      Our Service Areas
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#About-Us" className="nav-anchor">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <button className="common-btn w-85" target="blank" onClick={togglePopup}>
                <ButtonIcon />
              </button>
            </div>
          </div>
        </nav>
        {isOpen && < Popup
          handleClose={togglePopup}
        />}
      </div>
    </Fragment>
  );
};

export default Header;

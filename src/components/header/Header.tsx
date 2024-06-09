import React from "react";
import "./Header.css";
import { BsBag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import nikelogo3 from "/reactshoeecommerce/src/assets/nikelogo3.gif";
import { Navigate, useNavigate } from "react-router-dom";
import { SiJordan } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="tfcytcrjdc">
      <div className="website-top">
        <SiJordan
          onClick={() => {
            navigate("/reactshoeecommerce");
          }}
        />
        <nav>
          <ul className="website-top-heading">
            <li className="top-heading">Find a store |</li>
            <li
              className="top-heading"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Help |
            </li>
            <li className="top-heading">
              <CgProfile />{" "}
            </li>
            <li className="margin-of-hi-user">Hi User</li>
          </ul>
        </nav>
      </div>

      <div className="header-nav-bar">
        <img
          className="header-logo"
          src={nikelogo3}
          alt="nikelogo3"
          onClick={() => {
            navigate("/reactshoeecommerce");
          }}
        ></img>
        <nav>
          <ul className="header-nav-list">
            <li
              className="nav-list"
              onClick={() => {
                navigate("/mens");
              }}
            >
              Men
            </li>
            <li
              className="nav-list"
              onClick={() => {
                navigate("/women");
              }}
            >
              Women
            </li>
            <li className="nav-list">Kids</li>
            <li className="nav-list">Sale</li>
            <li className="nav-list">Customise</li>
          </ul>
        </nav>

        <nav className="header-cart">
          <ul className="header-cart-logo">
            <li className="list-search-bar">
              <input
                type="text"
                className="input-box"
                placeholder="Search Here"
              />
              <button className="search-button">
                <CiSearch />
              </button>
            </li>
            <li className="icon-customs">
              <IoMdHeartEmpty />
            </li>
            <li className="icon-custom">
              <BsBag />
            </li>
          </ul>
        </nav>
      </div>
      <div className="third-heading">SAVE upto 40%</div>
    </div>
  );
};

export default Header;

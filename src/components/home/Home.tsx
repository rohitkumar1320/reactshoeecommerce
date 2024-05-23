import React, { useEffect, useState } from "react";
import nikebody from "/reactshoeecommerce/src/assets/nikebody.jpg";
import nikehome1 from "/reactshoeecommerce/src/assets/nikehome1.gif";
import nikehome2 from "/reactshoeecommerce/src/assets/nikehome2.gif";
import nikehome5 from "/reactshoeecommerce/src/assets/nikehome5.gif";
import nikehome4 from "/reactshoeecommerce/src/assets/nikehome4.gif";
import nikecard from "/reactshoeecommerce/src/assets/nikecard.avif";
import nikecard1 from "/reactshoeecommerce/src/assets/nikecard1.avif";
import nikecard2 from "/reactshoeecommerce/src/assets/nikecard2.avif";
import nikecard3 from "/reactshoeecommerce/src/assets/nikecard3.avif";
import nikecard4 from "/reactshoeecommerce/src/assets/nikecard4.avif";
import nikecard5 from "/reactshoeecommerce/src/assets/nikecard5.avif";
import nikebottom from "/reactshoeecommerce/src/assets/nikebottom.jpeg";
import nikebottom1 from "/reactshoeecommerce/src/assets/nikebottom1.jpeg";
import nikebottom2 from "/reactshoeecommerce/src/assets/nikebottom2.jpeg";
import nikebottom3 from "/reactshoeecommerce/src/assets/nikebottom3.jpeg";
import nikebottom4 from "/reactshoeecommerce/src/assets/nikebottom4.jpeg";
import nikebottom6 from "/reactshoeecommerce/src/assets/nikebottom6.jpeg";
import trending from "/reactshoeecommerce/src/assets/trending3.jpeg";
import trendingone from "/reactshoeecommerce/src/assets/trending1.jpeg";
import trendingtwo from "/reactshoeecommerce/src/assets/trending2.jpeg";
// import walkingshoe from "/nike/src/assets/walkingshoe.gif";
import "./Home.css";
// import NikeVideo from "../../assets/nikevideo.mp4";

function Home() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img className="yoyotyoo" src={nikebody} alt="nike body"></img>
        <button className="button-styling">Buy</button>
      </div>
      <p className="title-for-home-main">
        <b />
        THE NEW COLLECTION OF THE NIKE
      </p>
      <div className="home-main-gifs">
        <img
          className="nike-home-logo-1"
          src={nikehome1}
          alt="nikehomelogo"
        ></img>
        <img
          className="nike-home-logo-1"
          src={nikehome2}
          alt="nikehomelogo"
        ></img>
        <img
          className="nike-home-logo-1"
          src={nikehome5}
          alt="nikehomelogo"
        ></img>
        <img
          className="nike-home-logo-1"
          src={nikehome4}
          alt="nikehomelogo"
        ></img>
      </div>

      <div className="grid-container">
        <div className="grid-sub-container">
          {" "}
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%",borderRadius:"10px" }}
            src={nikebottom}
            alt="nikehomelogo"
          ></img>
        </div>
        <div className="grid-sub-container">
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%",borderRadius:"10px" }}
            src={nikebottom3}
            alt="nikehomelogo"
          ></img>
        </div>
        <div className="grid-sub-container">
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%",borderRadius:"10px" }}
            src={nikebottom4}
            alt="nikehomelogo"
          ></img>
        </div>
        <div className="grid-sub-container">
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%",borderRadius:"10px" }}
            src={nikebottom2}
            alt="nikehomelogo"
          ></img>
        </div>
        <div className="grid-sub-container">
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%",borderRadius:"10px" }}
            src={nikebottom6}
            alt="nikehomelogo"
          ></img>{" "}
        </div>
      </div>
      <div>
        <h3 style={{ textAlign: "center", color: "grey" }}>YOUR FAVORITE</h3>
      </div>

      <div className="nike-cards">
        <img className="nike-card-one" src={nikecard} alt="nikecard"></img>
        <img className="nike-card-one" src={nikecard1} alt="nikecard"></img>
        <img className="nike-card-one" src={nikecard2} alt="nikecard"></img>
        <img className="nike-card-one" src={nikecard3} alt="nikecard"></img>
        <img className="nike-card-one" src={nikecard4} alt="nikecard"></img>
        <img className="nike-card-one" src={nikecard5} alt="nikecard"></img>
      </div>
      <div className="trending-topic">
        <p style={{ textAlign: "center", color: "grey" }}>
          <h3>Trending</h3>
        </p>
        <div className="trending-container">
          <img className="trending-one" src={trending} alt="shoeimage"></img>
          <img className="trending-one" src={trendingone} alt="shoeimage"></img>
          <img className="trending-one" src={trendingtwo} alt="shoeimage"></img>
        </div>
      </div>

      <p className="home-jorden-title">AIR JORDEN XXXVIII LOW</p>
      <p className="home-jorden-info">
        show 'em how you ball with the newest Air Jordan xxxviii Low. 'Alumni
        Blue' nods to the icons of collegiate
        <br />
        hoops history, with pops of blue across its all-black silhouette
      </p>
      <div className="shop-title-one">
        <div className="shop-title">
          <p>Shop</p>
        </div>
      </div>
      <div className="item-box-list">
        <ul className="item-box-list-one">
          <li>
            <h4>Icons</h4>
          </li>
          <li>Air Force 1</li>
          <li>Huarache</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>

        <ul className="item-box-list-one">
          <li>
            <h4>All Shoes</h4>
          </li>
          <li>All Shoes</li>
          <li>Customs Shoes</li>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
        </ul>

        <ul className="item-box-list-one">
          <li>
            <h4>Clothing</h4>
          </li>
          <li>All Clothing</li>
          <li>Modest Wear</li>
          <li>Hoodies & Pullovers</li>
          <li>Shirts & Tops</li>
        </ul>

        <ul className="item-box-list-one">
          <li>
            <h4>Kids</h4>
          </li>
          <li>Infant & Toddler Shoes</li>
          <li>Kids' Shoes</li>
          <li>Kids' Jordan Shoes</li>
          <li>Kids' Basketball Shoes</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

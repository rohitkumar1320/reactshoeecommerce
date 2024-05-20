import React from "react";
import nikemenone from "/reactshoeecommerce/src/assets/men1.jpeg";
import nikementwo from "/reactshoeecommerce/src/assets/men2.jpeg";
import nikementhree from "/reactshoeecommerce/src/assets/men3.jpeg";
import nikemenfour from "/reactshoeecommerce/src/assets/men4.jpeg";
import nikemenfive from "/reactshoeecommerce/src/assets/men5.jpeg";
import nikemensix from "/reactshoeecommerce/src/assets/men6.jpeg";
import mensneakersone from "/reactshoeecommerce/src/assets/speakers1.jpeg";
import mensneakerstwo from "/reactshoeecommerce/src/assets/speakers2.jpeg";
import mensneakersthree from "/reactshoeecommerce/src/assets/speakers3.jpeg";
import mensneakersfour from "/reactshoeecommerce/src/assets/speakers4.jpeg";
import mensneakersfive from "/reactshoeecommerce/src/assets/speakers5.jpeg";
import mensneakerssix from "/reactshoeecommerce/src/assets/speakers6.jpeg";
import nikemensbaner from "/reactshoeecommerce/src/assets/nikemenbaner.jpeg";
import nikemensbanertwo from "/reactshoeecommerce/src/assets/nikebanner2.jpeg";
// import videoone from "/nike//src/assets/nikevid2.mp4"
// import ReactPlayer from 'react-player'
// import {PLayer} from 'video-react';
import "./Mens.css";

function Mens() {
  return (
    <div>
      <div className="men-section">
        <p style={{ margin: "0px", marginTop: "20px", paddingLeft: "50px" }}>
          <b>MENS</b>
        </p>
        <div className="men-banner"style={{position:"relative",padding:"0px" , margin:"10px"}}>
          <img
            className="men-shoe-pic"
            src={nikemensbaner}
            alt="mensbaner"
          ></img>
          <button className="shop-button-hai-ok">
              Shop
            </button>
        </div>
      </div>
      <p style={{ paddingLeft: "50px", color: "grey" }}>
        <h2>Men Sports Shoes </h2>
      </p>
      <div className="mens-sports-shoe">
        <div>
          <img
            className="nike-home-logo-1"
            src={nikemenone}
            alt="nikesportshoe"
          ></img>
          <div>
          <p>nike sport shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
          </div>
        </div>
        <div>
          <img className="nike-men" src={nikementwo} alt="nikesportshoe"></img>
          <p>nike sport shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
        </div>
        <div>
          <img
            className="nike-men"
            src={nikementhree}
            alt="nikesportshoe"
          ></img>
          <div>
          <p>nike sport shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
          </div>
        </div>
        <div>
          <img className="nike-men" src={nikemenfour} alt="nikesportshoe"></img>
          <div>
          <p>nike sport shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
          </div>
        </div>
        <div>
          <img className="nike-men" src={nikemenfive} alt="nikesportshoe"></img>
          <div>
          <p>nike sport shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
          </div>
        </div>
        <div>
          <img className="nike-men" src={nikemensix} alt="nikesportshoe"></img>
          <div>
          <p>nike sport shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
          </div>
        </div>
      </div>
      <p style={{ paddingLeft: "50px", color: "grey" }}>
        <h2>Featured </h2>
      </p>
      <div>
        <div className="nike-banner-two">
          <div  style={{position:"relative", margin:"0px"}}>
          <img className="nike-poster" src={nikemensbanertwo} alt=""></img>
          <button className="shop-button-hai-ok">
              Shop
          </button>
          </div>
        </div>
      </div>
      <p style={{ paddingLeft: "50px", color: "grey" }}>
        <h2>Mens Sneakers</h2>
      </p>
      <div className="mens-sports-shoe">
        <div className="mens-sneakers-countainer">
          <img
            className="nike-men-sneakers"
            src={mensneakersone}
            alt="nikesneakers"
          ></img>
          <p>nike sneakers shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
        </div>
        <div className="mens-sneakers-countainer">
          <img
            className="nike-men-sneakers"
            src={mensneakerstwo}
            alt="nikesneakers"
          ></img>
          <p>nike sneakers shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
        </div>
        <div className="mens-sneakers-countainer">
          <img
            className="nike-men-sneakers"
            src={mensneakersthree}
            alt="nikesneakers"
          ></img>
          <p>nike sneakers shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
        </div>
        <div className="mens-sneakers-countainer">
          <img
            className="nike-men-sneakers"
            src={mensneakersfour}
            alt="nikesneakers"
          ></img>
          <p>nike sneakers shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
        </div>
        <div className="mens-sneakers-countainer">
          <img
            className="nike-men-sneakers"
            src={mensneakersfive}
            alt="nikesneakers"
          ></img>
          <p>nike sneakers shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
        </div>
        <div className="mens-sneakers-countainer">
          <img
            className="nike-men-sneakers"
            src={mensneakerssix}
            alt="nikesneakers"
          ></img>
          <p>nike sneakers shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
        </div>
      </div>

    </div>
  );
}

export default Mens;

import React from "react";
import nikemenone from "../../assets/men1.jpeg";
import nikementwo from "../../assets/men2.jpeg";
import nikementhree from "../../assets/men3.jpeg";
import nikemenfour from "../../assets/men4.jpeg";
import nikemenfive from "../../assets/men5.jpeg";
import nikemensix from "../../assets/men6.jpeg";
import mensneakersone from "../../assets/speakers1.jpeg";
import mensneakerstwo from "../../assets/speakers2.jpeg";
import mensneakersthree from "../../assets/speakers3.jpeg";
import mensneakersfour from "../../assets/speakers4.jpeg";
import mensneakersfive from "../../assets/speakers5.jpeg";
import mensneakerssix from "../../assets/speakers6.jpeg";
import nikemensbaner from "../../assets/nikemenbaner.jpeg";
import nikemensbanertwo from "../../assets/nikebanner2.jpeg";
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
        <div className="men-banner"style={{position:"relative", margin:"0px"}}>
          <img
            className="men-shoe-pic"
            src={nikemensbaner}
            alt="mensbaner"
          ></img>
          <button className="shop-button-hai"
              style={{
                position: "absolute",
                left: "47%",
                bottom:"7%",
                padding:"10px 20px",
                borderRadius:"30px"
              }}
            >
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
          <p>nike sport shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
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
          <p>nike sport shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
        </div>
        <div>
          <img className="nike-men" src={nikemenfour} alt="nikesportshoe"></img>
          <p>nike sport shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
        </div>
        <div>
          <img className="nike-men" src={nikemenfive} alt="nikesportshoe"></img>
          <p>nike sport shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
        </div>
        <div>
          <img className="nike-men" src={nikemensix} alt="nikesportshoe"></img>
          <p>nike sport shoe</p>
          <p>₹5000</p>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
      <div>
        <div className="nike-banner-two">
          <p>FEATURED</p>
          <div  style={{position:"relative", margin:"0px"}}>
          <img src={nikemensbanertwo} alt=""></img>
          <button className="shop-button-hai"
              style={{
                position: "absolute",
                left: "5%",
                bottom:"7%",
                padding:"10px 20px",
                borderRadius:"30px"
              }}
            >
              Shop
            </button>
          </div>
        </div>
      </div>
      <p style={{ paddingLeft: "50px", color: "grey" }}>
        <h2>Mens Sneakers</h2>
      </p>
      <div className="mens-sneakers">
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
      <div>
        {/* <Player>
      <source src="https://pin.it/5unGk5Yel" />
    </Player> */}
      </div>
    </div>
  );
}

export default Mens;
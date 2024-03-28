import React from "react";
import women from "../../assets/women.jpeg";
import womenone from "../../assets/women1.jpeg";
import womentwo from "../../assets/women2.jpeg";
import nikeoutfit from "../../assets/nikeoutfit.jpeg";
import nikeoutiftone from "../../assets/nikeoutfit1.jpeg";
import womenoutfit from "../../assets/womenoutfit.jpeg";
import womenoutfitone from "../../assets/womenoutfit1.jpeg";
import womenoutfittwo from "../../assets/womenoutfit2.jpeg";
import nikemenone from "../../assets/men1.jpeg";
import nikementwo from "../../assets/men2.jpeg";
import nikementhree from "../../assets/men3.jpeg";
import nikemenfour from "../../assets/men4.jpeg";
import nikemenfive from "../../assets/men5.jpeg";
import nikemensix from "../../assets/men6.jpeg";

import "./Women.css";
function Women() {
  return (
    <div>
      <div>
        <p style={{ padding: "10px", fontSize: "larger" }}>
          <b>WOMEN</b>
        </p>
        <div className="women-container">
          <img className="women-banner" src={women} alt="womenbaner"></img>
          <img className="women-banner" src={womenone} alt="womenbaner"></img>
          <img className="women-banner" src={womentwo} alt="womenbaner"></img>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ marginTop: "20px", marginBottom: "0px" }}>
            Feel the Unreal
          </p>
          <p style={{ margin: "0px", fontSize: "5rem", wordSpacing: "5px" }}>
            <b>AIR MAX DN</b>
          </p>
          <p style={{ margin: "0px", marginBottom: "20px" }}>
            The next generation of Air technology is here
          </p>
          <div className="shop-title shoptwo">
            <p style={{ marginBottom: "20px" }}>Shop</p>
          </div>
        </div>
        <p style={{ paddingLeft: "20px", fontSize: "25px", color: "grey" }}>
          <b>Featured</b>
        </p>
        <div className="outfit-container">
          <img className="women-dress" src={nikeoutfit} alt="nikewomen"></img>
          <img
            className="women-dress"
            src={nikeoutiftone}
            alt="nikewomen"
          ></img>
        </div>
        <p style={{ paddingLeft: "20px", fontSize: "25px", color: "grey" }}>
          <b>Trending</b>
        </p>
        <div className="women-out-fit" >
          <div style={{ position: "relative" }}>
            <img className="womenfit" src={womenoutfit} alt="nikewomen"></img>
            <button
              className="shop-button-hai"
              style={{
                position: "absolute",
                left: "5%",
                bottom: "7%",
              }}
            >
              Shop
            </button>
          </div>
          <div style={{ position: "relative" }}>
            <img
              className="womenfit"
              src={womenoutfitone}
              alt="nikewomen"
            ></img>
            <button
              className="shop-button-hai"
              style={{
                position: "absolute",
                left: "5%",
                bottom: "7%",
              }}
            >
              Shop
            </button>
          </div>
          <div style={{ position: "relative" }}>
            <img
              className="womenfit"
              src={womenoutfittwo}
              alt="nikewomen"
            ></img>
            <button
              className="shop-button-hai"
              style={{
                position: "absolute",
                left: "5%",
                bottom: "7%",
              }}
            >
              Shop
            </button>
          </div>
        </div>
        <p style={{ paddingLeft: "50px", color: "grey" }}>
          <h2> Sports Shoes </h2>
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
            <img
              className="nike-men"
              src={nikementwo}
              alt="nikesportshoe"
            ></img>
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
            <img
              className="nike-men"
              src={nikemenfour}
              alt="nikesportshoe"
            ></img>
            <p>nike sport shoe</p>
            <p>₹5000</p>
            <button>-</button>
            <button>+</button>
          </div>
          <div>
            <img
              className="nike-men"
              src={nikemenfive}
              alt="nikesportshoe"
            ></img>
            <p>nike sport shoe</p>
            <p>₹5000</p>
            <button>-</button>
            <button>+</button>
          </div>
          <div>
            <img
              className="nike-men"
              src={nikemensix}
              alt="nikesportshoe"
            ></img>
            <p>nike sport shoe</p>
            <p>₹5000</p>
            <button>-</button>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Women;

import React from "react";
import women from "/reactshoeecommerce/src/assets/women.jpeg";
import womenone from "/reactshoeecommerce/src/assets/women1.jpeg";
import womentwo from "/reactshoeecommerce/src/assets/women2.jpeg";
import nikeoutfit from "/reactshoeecommerce/src/assets/nikeoutfit.jpeg";
import nikeoutiftone from "/reactshoeecommerce/src/assets/nikeoutfit1.jpeg";
import womenoutfit from "/reactshoeecommerce/src/assets/womenoutfit.jpeg";
import womenoutfitone from "/reactshoeecommerce/src/assets/womenoutfit1.jpeg";
import womenoutfittwo from "/reactshoeecommerce/src/assets/womenoutfit2.jpeg";
import nikemenone from "/reactshoeecommerce/src/assets/men1.jpeg";
import nikementwo from "/reactshoeecommerce/src/assets/men2.jpeg";
import nikementhree from "/reactshoeecommerce/src/assets/men3.jpeg";
import nikemenfour from "/reactshoeecommerce/src/assets/men4.jpeg";
import nikemenfive from "/reactshoeecommerce/src/assets/men5.jpeg";
import nikemensix from "/reactshoeecommerce/src/assets/men6.jpeg";

import "./Women.css";
function Women() {
  return (
    <div>
      <div>
        <p style={{ fontSize: "larger", marginLeft:"20px" }}>
          <b>WOMEN</b>
        </p>
        <div className="women-container">
          <div className="women-container-one">
          <img className="women-banner"  style={{borderRadius:"10px"}} src={women} alt="womenbaner"></img>
          <img className="women-banner"  style={{borderRadius:"10px"}} src={womenone} alt="womenbaner"></img>
          <img className="women-banner"  style={{borderRadius:"10px"}} src={womentwo} alt="womenbaner"></img>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ marginTop: "20px", marginBottom: "0px" }}>
            Feel the Unreal
          </p>
          <p style={{ margin: "0px", fontSize: "x-large", wordSpacing: "5px" }}>
            <b>AIR MAX DN</b>
          </p>
          <p style={{ margin: "0px", marginBottom: "20px" }}>
            The next generation of Air technology is here
          </p>
          <div>
            <button className="shop-title-shoptwo">Shop</button>
          </div>
        </div>
        <p style={{ marginLeft: "20px", fontSize: "large", color: "grey" }}>
          <b>Featured</b>
        </p>
        <div className="outfit-container">
          <img className="women-dress"  style={{borderRadius:"10px"}}  src={nikeoutfit} alt="nikewomen"></img>
          <img className="women-dress" style={{borderRadius:"10px"}}  src={nikeoutiftone} alt="nikewomen"></img>
        </div>
        <p style={{ paddingLeft: "20px", fontSize: "large", color: "grey" }}>
          <b>Trending</b>
        </p>
        <div className="women-out-fit" >
          <div style={{ position: "relative" }}>
            <img className="womenfit" src={womenoutfit} alt="nikewomen"></img>
            <button
              className="shop-button-hai"
              style={{
                backgroundColor:"black",
                color:"white",
                borderRadius:"10px",
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
                backgroundColor:"black",
                color:"white",
                borderRadius:"10px",
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
                backgroundColor:"black",
                color:"white",
                borderRadius:"10px",
                position: "absolute",
                left: "5%",
                bottom: "7%",
              }}
            >
              Shop
            </button>
          </div>
        </div>
        <p style={{ paddingLeft: "20px", fontSize: "small", color: "grey" }}>
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

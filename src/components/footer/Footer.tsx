import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div
        className="footer-main-container"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#111",
        }}
      >
        <div className="footer-box-item" style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <ul style={{ listStyle: "none", lineHeight: "2",color: "#cccccc" }}>
              <li><b>Find a Store</b></li>
              <li><b>Become a Member</b></li>
              <li><b>Send Us Feedback</b></li>
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <ul style={{ listStyle: "none", lineHeight: "2",color: "#cccccc"}}>
              <li><b>GET HELP</b></li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Option</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <ul style={{ listStyle: "none", lineHeight: "2",color: "#cccccc" }}>
              <li><b>ABOUT NIKE</b></li>
              <li>News</li>
              <li>Careers</li>
              <li>Investorsk</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div style={{ display:"flex", justifyContent:"flex-end", flex: 2 ,color:"#cccccc"}}>
            <div className="footer-icons" style={{paddingRight:"20px" }} >
              <AiFillTwitterCircle style={{padding:"10px", fontSize:"30px", marginTop:"20px" }} />
              <MdFacebook  style={{padding:"10px", fontSize:"30px"}} />
              <TfiYoutube  style={{padding:"10px", fontSize:"30px"}} />
              <GrInstagram  style={{padding:"10px", fontSize:"30px"}} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

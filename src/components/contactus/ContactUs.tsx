import React from "react";
import { CiSearch } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import "./ContactUs.css"

function ContactUs() {
  return (
    <div>
      <h1 style={{textAlign:"center", fontWeight:"normal"}}>GET HELP </h1>
      <div className="search-here">
      <p>
        <input type="text"className="input-here"placeholder="What can we help you?"/>
      <button className="search-here-button">
      <CiSearch />
       </button>
       </p>
      </div>
      <div style={{margin:"20px"}}>
        <p style={{margin:"0px", fontSize:"2rem",}}><b>Quick assists</b></p>
        <p style={{margin:"0px", color:"grey"}}>Answers to our frequently asked question are just one click away.</p>
      </div>
      <div className="quick-assists-container">
           <div className="assists-container">
            <ul style={{listStyle:"none"}}>
              <li>Dispact & delivery</li>
              <li style={{ color:"grey"}}>What are Nike's delivery options?</li>
              <li style={{ color:"grey"}}>Can my Nike order be dispatched internationally?</li>
              <li style={{ color:"grey"}}>Does my Nike order need to clear customs?</li>
            </ul>
           </div>
           <div className="assists-container">
            <ul style={{listStyle:"none"}}>
              <li>Returns</li>
              <li style={{ color:"grey"}}>How do i return my Nike order</li>
              <li style={{ color:"grey"}}>What is Nike's returns policy?</li>
              <li style={{ color:"grey"}}>Where is my refund? </li>
            </ul>
           </div>
           <div className="assists-container">
            <ul style={{listStyle:"none"}}>
              <li>Nike Membership</li>
              <li style={{ color:"grey"}}>What is Nike Membership?</li>
              <li style={{ color:"grey"}}>How do i beconne a Nike Membership?</li>
              <li style={{ color:"grey"}}>How do i get the most out of NRC and NTC?</li>
            </ul>
           </div>
           <div className="assists-container">
            <ul style={{listStyle:"none"}}>
              <li>Orders</li>
              <li style={{ color:"grey"}}>Where is my Nike order?</li>
              <li style={{ color:"grey"}}>Can is cancel or change my Nike order?</li>
              <li style={{ color:"grey"}}>What are Nike's payment options?</li>
            </ul>
           </div>
           <div className="assists-container">
            <ul style={{listStyle:"none"}}>
              <li>Product info</li>
              <li style={{ color:"grey"}}>How do i get Nike's newest sneakers releases?</li>
              <li style={{ color:"grey"}}>How do i find the right size and fit?</li>
              <li style={{ color:"grey"}}>What is the Nike by your personalisation ploicy?</li>
              <li style={{ color:"grey"}}>Do Nike shoes have a warrenty?</li>
            </ul>
           </div>
           <div className="assists-container">
            <ul style={{listStyle:"none"}}>
              <li>Corporate</li>
              <li style={{ color:"grey"}}>Where can i learn more about Nike,?</li>
              <li style={{ color:"grey"}}>Where is the  nike store Closest to me?</li>
            </ul>
           </div>
      </div>
      <p style={{paddingLeft:"20px"}}><b>Contact US</b></p>
      <div className="contact-us-countainer">
          <div style={{ color:"grey"}}><BiMessageDetail style={{fontSize:"30px"}}/><br/>24 hours a days<br/>7 days a week</div>
          <div style={{ color:"grey"}}><IoPhonePortraitOutline style={{fontSize:"30px"}}/><br/>000 800 919 0566<br/>
Products & Orders: 03:30 - 21:30, 7 days a week<br/>
Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</div>
          <div style={{ color:"grey"}}><GoMail style={{fontSize:"30px"}}/><br/>We'll reply within<br/>five business days</div>
          <div style={{ color:"grey", paddingBottom:"20px"}}><SlLocationPin style={{fontSize:"30px"}}/><br/>store locator</div>
      </div>
    </div>
  );
}

export default ContactUs;

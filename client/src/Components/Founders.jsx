import React from "react";
import './Founder.css';


const FooterPage = () => {
  return (
      <div class="footy">
    <div>
        <div class="col1">
        <h2>Company</h2>
        <ul element id="align">
        <p>About</p>
        <p>Mission</p>
        <p>Services</p>
        <p>Social</p>
        <p>Get in touch</p>
        </ul>
    </div>
    <div class="col2">
    <h2> Search</h2>
        <ul>
            <p>users</p>
            <p>Organizations</p>
            <p>Donors</p>
        </ul>
        </div>
     <div class="col3">
         <h2>Know Us</h2>
         <ul>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Partner With Us</p>
            <p>Contact Us</p>
            </ul>
            </div>
      <div class="col4">
            <h2>Community</h2>
            <ul>
            <p>Community Resources</p>
            <p>Tools</p>
            </ul>
            </div>
       <div class="col5">
            <h2>Link</h2>
            <ul element id="align">
              <p><a href="#!">Home</a></p>
              <p><a href="#!">About</a> </p>
              <p><a href="#!">Contact Us</a></p>
            </ul>
         </div>
        
      <div className="footer-copyright text-center py-3"></div>
        </div>
        </div>
  );
}

export default FooterPage;


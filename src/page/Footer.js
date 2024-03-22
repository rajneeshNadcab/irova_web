import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="ch-device-restricted--desktop">
        <ul class="ch-footer-links ch-avatar-group-block">
          <li>
            <Link to="/privacy">privacy</Link>
          </li>
          <li>
            <Link to="/terms">terms</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <a href="https://twitter.com/ghostmsg" target="_blank">
             
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ghostmsg/" target="_blank">
            <i class="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div class="ch-copyright ch-avatar-group-block">
        <a href="/investor" style={{color:'black',textDecoration:'none',paddingRight:'5px'}}><span class="ch-copyright-year"> Investor</span> </a> 

           <a href="/advertise" style={{color:'black',textDecoration:'none',paddingRight:'5px'}}><span class="ch-copyright-year"> Advertise</span> </a> 
          © <span class="ch-copyright-year">2023</span> Cork Labs Ltd.
        </div>
      </footer>
      <div id="avatar-groups">
        <div class="ch-avatar-group-block"></div>
      </div>
    </>
  );
};

export default Footer;

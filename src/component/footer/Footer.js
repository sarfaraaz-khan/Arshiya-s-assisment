import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedn from "../../assets/linkedn.png";
import youtube from "../../assets/instagram.png";
import Visa from "../../assets/Visa.png";
import PayPal from "../../assets/PayPal.png";
import Mastercard from "../../assets/Mastercard.png";
import Amex from "../../assets/Visa.png";
import ApplePay from "../../assets/ApplePay.png";

function Footer() {
  return (
    <footer>
      <div className="textContainer">
        <div className="listContainer">
          <div className="about">
            <h5>About</h5>
            <ul className="footlist">
              <li>About us</li>
              <li>Contact us</li>
              <li>For suppliers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="help">
            <h5>Help</h5>
            <ul className="footlist">
              <li>About us</li>
              <li>Contact us</li>
              <li>For suppliers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="social">
          <h5>Follow us</h5>
          <div className="soclogo">
            <img src={instagram} />
            <img src={facebook} />
            <img src={linkedn} />
            <img src={youtube} />
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <div></div>
        <div className="copyright">
          <span>©️ 2022 Brand name</span>
        </div>
        <div className="payment">
          <img src={Visa} />
          <img src={Amex} />
          <img src={Mastercard} />
          <img src={PayPal} />
          <img src={ApplePay} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

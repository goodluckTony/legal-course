
import "./Footer.scss";
import MailForm from "./../MailForm";
import { Routes, Route, Link, NavLink } from "react-router-dom";

import SafetyDataTrans from "../../pages/safety-data-trans";

const Footer = () => {
  return (
    <div className="footer-container container">
      <div className="top-container">
        <MailForm />
        <div className="title-box">
          <h2>Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-box">
          <div className="left-box">
            <NavLink to="/legal-course/safety-data-transfer">Safety data transfer</NavLink>
            <p>Money back</p>
            <p>Privacy</p>
            <p>Public contract</p>
          </div>
          <Routes>
            <Route path="/legal-course/safety-data-transfer" Component={SafetyDataTrans}/>
          </Routes>
          <div className="middle-box">
            <p>Copyright 2023</p>
          </div>
          <div className="right-box">
            <div className="svg-box">
              <div className="telegram-svg"></div>
              <div className="viber-svg"></div>
              <div className="fb-svg"></div>
            </div>
            <a className="mail" href="mailto:mlobacov@gmail.com">Loremail@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
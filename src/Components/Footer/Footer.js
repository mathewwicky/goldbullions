import React from "react";
import { Row, Col } from "react-bootstrap";
import './Footer.css'

const Footer = () => {
  return (
    <div >
      <footer className="footer fixed" >
        <Row className="footer-div">
          <Col sm={6}>
            <img src="/images/goldbullionslogo.png" alt="logo" width="75%" className="footer-icon"></img>
          </Col>

          <Col md>

            <h5 className="footerheading">Product</h5>
            <div className="footertext">
              <p>Gold Coin Sales</p>
              <p>GoldInvestmentPlans</p>
              <p>MarketAnalysis,Insights</p>
              <p></p>

            </div>
          </Col>

          <Col md>
            <h5 className="footerheading">Company</h5>
            <div className="footertext">
              <a href="/about" className="text-decoration-none" style={{ color: "#DEDEDE" }}><p>About Us</p></a>
              <a href="/FAQs" className="text-decoration-none" style={{ color: "#DEDEDE" }}><p>FAQs</p></a>
              <a href="/contactus" className="text-decoration-none" style={{ color: "#DEDEDE" }}><p>Contact Us</p></a>

            </div>
          </Col>
          <Col md>
            <h5 className="footerheading">Follow Us</h5>
            <div className="footertext">
              <p>LinkedIn</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>YouTube</p>

            </div>
          </Col>
          <div style={{ marginTop: "5%", padding: "0" }}>
            <hr className="divider"></hr>
            <Row className="footertext">
              <Col sm={9} className="copyright-column">
                <h6 className="privacy"><a href="/privacypolicy" className="text-decoration-none" style={{ color: "#DEDEDE" }}>Privacy Policy</a> &nbsp;|&nbsp; <a href="/terms" className="text-decoration-none" style={{ color: "#DEDEDE" }}>Terms & Conditions</a> </h6>
              </Col>
              <Col >
                <p>&copy; GoldBullionsInc.{(new Date().getFullYear())}</p>
              </Col>
            </Row>
          </div>
        </Row>
      </footer>
    </div>

  );
};

export default Footer;
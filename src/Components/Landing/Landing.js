import React from "react";
import { Container } from "react-bootstrap";
import Navigationbar2 from "../Navigation/Navigationbar2";
import "./Landing.css"
const Landing = () => {
  return (
    <div>
      <div className="bg-image image vh-100 shadow-1-strong">
        <video className="w-100 bgvideo" autoPlay loop playsInline muted style={{ minHeight: "100vh" }}>
          <source
            src="/assets/goldcoins.mp4"
            type="video/mp4"
            allowFullScreen
          />
        </video>
        <div className='mask' style={{
          // minHeight: "100vh", background:
          //   "linear-gradient(to bottom, rgba(4,22,57,0.6), rgba(11,34,117,0.6))"

        }}>
          <Container style={{ height: "100vh", marginTop: "3%" }} className="mskcontainer">
            <Navigationbar2 />
            <div className="mt-3 worksans lheading">
              <p>Investing in Gold,  <br /> Shaping Your Future <br /> <span className="spantext">Financial Brilliance</span> </p>
            </div>
            <div className="mt-2" style={{ lineHeight: "32px", fontSize: "24px", fontWeight: "400" }}>
              <p className="text-white aeonik fw-100 ltxt">Secure, Invest, Prosper, and Track Your Gold. We Equip Your Financial Journey.</p>
            </div>

            <div
              style={{
              }}>
              <div className="d-flex gap-2">
                {/* <button className="bttns bttn text-nowrap w-auto">Get Started</button> */}
                {/* <button className="bttn3 text-nowrap demo bttns d-flex gap-2 w-auto">
                 <img src="/images/play-circle.png" alt="playbutton" width="22px" height="22px"/>
                  Request a Demo</button> */}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>

  );
};

export default Landing;

import React from "react";
import "./Product.css"
import { Container, Row, Col } from "react-bootstrap";
const BusinessAnalytics = () => {
    return (
        <>
            <Container className="body mb-0">
                <Row>
                    <Col md>
                        <img src="/images/market.png" width="90%" height="90%" alt="invoiceimage"  />
                    </Col>
                    <Col md >
                        <h2 className="itxt worksans">Provide regular updates and analysis on the gold market</h2>
                        
                        <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M12 2.5C6.49 2.5 2 6.99 2 12.5C2 18.01 6.49 22.5 12 22.5C17.51 22.5 22 18.01 22 12.5C22 6.99 17.51 2.5 12 2.5ZM16.78 10.2L11.11 15.87C10.97 16.01 10.78 16.09 10.58 16.09C10.38 16.09 10.19 16.01 10.05 15.87L7.22 13.04C6.93 12.75 6.93 12.27 7.22 11.98C7.51 11.69 7.99 11.69 8.28 11.98L10.58 14.28L15.72 9.14C16.01 8.85 16.49 8.85 16.78 9.14C17.07 9.43 17.07 9.9 16.78 10.2Z" fill="#9CD323" />
                            </svg>
                        <p className="itxt3 aeonik" > Our team of expert analysts closely monitors the global gold market. We provide you with up-to-date information, comprehensive market reports, and valuable insights, empowering you to make well-informed decisions on your gold investments..</p>
                        </div>
                        <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M12 2.5C6.49 2.5 2 6.99 2 12.5C2 18.01 6.49 22.5 12 22.5C17.51 22.5 22 18.01 22 12.5C22 6.99 17.51 2.5 12 2.5ZM16.78 10.2L11.11 15.87C10.97 16.01 10.78 16.09 10.58 16.09C10.38 16.09 10.19 16.01 10.05 15.87L7.22 13.04C6.93 12.75 6.93 12.27 7.22 11.98C7.51 11.69 7.99 11.69 8.28 11.98L10.58 14.28L15.72 9.14C16.01 8.85 16.49 8.85 16.78 9.14C17.07 9.43 17.07 9.9 16.78 10.2Z" fill="#9CD323" />
                            </svg>
                        <p className="itxt3 aeonik" >Investing in gold requires a deep understanding of market dynamics. Count on us to help you navigate through the volatility, providing you with strategies and recommendations to optimize your investment portfolio during changing economic conditions. </p>
                        </div>
                        {/* <button className="p-2 buttn aeonik">Track Now <img src="/images/arrow-right.png" alt="arrow-right" width="45px" height="45px" className="icn"/></button> */}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BusinessAnalytics;
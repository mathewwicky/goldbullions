import React from "react";
import "../Product.css"
import { Container, Row, Col } from "react-bootstrap";
const InvoiceFinance = () => {
    return (
        <>
            <Container className="body mb-0">
                <Row>
                    <Col md>
                        <img src="/images/invoice.png" width="90%" height="90%" alt="invoiceimage"  />
                    </Col>
                    <Col md >
                        <div className="d-flex gap-4">
                            <img src="/images/Line5.png" alt="#" height="2px" style={{marginTop:"2%"}} />
                            <h2 className="itxt6"> Gold Investment Plans</h2>
                        </div>

                        <p className="itxt2 worksans">Gold Investment Plans</p>
                        <p className="itxt3 aeonik" >Offer personalized consultations with experienced investment experts who can assess clients' financial situations and goals. Provide tailored advice on building and diversifying a gold coin investment portfolio. These consultations can help clients make informed decisions and optimize their investments for maximum returns. </p>
                        {/* <button className="p-2 buttn aeonik">Contact Us Now <img src="/images/arrow-right.png" alt="arrow-right" width="45px" height="45px" className="icn"/></button> */}
                        <a href="/contactus" className="text-decoration-none" style={{ color: "#DEDEDE" }}><button className="p-2 buttn aeonik">Contact Us Now <img src="/images/arrow-right.png" alt="arrow-right" width="45px" height="45px" className="icn"/></button></a>

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default InvoiceFinance;
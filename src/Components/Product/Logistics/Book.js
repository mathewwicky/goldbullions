import React from "react";
import "../Product.css"
import { Container, Row, Col } from "react-bootstrap";
const Logistics= () => {
    return (
        <>
            <Container className="body mb-0">
                <Row>
                    <Col md>
                        <img src="/images/goldstones.png" width="90%" height="90%" alt="invoiceimage" />
                    </Col>
                    <Col md >
                        <div className="d-flex gap-4">
                            <img src="/images/Line5.png" alt="#" height="2px" style={{marginTop:"2%"}} />
                            <h2 className="itxt6">Gold Coins Sales</h2>
                        </div>

                        <p className="itxt2 worksans">Gold Coins</p>
                        <p className="itxt3 aeonik" >Provide a platform for clients to purchase a variety of gold coins from reputable mints and suppliers. Offer a user-friendly interface that allows them to browse, select, and purchase gold coins that match their investment goals and preferences. Ensure transparency in pricing and quality</p>
                        <a href="/contactus" className="text-decoration-none" style={{ color: "#DEDEDE" }}><button className="p-2 buttn aeonik">Contact Us Now <img src="/images/arrow-right.png" alt="arrow-right" width="45px" height="45px" className="icn"/></button></a>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Logistics;
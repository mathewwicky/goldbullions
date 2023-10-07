import React from "react"
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import "./Contact.css"
const Contact = () => {
    return (
        <>
            <Container className="body">
                <Row>
                    <Col md className="column1 mt-5">
                        <p className="worksans ctxt">Hey there <span className="cticon">👋🏻</span> 
                        </p>
                        <p className="ctxt spantext worksans">Let’s talk.</p>
                        <p className="ctxt4 fs-4 aeonik">Have questions about our Products or Services?Ask and let’s help you get started.</p>
                    </Col>
                    <Col md>
                        <Card className="p-4 formcard">
                            <p className="formcardtitle aeonik">Contact Us Form</p>
                            <p className="formcardtext aeonik">Fill the form to connect with our representative. If you are a customer, fill out the details as per your account information.</p>
                            <Form>
                                <Form.Group className="mb-3 aeonik">
                                    <Form.Label>Full name *</Form.Label>
                                    <Form.Control type="text" placeholder="Your fullname" />
                                    
                                </Form.Group>
                                <Row>
                                    <Col md><Form.Group className="mb-3 aeonik" controlId="formBasicEmail">
                                    <Form.Label>Work Email *</Form.Label>
                                    <Form.Control type="email" placeholder="Your business email" />
                                </Form.Group></Col>
                                <Col md><Form.Group className="mb-3 aeonik" >
                                    <Form.Label>Phone number *</Form.Label>
                                    <Form.Control type="text" placeholder="Your phone number" />
                                </Form.Group></Col>
                                </Row>
                                <Form.Group className="mb-3 aeonik" >
                                    <Form.Label>Type a message *</Form.Label>
                                    <Form.Control as="textarea"  placeholder="Tell us more about your project, needs, complaints, partnership..." style={{height:"152px"}} />
                                </Form.Group>
                                <Button className="formbutton p-2 aeonik" type="submit">
                                    Send message
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                    
                </Row>
                <Row className="questions">
                    <Col md className="p-0 text-white">
                    <p className="txt4">Still have questions?</p>
                    <p className="txt5">We are here to help</p>
                    </Col>
                    <Col md className="p-0 text-white d-flex gap-3">
                    <div>
                        <img src="/images/badge.png" alt="ic" width="40px" height="40px" className="phone-badge"></img>
                    </div>
                    <div>
                    <p className="txt4">+256 752 710 540</p>
                    <p className="txt5">WhatsApp or Call</p>
                    </div>
                    </Col>
                    <Col md className="p-0 text-white d-flex gap-3">
                        <div>
                            <img src="/images/badge2.png" alt="ic" width="40px" height="40px" className="phone-badge"></img>
                        </div>
                        <div>
                    <a href="mailto:info@credify.africa" className="txt4 t-email">info@goldbullions.com</a>
                    <p className="txt5">Support Email</p>
                    </div>
                    </Col>
                    <Col md className="text1">
                    {/* <button className="aeonik cbttn" style={{ backgroundColor: "#99C83C",
            color: "#FFF",}}>Chat with us</button> */}
                    </Col>
                    </Row>
            </Container>
        </>
    )
}
export default Contact;
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";
import "./About.css"
const About = () => {
    return (
        <>
            <Container fluid>
                <div className="about-heading">
                    <p className="worksans about-title">Empowering SMEs and individuals worldwide through gold coin investments</p>
                    <p className="about-subtitle aeonik mt-5">At Gold Bullions, our mission is to empower individuals and families to make informed decisions when it comes to investing in gold coins. We believe that gold offers a timeless and secure store of value, and we're here to make the process of acquiring and managing gold coins as accessible and straightforward as possible</p>
                </div>
                <div className="mt-5 img-container" style={{ maxHeight: "100vh", marginBottom: "8%" }}>
                    <img src="/images/gold.png" alt="#" width="100%" height="100%" className="abt-img"></img>
                    <div className="p-4" style={{
                        bottom: "15%", position: "relative"
                    }}>
                        {/* <img src="/images/Subtract.png" alt="#" width="116px" height="116px" className="icon" ></img> */}
                    </div>
                </div>
                <div className="about-heading">
                    <p className="worksans about-title"> <span className="spantext worksans">Revolutionizing gold investment </span> for a meaningful impact in the real world.</p>
                    <p className="about-subtitle aeonik mt-5">Gold investment isn't just about accumulating wealth; it's about leaving a meaningful impact on the real world. By choosing gold, you're safeguarding your financial future and contributing to a more secure global economy. </p>
                    <div className="mt-5 img-container" style={{ maxHeight: "100vh", marginBottom: "8%"}}>
                        <img src="/images/goldcurve.png" alt="#" width="110%" height="100%" className="abt-img"></img>
                        <div style={{
                            bottom: "109%",
                            float: "right",
                            position: "relative"
                        }}>
                            {/* <img src="/images/Union.png" alt="#" width="116px" height="116px" className="icon" ></img> */}
                        </div>
                    </div>
                </div>
            </Container>
            <Row style={{ width: "100%" }} className="values-row">
                <Col md={5}>
                        <img src="/images/handsake.png" alt="#" width="100%;" height="527px" className="ab-img"/>
                   
                </Col>

                <Col>
                        <p className="about-title worksans"> <span className="spantext worksans">The values</span> that drive everything we do</p>
                        <p className=" aeonik about-subtitle">At Gold Bullions, we are committed to revolutionizing gold investment, making it more accessible, secure, and profitable for investors worldwide.</p>
                  
                </Col>
            </Row>
            <div className="mt-5">
                <ProgressBar variant="success" now={30} className="progressbar" />
                <Row className="crdgroup2">
                    <Col md>
                    <Card className="crd3">
                            <Card.Img variant="top" src="/images/grid.png" className="cardimg1">
                            </Card.Img>
                            <Card.Body>
                                <Card.Title className="cardtitle aeonik text-left ">Integrity and transparency</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md>
                    <Card className="crd3">
                            <Card.Img variant="top" src="/images/grid1.png" className="cardimg1">
                            </Card.Img>
                            <Card.Body>
                                <Card.Title className="cardtitle aeonik text-left text-nowrap ">Customers first</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md>
                    <Card className="crd3">
                            <Card.Img variant="top" src="/images/grid2.png" className="cardimg1">
                            </Card.Img>
                            <Card.Body>
                                <Card.Title className="cardtitle aeonik text-left ">Collaboration</Card.Title>
                                
                            </Card.Body>
                        </Card>
                           
                    </Col>
                    <Col md>
                        <Card className="crd3">
                            <Card.Img variant="top" src="/images/grid3.png" className="cardimg1">
                            </Card.Img>
                            <Card.Body>
                                <Card.Title className="cardtitle aeonik text-left ">Teamwork</Card.Title>
                              
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>


            <div style={{ marginTop: "8%", marginBottom: "20%" }}>
                <p className="worksans about-title mt-5">Contact<span className="spantext"> Our Offices</span> <br /> around the world</p>
                <Row className="crdgroup">
                    <Col md className="crd2-div">
                        <Card className="crd2">
                            <Card.Img src="/images/ug-image.png">
                            </Card.Img>
                            <Card.ImgOverlay>
                                <Card.Text className="heading aeonik fs-6 fw-lighter" style={{ position: "absolute", bottom: 10, left: 20 }}>
                                    <span className="text-white float-bottom">Uganda<br/><span className="aeonik fs-6" style={{ color: "#FFB629" }}>Kampala</span></span>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <div className="text-center heading aeonik fs-6">
                            <p><b>Uganda</b><br/> <br />Kampala Road, Uganda</p>
                        </div>
                    </Col>
                    <Col md className="crd2-div">
                        <Card className="crd2">
                            <Card.Img src="/images/Nairobi.png">
                            </Card.Img>
                            <Card.ImgOverlay>
                                <Card.Text className="heading aeonik fs-6 fw-lighter" style={{ position: "absolute", bottom: 10, left: 20 }}>
                                    <span className="text-white float-bottom">Kenya <br />
                                    <span className="aeonik fs-6" style={{ color: "#FFB629" }}>Nairobi</span></span> 
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <div className="text-center heading aeonik fs-6">
                            <p><b>Kenya</b><br/><br />Kenya, Nairobi</p>
                        </div>
                    </Col>
                    <Col md className="crd2-div">
                        <Card className="crd2">
                            <Card.Img src="/images/usa-image.png">
                            </Card.Img>
                            <Card.ImgOverlay>
                                <Card.Text className="heading aeonik fs-6 fw-lighter" style={{ position: "absolute", bottom: 10, left: 20 }}>
                                    <span className="text-white float-bottom">USA <br/>
                                    <span className="aeonik fs-6" style={{ color: "#FFB629" }}>Delaware</span></span>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <div className="text-center aeonik heading fs-6">
                            <p><b>SouthAfrica</b><br/>  <br />SouthAfrica, Cape Town</p>
                        </div>
                    </Col>

                </Row>
            </div>
        </>
    )
}
export default About;
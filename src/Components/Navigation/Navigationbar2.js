import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Navigationbar.css"
const Navigationbar2 = () => {
    const location = useLocation();
    const activeKey = location.pathname;
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="shadow-none mb-3">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img src="/images/goldbullionslogo.png" alt="icon" className="n-icon n-icon-white"
                                style={{
                                    width: "183px",
                                    height: "46.35px",
                                    
                                }} />
                        </Navbar.Brand>
                        <Nav>
                            <button className="nav-bttn" style={{
                                backgroundColor: "#99C83C",
                                color: "#FFF",
                            }}>Get Started</button>
                        </Nav>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='navigbar navigbar2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                <path d="M20.3917 5.8335H1.60833C0.996218 5.8335 0.5 6.32971 0.5 6.94183V7.0585C0.5 7.67061 0.996218 8.16683 1.60833 8.16683H20.3917C21.0038 8.16683 21.5 7.67061 21.5 7.0585V6.94183C21.5 6.32971 21.0038 5.8335 20.3917 5.8335Z" fill="#6B6B6B" />
                                <path d="M20.3917 11.6666H1.60833C0.996218 11.6666 0.5 12.1628 0.5 12.775V12.8916C0.5 13.5037 0.996218 14 1.60833 14H20.3917C21.0038 14 21.5 13.5037 21.5 12.8916V12.775C21.5 12.1628 21.0038 11.6666 20.3917 11.6666Z" fill="#6B6B6B" />
                                <path d="M20.3917 0H1.60833C0.996218 0 0.5 0.496218 0.5 1.10833V1.225C0.5 1.83712 0.996218 2.33333 1.60833 2.33333H20.3917C21.0038 2.33333 21.5 1.83712 21.5 1.225V1.10833C21.5 0.496218 21.0038 0 20.3917 0Z" fill="#6B6B6B" />
                            </svg>
                        </Navbar.Toggle>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Navbar.Brand href="/">
                                    <img src='/images/credifylogo.jpg' alt='' className="n-icon"

                                    />
                                </Navbar.Brand>
                                <Nav>
                                    <button className="nav-bttn aeonik" style={{
                                        backgroundColor: "#014D85",
                                        color: "#FFF",
                                    }}>Get Started</button>
                                </Nav>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav activeKey={activeKey} className="me-auto navigation">
                                    <Nav.Link className="navlinks aeonik text-nowrap" as={Link} eventKey="/" to="/">Product</Nav.Link> &nbsp;&nbsp;
                                    <Nav.Link className="navlinks aeonik text-nowrap" as={Link} eventKey="/about" to="/about">About Us</Nav.Link> &nbsp;&nbsp;
                                    <Nav.Link className="navlinks aeonik text-nowrap" as={Link} eventKey="/contactus" to="/contactus" >Contact Us</Nav.Link> &nbsp;&nbsp;
                                    <Nav.Link className="aeonik navlinks faqs d-none " as={Link} eventKey="/FAQS" to="/FAQs">FAQs</Nav.Link> &nbsp;&nbsp;
                                </Nav>
                                <Nav>
                                    <button className="nav-bttn mobile-bttn aeonik d-none mt-5" style={{
                                        backgroundColor: "#014D85",
                                        color: "#FFF",
                                    }}>Get Started</button>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                    </Container>
                </Navbar>
            ))}
        </>
    )
}
export default Navigationbar2;
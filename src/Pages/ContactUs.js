import React from "react"
import { Container } from "react-bootstrap";
import Navigationbar from "../Components/Navigation/Navigationbar";
import Contact from "../Components/ContactUs/Contact";
import Footer from "../Components/Footer/Footer";
const ContactUs = () => {
    return (
        <>
            <Container style={{
                marginTop: "2%",
                background: "#FFF"
            }}>
                <Navigationbar />
                <Contact />
            </Container>
            <Footer />
        </>
    )
}
export default ContactUs;
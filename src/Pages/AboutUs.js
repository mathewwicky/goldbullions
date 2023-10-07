import React from "react"
import { Container } from "react-bootstrap";
import Navigationbar from "../Components/Navigation/Navigationbar";
import Footer from "../Components/Footer/Footer";
import About from "../Components/AboutUs/About";
const AboutUs = () => {
    return (
        <>
            <Container style={{
                marginTop: "2%",
                background: "#FFF"
            }}>
                <Navigationbar />
                <About />
            </Container>
            <Footer />
        </>
    )
}
export default AboutUs;
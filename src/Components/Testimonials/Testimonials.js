import React from "react";
import "./Testimonials.css"
import { Container } from "react-bootstrap";
// import TCards from "./TestimonialCards";
const Testimonials = () => {
    return (
        <>
            <Container className="body">
                {/* <p className="worksans ttxt">Hear what our <br /> <span className="spantext">clients</span> have to say</p>
                <p className=" aeonik txt2">Here are some testimonials from our users <br />after using Credify to manage their business</p>
                <TCards /> */}
                <div>
                    <img src="/images/gold1.jpg" alt="#" width="100%" height="90%" className="invoiceimg"></img>
                    <img src="/images/gold1.jpg" alt="#" width="100%" height="90%" className="invoiceimg1 d-none"></img>
                </div>

            </Container>
        </>
    )
}
export default Testimonials;
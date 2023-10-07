import { Container, Row, Col, Accordion, Card } from "react-bootstrap"
import Navigationbar from "../Navigation/Navigationbar"
import CustomToggle from "./Customtoggle"
import Footer from "../Footer/Footer"
import "./Faqs.css"

const Faqs = () => {
    return (
        <>
            <Container className="mt-3 mb-5">
                <Navigationbar />
                <Row className="mt-5">
                    <Col md>
                        <p className="qheading worksans">Frequently
                            Asked
                            <span className="spantext"> Questions</span> </p>
                        <p className="qsub-title aeonik mt-2">Whether you're looking to streamline your logistics operations, or navigate the complexities of international shipping and finance, we've compiled a list of commonly asked questions to help you better understand our services and how we can assist you. Explore the questions below to gain insights into our expertise, processes, and the benefits we offer.
                            If you have any further inquiries, our dedicated customer support team is just a message or call away.</p>
                    </Col>
                    <Col md>

                        <Accordion>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none" }}>
                                <Card.Header className="qtitle">
                                    What is digital freight forwarding?
                                    <CustomToggle eventKey="0"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="q-ans">Digital freight forwarding is a modern approach to managing logistics and transportation processes using digital technologies. It involves leveraging online platforms, automation, and data analytics to streamline and optimize freight forwarding operations, providing businesses with greater visibility, efficiency, and control over their supply chain.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none", marginTop: "3%" }}>
                                <Card.Header className="qtitle">
                                    How does your digital freight forwarding platform work?
                                    <CustomToggle eventKey="1"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="q-ans">Our digital freight forwarding platform simplifies the shipping process by offering an intuitive and user-friendly interface. You can easily request quotes, book shipments, track cargo in real-time, and manage documentation all in one place. Our platform integrates with a network of trusted carriers, ensuring reliable and efficient transportation services.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none", marginTop: "3%" }}>
                                <Card.Header className="qtitle">
                                    What trade financing solutions do you offer?
                                    <CustomToggle eventKey="2"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className="q-ans">We provide a range of trade financing solutions tailored to the specific needs of businesses in Africa. Our services include invoice financing, purchase order financing, supply chain financing, and insurance. These solutions help businesses overcome cash flow challenges, access working capital, and mitigate financial risks associated with international trade.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none", marginTop: "3%"  }}>
                                <Card.Header className="qtitle">
                                    How secure is your platform?
                                    <CustomToggle eventKey="3"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className="q-ans">We prioritize the security of our platform and your data. We employ robust security measures, including data encryption, firewalls, and regular security audits, to safeguard your sensitive information. Our platform complies with industry-standard security protocols, ensuring the confidentiality and integrity of your data throughout the freight forwarding and trade financing processes.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none", marginTop: "3%" }}>
                                <Card.Header className="qtitle">
                                    Why should I download the mobile app?
                                    <CustomToggle eventKey="4"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body className="q-ans">Through the Mobile app, you will be able to:
                                        <ol>
                                            <li>Make and track your order requests</li>
                                            <li>Access all you shipment documents</li>
                                            <li>Track the location and progress of your shipment</li>
                                            <li> Get instant updates and notifications.</li>
                                            <li>Request for financing</li>
                                            <li>Manage your inventory</li>
                                            <li>Access your invoices</li>
                                            <li>Make payments</li>
                                            <li>Communicate regularly with your our team.</li>
                                        </ol> </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none", marginTop: "3%" }}>
                                <Card.Header className="qtitle">
                                How do I set up and install the platform in my company
                                    <CustomToggle eventKey="5"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body className="q-ans">Our platform is cloud based which means it does not require any installation. It can be accessed anywhere and on all the popular browsers as long as you have an internet connection. Our Customer Experience Team is always available to help you on board and register on our platforms.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none", marginTop: "3%" }}>
                                <Card.Header className="qtitle">
                                How do I make payment?
                                    <CustomToggle eventKey="6"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body className="q-ans">You can make payment using your debit card through the payment link on the app once you have selected your service. You can also make payments using Mobile Money directly on the app</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none", marginTop: "3%" }}>
                                <Card.Header className="qtitle">
                                Is it safe to synchronize my financial cards to Credify for ease of payments?
                                    <CustomToggle eventKey="7"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="7">
                                    <Card.Body className="q-ans">Yes you can synchronize your cards for ease of payments. We have partnered with financial payments solutions that offer the highest form of security available.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none", marginTop: "3%" }}>
                                <Card.Header className="qtitle">
                                Do you handle customs clearance and documentation?
                                    <CustomToggle eventKey="8"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="8">
                                    <Card.Body className="q-ans">We are not a Customs Brokerage, but we work with a vast team of brokers that offer comprehensive customs clearance services as part of our digital freight forwarding solution. Our experienced team will assist you with all necessary documentation, including customs declarations, permits, and certificates, to ensure smooth customs clearance and compliance with import/export regulations.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none", marginTop: "3%" }}>
                                <Card.Header className="qtitle">
                                Are my shipments insured?
                                    <CustomToggle eventKey="9"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="9">
                                    <Card.Body className="q-ans">Yes, we offer cargo insurance options to protect your shipments against loss or damage during transit. Our team can provide you with more information on the insurance coverage options available and assist you in choosing the most suitable insurance solution for your cargo.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none", marginTop: "3%" }}>
                                <Card.Header className="qtitle">
                                How can I get started with your services?
                                    <CustomToggle eventKey="10"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="10">
                                    <Card.Body className="q-ans">Getting started is easy! Simply reach out to our team through our website or contact information provided. We will guide you through the onboarding process, understand your specific requirements, and tailor our solutions to meet your logistics and trade financing needs in Africa. You can also download the app on your phone and sign up. Request for the service you require or contact our team for any assistance</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{ border: "1px solid #014D85", boxShadow: "none", marginTop: "3%" }}>
                                <Card.Header className="qtitle">
                                What locations do we cover?
                                    <CustomToggle eventKey="11"></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="11">
                                    <Card.Body className="q-ans">We currently offer our services in Uganda and China. More locations are opening up soon.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                    </Col>
                </Row>
            </Container >
            <Footer/>
        </>
    )
}
export default Faqs
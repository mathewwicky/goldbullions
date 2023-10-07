import { Card, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import "./Tabcards.css"
import BusinessAnalytics from "../Product/BusinessAnalytics";
import TradeFinance from "./Financebuttons";
import LogisticsPage from "./Logisticsbuttons";

const TabCards = () =>{
    return(
        <>

    <Tab.Container id="" defaultActiveKey="second" >
    <Container>
      <Row className="">
          <Nav variant="" className="flex-row">
            <Container>
          <div className="d-flex cards-row">
            <Nav.Item>
              <Nav.Link className="crd-link" eventKey="first">
              <Card className="crds1">
              <Card.Img variant="" src="/images/coins.png" className="cardimg" />
              <Card.Body>
                <Card.Title className="crd-heading worksans">Gold Coin Sales</Card.Title>
                <Card.Text className="crd-text aeonik">
                Provide a platform for clients to purchase a variety of gold coins at favourable price globally.
                </Card.Text>
              </Card.Body>
            </Card>
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link className="crd-link" eventKey="second">
              <Card className="crds1">
              <Card.Img variant="" src="/images/Bank.svg" className="cardimg" />
              <Card.Body>
                <Card.Title className="crd-heading worksans">Gold Investment Plans</Card.Title>
                <Card.Text className="crd-text aeonik">
                Offer personalized consultations with experienced investment experts who can assess clients' financial situations and goals                </Card.Text>
              </Card.Body>
            </Card>
              </Nav.Link>
            </Nav.Item>
          
            <Nav.Item>
              <Nav.Link className="crd-link" eventKey="third">
              <Card className="crds1">
              <Card.Img variant="" src="/images/analysis.svg" className="cardimg" />
              <Card.Body>
                <Card.Title className="crd-heading worksans">Market Analysis and Insights</Card.Title>
                <Card.Text className="crd-text aeonik">
                Equip our clients with valuable information to make informed investment decisions.
                </Card.Text>
              </Card.Body>
            </Card>
              </Nav.Link>
            </Nav.Item>
         
            </div>
            </Container>
          </Nav>
         
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <LogisticsPage />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <TradeFinance/>
            </Tab.Pane>
            <Tab.Pane eventKey="third"><BusinessAnalytics /></Tab.Pane>
          </Tab.Content>
        
    </Row>
    </Container>
    </Tab.Container>

        </>
    )
}
export default TabCards;
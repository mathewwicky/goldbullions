import {Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import "./Tabcards.css"
import InvoiceFinance from "../Product/TradeFinance/InvoiceFinance";
import SupplyChain from "../Product/TradeFinance/SupplyChain";
import CustomsDuty from "../Product/TradeFinance/CustomsDuty";

const TradeFinance = () =>{
    return(
        <>

    <Tab.Container id="" defaultActiveKey="first">
   
          <Nav variant="" className="btns-container">
            <Container className="b-contain" fluid style={{ marginTop: "5%" }}>
              <div className="d-flex col-md-8 mx-auto f-btns">
            <Nav.Item className="n-item1">
              <Nav.Link className="buttons1" eventKey="first">
              <button className="buttons bt1 aeonik">Gold Investment Plans</button>
              </Nav.Link>
            </Nav.Item>
           
            {/* <Nav.Item className="n-item2">
              <Nav.Link className="buttons1" eventKey="second">
              <button className="buttons bt2 aeonik">Supply Chain Finance</button>
              </Nav.Link>
            </Nav.Item> */}
           
            {/* <Nav.Item className="n-item3">
              <Nav.Link className="buttons1" eventKey="third">
              <button className="buttons bt3 aeonik">Customs duty</button>
              </Nav.Link>
            </Nav.Item> */}
            </div>
            </Container>
          </Nav>
         
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <InvoiceFinance />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
             <SupplyChain />            </Tab.Pane>
            <Tab.Pane eventKey="third"><CustomsDuty /></Tab.Pane>
          </Tab.Content>
        
    </Tab.Container>

        </>
    )
}
export default TradeFinance;
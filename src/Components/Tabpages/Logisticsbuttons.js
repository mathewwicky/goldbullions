import {Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import "./Tabcards.css"
import Logistics from "../Product/Logistics/Book";
import Tracking from "../Product/Logistics/Tracking";
import Documentation from "../Product/Logistics/Documentation";

const LogisticsPage = () =>{
    return(
        <>

    <Tab.Container id="" defaultActiveKey="first">
   
          <Nav variant="" className="flex-row">
            <Container className="" fluid style={{ marginTop: "5%" }}>
              <div className="d-flex col-md-8 mx-auto f-btns">
            {/* <Nav.Item>
              <Nav.Link className="buttons1" eventKey="first">
              <button className="buttons bt8 bt7 aeonik">Book</button>
              </Nav.Link>
            </Nav.Item> */}
           
            {/* <Nav.Item>
              <Nav.Link className="buttons1" eventKey="second">
              <button className="buttons bt7 aeonik">Gold Coins</button>
              </Nav.Link>
            </Nav.Item> */}
           
            {/* <Nav.Item>
              <Nav.Link className="buttons1" eventKey="third">
              <button className="buttons bt9 bt7 aeonik">Documentation</button>
              </Nav.Link>
            </Nav.Item> */}
            </div>
            </Container>
          </Nav>
         
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <Logistics />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
             <Tracking />            </Tab.Pane>
            <Tab.Pane eventKey="third"><Documentation/></Tab.Pane>
          </Tab.Content>
        
    </Tab.Container>

        </>
    )
}
export default LogisticsPage;
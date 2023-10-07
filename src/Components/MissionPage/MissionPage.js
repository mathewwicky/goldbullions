import React from "react";
import { Container} from "react-bootstrap";
import "./MissionPage.css"
const MissionPage = () => {
  return (
    <>
      <Container className="body" style={{marginBottom:"10%"}}>
        <p className="mtxt worksans text-center">We are on <span className="spantext">a mission</span></p>
        <p className="aeonik mtxt2">To empower individuals and families to make informed decisions when it comes to investing in gold coins. We believe that gold offers a timeless and secure store of value. <br /></p>
        </Container>
    </>
  );
};

export default MissionPage;
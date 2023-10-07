import "./NotFound.css"
import { Container } from "react-bootstrap";
import Navigationbar from "../Navigation/Navigationbar";
import Footer from "../Footer/Footer"
const Notfound = () =>{
    return(
        <>
        <Container >
        <div id="contentbox"
                    style={{
                        marginTop: "5%",
                        background: "#FFF"
                    }}>
            <Navigationbar />
                    </div>
            <Container className="text-center mb-5">
                <p className="notfound worksans">4<span className="notfound2 worksans">0</span>4</p>
                <h2 className="worksans">Oops! Page not found.</h2>
                <p className="aeonik fs-6">Let’s get you to where you need to be.</p>
              <a className="text-decoration-none"href="/"> <button className="bttn m-auto p-3">Back to Home</button></a> 
            </Container>
        </Container>
        
        <Footer/>
        </>
    )
}
export default Notfound;
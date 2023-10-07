import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from 'react-bootstrap';
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="mt-3 col-md-2 mx-auto mb-5 scr-bttns">
            <img src="/images/ButtonPrev.png" alt="ic" role="button" className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />&nbsp; &nbsp;
            <img src="/images/ButtonNext.png" alt="ic" className="scroll-button" role="button" onClick={() => next()} />
        
        </div>
    );
};
const TCards = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel
         responsive={responsive} 
         arrows={false}
          renderButtonGroupOutside={true}
           customButtonGroup={<ButtonGroup />}
           >
            <div className='m-2'>
                <Card className="tcard">
                    <Card.Body>
                        <Card.Title className="aeonik crd-title">It’s just incredible!</Card.Title>
                        <Card.Text className="aeonik crd-text">
                            It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex gap-4">
                            <img src="/images/image4.png" alt="im" className="ftr-img"></img>
                            <div>
                                <p className="aeonik cardfootertext">Jimmy Bartney</p>
                                <p className="aeonik footertxt">Product Manager at Picko Lab</p>
                            </div>
                        </div>

                    </Card.Footer>
                </Card>
            </div>
            <div className='m-2'>
                <Card className="tcard">
                    <Card.Body>
                        <Card.Title className=" aeonik crd-title">Satisfied User Here!</Card.Title>
                        <Card.Text className=" aeonik crd-text">
                            Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex gap-4">
                            <img src="/images/image4.png" alt="im" className="ftr-img"></img>
                            <div>
                                <p className="aeonik cardfootertext">Natasha Romanoff</p>
                                <p className="aeonik footertxt">Black Widow</p>
                            </div>
                        </div>
                    </Card.Footer>

                </Card>
            </div>
            <div className='m-2'>
                <Card className="tcard">
                    <Card.Body>
                        <Card.Title className=" aeonik crd-title text-nowrap">No doubt, Spend.In is the best!</Card.Title>
                        <Card.Text className=" aeonik crd-text">
                            “The best”!That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this!Very recommended to you who have a big business!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex gap-4">
                            <img src="/images/image4.png" alt="im" className="ftr-img"></img>
                            <div>
                                <p className="aeonik cardfootertext">Moritika Kazuki</p>
                                <p className="aeonik footertxt">Finance Manager at Mangan</p>
                            </div>
                        </div>
                    </Card.Footer>

                </Card>
            </div>
            <div className='m-2'>
                <Card className="tcard">
                    <Card.Body>
                        <Card.Title className=" aeonik crd-title text-nowrap">No doubt, Spend.In is the best!</Card.Title>
                        <Card.Text className=" aeonik crd-text">
                            “The best”!That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this!Very recommended to you who have a big business!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex gap-4">
                            <img src="/images/image4.png" alt="im" className="ftr-img"></img>
                            <div>
                                <p className="aeonik cardfootertext">Moritika Kazuki</p>
                                <p className="aeonik footertxt">Finance Manager at Mangan</p>
                            </div>
                        </div>
                    </Card.Footer>

                </Card>
            </div>
        </Carousel>
    )
}
export default TCards;
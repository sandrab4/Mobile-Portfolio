import { Container, Row, Col } from "react-bootstrap";
import picbg from "../assets/img/picbg.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={11} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Sandra Barron `} <br></br></h1>
                  <p>Web Develope</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={11} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={picbg} alt="picbg"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
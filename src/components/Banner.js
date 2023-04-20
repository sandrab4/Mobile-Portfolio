import { Container, Row, Col } from "react-bootstrap";
import picbg from "../assets/img/picbg.png";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={11} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h1>{`Sandra Barron`} <br></br></h1>
                  <p>Web Developer</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={11} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img src={picbg} alt="picbg"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          </Col>
          <div>
              <a href="https://github.com/sandrab4" target="_blank" rel="noopener noreferrer">
                <FaGithub size="3em" />
                </a>
                <a href="https://mail.google.com/mail?view=cm&fs=1&to=barrongsandra@gmail.com&su=Draft" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope size="3em" />
                  </a>
                  <a href="https://linkedin.com/in/sandra-b-5868961b8" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size="3em" />
                    </a>
              </div>
        </Row>
      </Container>
    </footer>
  )
}

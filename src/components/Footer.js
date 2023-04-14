import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="https://mail.google.com/mail?view=cm&fs=1&to=barrongsandra@gmail.com&su=Draft" target="_blank" rel="noopener noreferrer" className="link">BARRONGSANDRA@GMAIL.COM</a>
            <br></br>
            <br></br>
            <a href="https://github.com/sandrab4" target="_blank" rel="noopener noreferrer" className="link">Github</a>
            <a href="https://linkedin.com/in/sandra-b-5868961b8" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

import Container from 'react-bootstrap/Container';
import git from '../dist/git.png';
import linkedin from '../dist/linkedin.png';
import email from '../dist/email.png';
import phone from '../dist/phone.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {
  return (
    <div id="contact_page">
      <Row>
      <Row id="contact">
        <Col>
          <Row id="contact">
            <img id="contacts" src={linkedin}/>
          </Row>
          <Row>
            <a id="link" href="https://www.linkedin.com/in/christopher-woodby-766a88202/">
              Coonect with me on LinkedIn
            </a>
          </Row>
        </Col>
        <Col>
          <Row id="contact">
            <img id="contacts" src={git}/>
          </Row>
          <Row>
            <a id="link" href="https://github.com/Chrisdwoodby">View my work</a>
          </Row>
        </Col>
      </Row>
      <Row id="contact">
        <Col>
          <Row id="contact">
            <img id="contacts" src={email}/>
          </Row>
          <Row>
            <p>Chrisdwoodby@gmail.com</p>
          </Row>
        </Col>
        <Col>
          <Row id="contact">
            <img id="contacts" src={phone}/>
          </Row>
          <Row>
            <p id="phoneNumber">512-745-3863</p>
          </Row>
        </Col>
      </Row>
      </Row>
    </div>
  )
}
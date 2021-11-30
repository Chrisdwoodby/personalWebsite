import Container from 'react-bootstrap/Container';
import git from '../dist/public/icons/git.png';
import linkedin from '../dist/public/icons/linkedin.png';
import email from '../dist/public/icons/email.png';
import phone from '../dist/public/icons/phone.png';
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
            <a id="link" target="_blank" href="https://www.linkedin.com/in/christopher-woodby-766a88202/">
              Connect with me on LinkedIn
            </a>
          </Row>
        </Col>
        <Col>
          <Row id="contact">
            <img id="contacts" src={git}/>
          </Row>
          <Row>
            <a id="link" target="_blank" href="https://github.com/Chrisdwoodby">View my work</a>
          </Row>
        </Col>
      </Row>
      <Row id="contact">
        <Col>
          <Row id="contact">
            <img id="mail" src={email}/>
          </Row>
          <Row id="email">
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
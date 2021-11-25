import { propTypes } from 'react-bootstrap/esm/Image';
import { render } from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Navigation(props:any) {
  function renderAbout() {
    props.viewAbout(true);
    props.viewSkills(false);
    props.viewContact(false);
    props.viewPortfolio(false);
    props.renderPage()
  }
  function renderSkills() {
    props.viewAbout(false);
    props.viewSkills(true);
    props.viewContact(false);
    props.viewPortfolio(false);
    props.renderPage()
  }
  function renderContact() {
    props.viewAbout(false);
    props.viewSkills(false);
    props.viewContact(true);
    props.viewPortfolio(false);
    props.renderPage()
  }
  function renderPortfolio() {
    props.viewAbout(false);
    props.viewSkills(false);
    props.viewContact(false);
    props.viewPortfolio(true);
    props.renderPage()
  }
  const mql = window.matchMedia('(max-width: 600px)');
  let mobileView = mql.matches;
  if (mobileView) {
    return (
        <div>
          <h1 id="name">Christopher Woodby 
            <span id="loader__dot">.</span>
            <span id="loader__dot">.</span>
            <span id="loader__dot">.</span>
          </h1>
          <div id="mobile">
            <ul id="list">
              <li id="topview" onClick={renderAbout}>about</li>
              <li id="topview" onClick={renderContact}>contact</li>
              <li id="topview" onClick={renderPortfolio}>portfolio</li>
              <li id="topview" onClick={renderSkills}>skills</li>
            </ul>
          </div>
        </div>
    );
  } else {
    return (
      <Navbar id="desktop" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Christopher Woodby
            <span id="loader__dot">.</span>
            <span id="loader__dot">.</span>
            <span id="loader__dot">.</span>
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link onClick={renderAbout}>About</Nav.Link>  
            <Nav.Link onClick={renderContact}>Contact</Nav.Link>
            <Nav.Link onClick={renderPortfolio}>Portfolio</Nav.Link>
            <Nav.Link onClick={renderSkills}>Skills</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
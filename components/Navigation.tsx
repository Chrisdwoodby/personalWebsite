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
        <div id="mobile_overview">
          <h1 id="name" onClick={renderAbout}>Christopher Woodby 
            <span id="loader__dot">|</span>
          </h1>
          <div id="mobile">
            <h4 id="topview" onClick={renderAbout}>about</h4>
            <h4 id="topview" onClick={renderContact}>contact</h4>
            <h4 id="topview" onClick={renderPortfolio}>portfolio</h4>
            <h4 id="topview" onClick={renderSkills}>skills</h4>
          </div>
        </div>
    );
  } else {
    return (
      <Navbar id="desktop" variant="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={renderAbout}>Christopher Woodby
            <span id="loader__dot">|</span>
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

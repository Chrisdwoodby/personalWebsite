import { propTypes } from 'react-bootstrap/esm/Image';
import { render } from 'react-dom';

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
        <div id="mobile">
        <ul >
          <li onClick={renderAbout}>about</li>
          <li onClick={renderContact}>contact</li>
          <li onClick={renderPortfolio}>portfolio</li>
          <li onClick={renderSkills}>skills</li>
        </ul>
      </div>
    );
  } else {
    return (
        <div id="desktop">
        <ul >
          <li onClick={renderAbout}>about</li>
          <li onClick={renderContact}>contact</li>
          <li onClick={renderPortfolio}>portfolio</li>
          <li onClick={renderSkills}>skills</li>
        </ul>
      </div>
    );
  }
}
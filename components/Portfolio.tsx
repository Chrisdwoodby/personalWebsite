import Row from 'react-bootstrap/Row';
import flight from '../dist/public/icons/flight.png';
// import flighttracker from '../dist/flighttracker.mov';
import movies from '../dist/public/icons/movies.png';
import movie from '../dist/public/icons/nebulamovies.mov';
import transit from '../dist/public/icons/transit.png';
import Col from 'react-bootstrap/Col';

export default function Portfolio() {
  return (
    <div id="portfolio">
      <Row id="row">
        <Col id="col">
        <Row id="project-name">
            <h3>Flight Tracker</h3>
            <p id="techs">React | JavaScript | MySQL | Bootstrap | Webpack | API's</p>
            <p>Flight tracker which is capable of displaying real time flight data while
              also providing the user with a hashed and secure log in/sign up.
            </p>
        </Row>
        <Row id="project-name">
          <div id="main">
            <div id="card">
              <div id="front">
                <img id="test" src={flight}/>
              </div>
              <div id="back">
                {/* <video id="preview"  playsInline loop autoPlay muted type="video/mp4" src={flighttracker}/> */}
              </div>
            </div>
          </div>
        </Row>
        </Col>
        <Col id="col">
        <Row id="project-name">
          <h3>Nebula Movies</h3>
          <p id="techs">React | Javascript | API's | Webpack | Babel</p>
          <p>Single page movie data application which is capable of sorting and organizing GET requests based on user input.</p>
        </Row>
        <Row id="project-name">
          <div id="main">
            <div id="card">
              <div id="front">
                <img id="test" src={movies}/>
              </div>
              <div id="back">
                <video id="preview" playsInline loop autoPlay muted type="video/mp4" src={movie}/>
              </div>
            </div>
          </div>
        </Row>
        </Col>
        <Col id="col">
        <Row id="project-name">
          <h3>Transit Management</h3>
          <p id="techs">React | Javascript | Bootstrap | Webpack | Babel | AWS</p>
          <p>Web presence for a local consulting business utilizing AWS EC2 and Route 53.</p>
        </Row>
        <Row id="project-name">
          <div id="main">
            <div id="card">
              <div id="front">
                <img id="test" src={transit}/>
              </div>
              <div id="back">
                about transit management
              </div>
            </div>
          </div>
        </Row>
        </Col>
      </Row>
    </div>
  )
}

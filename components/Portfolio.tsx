import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import flight from '../dist/flight.png';
// import flighttracker from '../dist/flighttracker.mov';
import movies from '../dist/movies.png';
import movie from '../dist/movie.mov';
import transit from '../dist/transit.png';
import Col from 'react-bootstrap/Col';

export default function Portfolio() {
  return (
    <div id="portfolio">
      <Row id="row">
        <Col id="col">
        <Row id="project-name">
            <h3>Flight Tracker</h3>
            <p>react and javascript</p>
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
          <h3>Nebula movies</h3>
          <p>react and javascript</p>
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
          <h3>transit management</h3>
          <p>react and javascript</p>
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

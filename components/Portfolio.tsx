import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import flight from '../dist/flight.png';
// import flighttracker from '../dist/flighttracker.mov';
import movies from '../dist/movies.png';
// import movies from '../dist/movies.mov';
import transit from '../dist/transit.png';

export default function Portfolio() {
  return (
    <Container id="Container">
        <h1>portfolio</h1>
        <Row id="row">
        <div id="main">
        <div id="project-name">
          <h3>Flight Tracker</h3>
          <p>react and javascript</p>
        </div>
            <div id="card">
                <div id="front">
                  <img id="test" src={flight}/>
                </div>
                <div id="back">
                  {/* <video id="preview"  playsInline loop autoPlay muted type="video/mp4" src={flighttracker}/> */}
                </div>
            </div>
        </div>
        <div id="main">
        <div id="project-name">
          <h3>Nebula movies</h3>
          <p>react and javascript</p>
        </div>
            <div id="card">
                <div id="front">
                  <img id="test" src={movies}/>
                </div>
                <div id="back">
                {/* <video id="preview" playsInline loop autoPlay muted type="video/mp4" src={movies}/> */}
                </div>
            </div>
        </div>
        <div id="main">
        <div id="project-name">
          <h3>transit management</h3>
          <p>react and javascript</p>
        </div>
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
    </Container>
  )
}
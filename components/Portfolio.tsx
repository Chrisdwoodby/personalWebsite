import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import test from '../dist/test.png';

export default function Portfolio() {
  return (
    <Container id="Container">
        <h1>portfolio</h1>
        <Row>
        <div id="main">
            <div id="card">
                <div id="front">
                  <img id="test" src={test}/>
                </div>
                <div id="back">
                  about my flight tracker
                </div>
            </div>
        </div>
        </Row>
    </Container>
  )
}
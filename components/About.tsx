import headshot from '../dist/public/icons/headshot.png';
import medium from '../dist/public/icons/medium.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function About() {
  return (
    <Container id="Container">
      <Row id="article">
        <Col id="about">
          <h2 id="title">Full Stack Developer</h2>
          <h3 id="location">Austin | Texas</h3>
          <p>
            Im Chris, a tenacious software engineer with a passion for creating
            intuitive and beautiful web applications. I rely on my people first
            mindset and collaboration to aid in the betterment of my community
            through technology. With to tools and resources available to us 
            in a constant state of evolution, the solutions of today need to
            take the problems of tomorrow into account, and it is my goal to
            assist in the movement towards future proofing our society. 
          </p>
        </Col>
        <Col id="about">
          <img id="headshot" src={medium}/>
        </Col>
      </Row>
      <Row id="article">
        <Col id="about">
          <h2 id="title">A Transition to Tech</h2>
          <p id="location">medium.com</p>
          <p>a world where knowledge is so easily accessible i can be easy
            to forgot how valuable it can be whenever a tenacious and determined
            attitude is paired with it.</p>
        </Col>
        <Col id="about">
          <a href="https://medium.com/@chrisdwoodby/a-transition-to-tech-211daea6a8cf"
            target="_blank">
            <img id="medium" src={medium}/>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

// style={{backgroundImage: `url(${background})`, objectFit: "cover"}}

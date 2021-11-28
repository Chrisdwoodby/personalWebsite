import headshot from '../dist/headshot.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function About() {
  return (
    <Container id="Container">
      <h1>about</h1>
      <Row id="article">
        <Col id="about">
            I have a passion for creating intuitive and beautiful web applications and
            deeply enjoy working in an environment which fosters collaboration, I believe
            the best products and outcomes are produced when many passionate minds are 
            allowed to act as one. While I do possess some college experience from attending
            Austin Community College majoring in Business Administration, the core of my 
            knowledge is derived from self taught practice and projects over the course 
            of the past 2 years as well as attending Hack Reactor Software Engineering
            boot camp this past summer, where i spend 10 hours a day performing code
            reviews, sprint planning and reflections, as well as managing our teams
            code with GitHub workflow. My passion for design, growth mindset, and daily
            enhancement of my skills with technologies such as React has enabled me to 
            build the product I desire without compromise.
        </Col>
        <Col id="about">
          <img id="headshot" src={headshot}/>
        </Col>
      </Row>
      <Row id="article">
        <Col id="about">
          snippet of medium article here
        </Col>
        <Col id="about">
          My story about where i came from and how i found my passion for programming.
        </Col>
      </Row>
    </Container>
  )
}

// style={{backgroundImage: `url(${background})`, objectFit: "cover"}}
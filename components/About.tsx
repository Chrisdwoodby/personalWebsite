import background from '../dist/about.png';
import test from '../dist/test.png';
import Container from 'react-bootstrap/Container';

export default function About() {
  return (
    <Container id="Container">
      <h1>about</h1>
      <article>this is the about section i have made fir myself and needs
        to stretch the length neccessary v djfjfjfjfjfjfjfv fdlhjvbwlrti
        gnadiuvnqrtliugnqrliubnq;uvnrqunb
      </article>
      <img id="test" src={test}/>
    </Container>
  )
}

// style={{backgroundImage: `url(${background})`, objectFit: "cover"}}
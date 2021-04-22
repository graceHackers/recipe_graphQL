import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function HomePage() {
  return (
    <Container id='creators' className='text-center'>
      <Row className='justify-content-center'>
        <h1>Home Page</h1>
      </Row>
      <Row className='justify-content-center'>
        <Link to={'/recipes'}>
          <button>Start!</button>
        </Link>
      </Row>

      <Row className='justify-content-center'>
          <h1>Meet our team</h1>
        </Row>
        <Row className='justify-content-center'>
          <Card>
            <p>Danny Serrano</p>
            <a>LinkedIn</a>
            <a>Github</a>
          </Card>
          <Card>
            <p>Natalie Rojas</p>
            <a>LinkedIn</a>
            <a>Github</a>
          </Card>
          <Card>
            <p>Marjorie Meija</p>
            <a>LinkedIn</a>
            <a>Github</a>
          </Card>
        </Row>
      <a>Check out Mintbean!</a>
    </Container>
  );
}

import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export default function HomePage() {
  return (
    <Container id='creators' className='text-center'>
      <Jumbotron >
          <h1>Homepage</h1>
          <p>
            This is where the screenshot will go!
          </p>
          <Link to={'/recipes'}>
            <Button variant="info">Start!</Button>
          </Link>
        </Jumbotron>

      <Row className='justify-content-center mb-3 mt-5'>
          <h1>Meet our team!</h1>
        </Row>
        <Row className='justify-content-center'>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Danny Serrano</Card.Title>
                <Card.Link>LinkedIn</Card.Link>
                <Card.Link>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
            <Card.Body>
                <Card.Title>Natalie Rojas</Card.Title>
                <Card.Link>LinkedIn</Card.Link>
                <Card.Link>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
            <Card.Body>
                <Card.Title>Marjorie Meija</Card.Title>
                <Card.Link>LinkedIn</Card.Link>
                <Card.Link>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container >
  );
}

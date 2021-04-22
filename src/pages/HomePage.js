import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function HomePage() {
  return (
    <Container id="creators" className="text-center">
      <h1 className="mt-5 mb-5">Welcome to Kiki's Recipe!</h1>
      <Row
        id="homepage-image"
        className="justify-content-center align-items-center"
      ></Row>
      <Row id="homepage-button">
        <Link to={"/recipes"}>
          <Button
            variant="warning"
            className="mt-5"
            style={{
              fontSize: "30px",
            }}
          >
            Try it yourself!
          </Button>
        </Link>
      </Row>
      <Row className="justify-content-center mb-3 mt-5">
        <h1>Meet our team!</h1>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Danny Serrano</Card.Title>
              <Card.Link
                target="_blank"
                href="https://www.linkedin.com/in/serranodanny/"
              >
                LinkedIn
              </Card.Link>
              <Card.Link
                target="_blank"
                href="https://github.com/DaniCalifornia"
              >
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Natalie Rojas</Card.Title>
              <Card.Link
                target="_blank"
                href="https://www.linkedin.com/in/natalie-o-rojas/"
              >
                LinkedIn
              </Card.Link>
              <Card.Link target="_blank" href="https://github.com/nrojas113">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Marjorie Meija</Card.Title>
              <Card.Link
                target="_blank"
                href="https://www.linkedin.com/in/marjorie-mejia/"
              >
                LinkedIn
              </Card.Link>
              <Card.Link target="_blank" href="https://github.com/mmejia1">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

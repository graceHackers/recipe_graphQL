import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function HomePage() {
  return (
    <Container className="text-center">
      <h1 className="mt-5 mb-5">Welcome to Kiki's Recipe!</h1>
      <Row
        id="homepage-image"
        className="justify-content-center align-items-center"
      ></Row>
      <Row id="homepage-button" >
        <Link to={"/recipes"}         className="justify-content-center align-items-center"
>
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
      <Row id="about">
        <Col>
        <Card className="mt-5" style={{
                  boxShadow: '0px 0px 10px 2px rgba(100, 100, 100, 0.6) ',
                }}>
          <Card.Title className="mt-3"><h2>About Kiki's Recipe</h2></Card.Title>
          <Card.Body>
            <Card.Text>
              <h5>
            Welcome to Kiki's Recipe! Gather your ingredients and get an inspiration for your your next meal.
            At Kiki's Recipe, you can add up to 10 ingredients, hit submit and watch as you are wonderously supplied with amazing recipes.
            </h5>
            </Card.Text>
            <Card.Link
                href="/recipes"
              >
                Get Started!
              </Card.Link>
            </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-3 mt-5">
        <h1>Creators</h1>
      </Row>
      <Row id="creators" className="justify-content-center mb-5">
        <Col>
          <Card style={{
                  boxShadow: '0px 0px 10px 2px rgba(100, 100, 100, 0.6) ',
                }}>
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
          <Card style={{
                  boxShadow: '0px 0px 10px 2px rgba(100, 100, 100, 0.6) ',
                }}>
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
          <Card style={{
                  boxShadow: '0px 0px 10px 2px rgba(100, 100, 100, 0.6) ',
                }}>
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

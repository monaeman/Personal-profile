import React from "react";
import "./about.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div className="card_container">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Linkedin Profile</Card.Title>
          <Card.Text>
            below you can find my linkedin profolio and resume
          </Card.Text>
          <a
            href="https://www.linkedin.com/in/mona-hassan91/"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            <Button variant="primary">Linkedin</Button>
          </a>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
        <Card.Body>
          <Card.Title>GitHub</Card.Title>
          <Card.Text>you can see my projects here</Card.Text>
          <a
            href="https://github.com/monaeman"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            <Button variant="primary">Github</Button>
          </a>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "18rem",
          borderColor: "pink",
        }}
      >
        {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
        <Card.Body>
          <Card.Title>Netlify Portfolio</Card.Title>
          <Card.Text>you can see my deployed projects here</Card.Text>
          <a
            href="https://app.netlify.com/teams/monaeman/overview"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            <Button variant="primary">Netlify</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;

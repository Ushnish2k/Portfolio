import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ushnish Basu Roy </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently pursuing Btech from VIT, Vellore.
            <br />
            My Graduation Year is 2025 and i am currently in my 8th Semester
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I have a keen interest in Football
            </li>
            <li className="about-activity">
              <ImPointRight /> I enjoy drawing which brings out my creative outlet
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ushnish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

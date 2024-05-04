import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "../pages/Home.css";

const WelcomeAnimation: React.FC = () => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const welcomeText = "Welcome to COSMO";
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < welcomeText.length) {
        setText(welcomeText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Col xs="auto" className="home_content text-center">
      <Row>
        <h1>{text}</h1>
      </Row>
    </Col>
  );
};

export default WelcomeAnimation;

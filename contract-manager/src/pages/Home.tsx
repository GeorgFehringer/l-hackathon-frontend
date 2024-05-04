import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import WelcomeAnimation from "../components/WelcomeAnimation";
import { Link } from "react-router-dom";
import ToastNotification from "../components/ToastNotification";

function Home() {
  const [showToast, setShowToast] = useState(false);
  const handleSignUpClick = () => {
    if (!showToast) {
      setShowToast(!showToast);
    }
  };

  return (
    <>
      <video
        src="/videos/home_background_video.mp4"
        id="backgroundVideo"
        autoPlay
        loop
        muted
      />
      <Container className="home-content-container">
        {showToast && (
          <ToastNotification
            title={"Account creation procedure"}
            text={"Please contact the admin via email"}
          />
        )}
        <WelcomeAnimation></WelcomeAnimation>
        <Row>
          <Col xs={6} md={6} xl={6} className="text-right">
            <Link to={`/login`}>
              <Button variant="light" size="lg">
                LOGIN
              </Button>
            </Link>
          </Col>
          <Col xs={6} md={6} xl={6} className="text-left">
            <Button variant="light" size="lg" onClick={handleSignUpClick}>
              SIGN UP
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

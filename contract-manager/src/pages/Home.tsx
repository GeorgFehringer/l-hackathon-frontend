import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import WelcomeAnimation from "../components/WelcomeAnimation";

function Home() {
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
        <WelcomeAnimation></WelcomeAnimation>
      </Container>
    </>
  );
}

export default Home;

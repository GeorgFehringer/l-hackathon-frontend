import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";

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
        <div className="home_content">
          <h1>Welcome</h1>
          <p>To COSMO.</p>
        </div>
      </Container>
    </>
  );
}

export default Home;

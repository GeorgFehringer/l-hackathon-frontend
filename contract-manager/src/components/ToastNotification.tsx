import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

interface ToastNotificationProps {
  title: string;
  text: string;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  text,
  title,
}) => {
  const [showToast, setShowToast] = useState(true);

  const toggleShowToast = () => setShowToast(!showToast);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toast show={showToast} onClose={toggleShowToast}>
          <Toast.Header className="me-auto">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto ">{title}</strong>
          </Toast.Header>
          <Toast.Body>{text}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default ToastNotification;

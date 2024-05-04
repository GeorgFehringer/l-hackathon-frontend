import React from "react";
import { Toast } from "react-bootstrap";

interface ToastNotificationProps {
  title: string;
  text: string;
  onClose: () => void;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  text,
  title,
  onClose,
}) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="position-absolute top-0 end-0 p-3"
      style={{ zIndex: 1 }}
    >
      <Toast onClose={onClose}>
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body className="black-text">{text}</Toast.Body>
      </Toast>
    </div>
  );
};

export default ToastNotification;

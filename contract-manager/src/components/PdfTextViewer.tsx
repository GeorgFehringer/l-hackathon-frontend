import { Col, Form } from "react-bootstrap";
import { PdfDocument } from "./PdfDocumentModel";

function PdfTextViewer({ text }: { text: string | undefined }) {
  return (
    <>
      <Col className="mt-4">
        <Form.Control
          type="text"
          placeholder={text || "Empty pdf"}
          aria-label="Disabled input example"
          disabled
          readOnly
        />
      </Col>
    </>
  );
}

export default PdfTextViewer;

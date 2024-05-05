import { Col, Form } from "react-bootstrap";
import { PdfDocument } from "./PdfDocumentModel";

function PdfModifiableTextViewer({ text }: { text: string | undefined }) {
  return (
    <>
      <Col className="mt-4">
        <Form.Control type="text" placeholder={text || "Empty pdf"} />
      </Col>
    </>
  );
}

export default PdfModifiableTextViewer;

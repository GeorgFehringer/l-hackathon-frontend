import React from "react";
import { Card, Button } from "react-bootstrap";

interface PdfDocument {
  pdfName: string;
  pdfCount: number;
  pdfLink: string;
}

interface Props {
  pdfDocument: PdfDocument;
}

const PdfSidebarCard: React.FC<Props> = ({ pdfDocument }) => {
  return (
    <Card className="pdf-card">
      <Card.Body>
        <Card.Title>{pdfDocument.pdfName}</Card.Title>
        <Button variant="primary" href={pdfDocument.pdfLink}>
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PdfSidebarCard;

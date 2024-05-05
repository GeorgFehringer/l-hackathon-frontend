import React from "react";
import { Card, Button } from "react-bootstrap";
import { PdfDocument, PdfDocumentListItem } from "./PdfDocumentModel";
import { useAxios } from "./Context/AuthContext/SimpleAxiosContextWithAuth";

interface Props {
  pdfDocument: PdfDocumentListItem;
  setCurrentDocument: (document: PdfDocument) => void;
}
const dummyPdfDocuments: PdfDocument[] = [
  {
    pdfName: "Document 1",
    id: 1,
    text: "test1",
  },
  {
    pdfName: "Document 2",
    id: 2,
    text: "test2",
  },
  {
    pdfName: "Document 3",
    id: 3,
    text: "test3",
  },
];

const PdfSidebarCard: React.FC<Props> = ({
  pdfDocument,
  setCurrentDocument,
}) => {
  const { axiosApi } = useAxios();

  const handleClick = (e: any) => {
    // axiosApi.get<PdfDocument>(`pdf/${pdfDocument.id}`).then((res) => {
    //   setCurrentDocument(res.data);
    // });

    setCurrentDocument(
      dummyPdfDocuments.find((document) => document.id == pdfDocument.id) ?? {
        id: 0,
        pdfName: "",
        text: "",
      }
    );
  };

  return (
    <Card className="pdf-card">
      <Card.Body>
        <Card.Title>{pdfDocument.pdfName}</Card.Title>
        <Button variant="primary" onClick={handleClick}>
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PdfSidebarCard;

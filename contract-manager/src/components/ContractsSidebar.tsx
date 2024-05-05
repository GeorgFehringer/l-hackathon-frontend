import { Nav } from "react-bootstrap";
import "./ContractsSidebar.css";
import PdfSidebarCard from "./PdfSidebarCard";
import { PdfDocument } from "./PdfDocumentModel";

interface Props {
  pdfDocuments: PdfDocument[];
  setCurrentDocument: (document: PdfDocument) => void;
}

function ContractsSidebar({ pdfDocuments, setCurrentDocument }: Props) {
  return (
    <>
      <Nav
        className="col-md-2 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        {pdfDocuments.map((pdfDocument, index) => (
          <PdfSidebarCard
            key={index}
            pdfDocument={pdfDocument}
            setCurrentDocument={setCurrentDocument}
          ></PdfSidebarCard>
        ))}
      </Nav>
    </>
  );
}

export default ContractsSidebar;

import { useEffect, useState } from "react";
import DocumentsLayout from "../Layout/DocumentsLayout";
import { useAxios } from "../components/Context/AuthContext/SimpleAxiosContextWithAuth";
import { useParams } from "react-router-dom";

import { SimpleUserModel } from "../components/Context/AuthContext/SimpleUserModel";
import { useSimpleAuth } from "../components/Context/AuthContext/useSimpleAuthHook";
import { PdfDocument } from "../components/PdfDocumentModel";

function Contracts() {
  //TODO: GET the documents from backend and pass them to the layout in a usable format
  //(get documents list then get all documents details and create a new list)
  const { axiosApi } = useAxios();
  const [pdfDocuments, setPdfDocuments] = useState<PdfDocument[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userData } = useSimpleAuth();

  useEffect(() => {
    axiosApi
      .get<string[]>("/pdf")
      .then((res) => {
        const pdfIds = res.data;
        const promises = pdfIds.map((pdfId) =>
          axiosApi.get<PdfDocument>(`/pdf/${pdfId}`)
        );
        Promise.all(promises)
          .then((pdfs) => {
            setPdfDocuments(pdfs.map((pdf) => pdf.data));
            setLoading(false);
          })
          .catch((error) => {
            setError("Error fetching PDF documents: " + error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        setError("Error fetching PDF document IDs: " + error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <DocumentsLayout
      pdfDocuments={pdfDocuments}
      // userRole={userData?.role || ""}
    />
  );
}

export default Contracts;

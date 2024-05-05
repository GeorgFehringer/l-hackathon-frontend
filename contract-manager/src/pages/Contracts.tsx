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
  const [pdfIds, setPdfIds] = useState<string[]>();

  useEffect(() => {
    axiosApi
      .get<string[]>(`/pdf`)
      .then((res) => {
        setPdfIds(res.data);
        createDocumentList();
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching PDF documents: " + error.message);
        setLoading(false);
      });
  }, []);

  const createDocumentList = () => {
    const documentList: PdfDocument[] = [];
    for (let id in pdfIds) {
      axiosApi.get<PdfDocument>(`pdf/${id}`).then((res) => {
        documentList.push(res.data);
      });
    }
  };

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
    ></DocumentsLayout>
  );
}

export default Contracts;

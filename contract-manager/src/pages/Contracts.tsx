import { useEffect, useState } from "react";
import DocumentsLayout from "../Layout/DocumentsLayout";
import { useAxios } from "../components/Context/AuthContext/SimpleAxiosContextWithAuth";
import { useParams } from "react-router-dom";

import { SimpleUserModel } from "../components/Context/AuthContext/SimpleUserModel";
import { useSimpleAuth } from "../components/Context/AuthContext/useSimpleAuthHook";
import { PdfDocument } from "../components/PdfDocumentModel";
import axios from "axios";

interface ApiResponse {
  PDF_IDs: string[];
}

function Contracts() {
  //TODO: GET the documents from backend and pass them to the layout in a usable format
  //(get documents list then get all documents details and create a new list)

  const { axiosApi } = useAxios();
  const [pdfDocuments, setPdfDocuments] = useState<PdfDocument[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userData } = useSimpleAuth();
  const [pdfIds, setPdfIds] = useState<string[]>();

  useEffect(() => {
    //console.log(process.env);
    //console.log(`Making API call to: ${process.env.REACT_APP_BASE_URL}${'/pdf'}`);
    axiosApi
      .get<ApiResponse>('/pdf')
      .then((res) => {
        setPdfIds(res.data.PDF_IDs);
        createDocumentList(res.data.PDF_IDs);
        setLoading(false);
        //console.log(pdfDocuments);
      })
      .catch((error) => {
        setError("Error fetching PDF documents: " + error.message);
        setLoading(false);
      });
  }, [setPdfDocuments, setPdfIds]);

  const createDocumentList = (pdfIdsArray: string[]) => {
    const documentList: PdfDocument[] = [];
    console.log(pdfIdsArray);
    for (let id in pdfIdsArray) {
      axiosApi
        .get<PdfDocument>(`pdf/${pdfIdsArray[id]}`)
        .then((res) => {
          documentList.push(res.data);
        })
        .catch((error) => console.log(error));
    }
    console.log("das hier letzte"+documentList);
    setPdfDocuments(documentList);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <DocumentsLayout
        pdfDocuments={pdfDocuments}
        // userRole={userData?.role || ""}
      ></DocumentsLayout>
    </>
  );
}

export default Contracts;

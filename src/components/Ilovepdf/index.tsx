"use client";

import { getIlovepdfTockenAction } from "@/actions";
import { getOriginalPdf, getSignedPdf, sendRequest } from "@/fetch";
import { SignaruteRequested } from "@/type";

const Ilovepdf = ({
  signaturesRequested,
}: {
  signaturesRequested: SignaruteRequested[];
}) => {
  const handleDownloadOriginalFile = async (
    tockenRequester: string,
    fileName: string
  ) => {
    const data = await getOriginalPdf(tockenRequester);
    const pdfBlob = await data.blob();
    const link = document.createElement("a");
    link.download = fileName;
    link.href = window.URL.createObjectURL(pdfBlob);
    link.click();
    window.URL.revokeObjectURL(link.href);
  };

  const handleDownloadSignedFile = async (
    tockenRequester: string,
    fileName: string
  ) => {
    const data = await getSignedPdf(tockenRequester);
    const pdfBlob = await data.blob();
    const link = document.createElement("a");
    link.download = fileName;
    link.href = window.URL.createObjectURL(pdfBlob);
    link.click();
    window.URL.revokeObjectURL(link.href);
  };

  return (
    <div>
      <button
        onClick={() => {
          void sendRequest();
        }}
      >
        send Request
      </button>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-left px-2">Sender</th>
            <th className="text-left px-2">Reciever</th>
            <th className="text-left px-2">Status</th>
            <th className="text-left px-2">Created</th>
            <th className="text-left px-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {signaturesRequested.map((item) => (
            <tr key={item.uuid}>
              <td className="p-2">{item.email}</td>
              <td className="p-2">
                {item.signers.map((i) => (
                  <p key={i.uuid}>{i.email}</p>
                ))}
              </td>
              <td className="p-2">{item.status}</td>
              <td className="p-2">{item.created}</td>
              <td className="p-2">
                <button
                  onClick={() => {
                    void handleDownloadOriginalFile(
                      item.token_requester,
                      item.files[0].filename
                    );
                  }}
                  className="mr-2"
                >
                  Download Original
                </button>
                <button
                  onClick={() => {
                    void handleDownloadSignedFile(
                      item.token_requester,
                      item.files[0].filename
                    );
                  }}
                >
                  Download Signed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ilovepdf;

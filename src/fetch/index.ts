import { parseResponseBody } from "@/utils";
import fetcher from "./fetcher";
import { SignaruteRequested } from "@/type";

export const getIlovePdftocken = async () =>
  fetcher("/ilovepdf/token", {
    method: "POST",
    body: JSON.stringify({}),
  }).then(parseResponseBody);

export const sendRequest = async () =>
  fetcher("/ilovepdf/signature/send", {
    method: "POST",
    body: JSON.stringify({}),
  }).then(parseResponseBody);

export const getSignatureRequestedList = async () =>
  fetcher("/ilovepdf/signature/list", {
    method: "GET",
  }).then(parseResponseBody<SignaruteRequested[]>);

export const getOriginalPdf = async (tokenRequester: string) =>
  fetcher("/ilovepdf/download-original", {
    method: "POST",
    body: JSON.stringify({ tokenRequester: tokenRequester }),
  });

export const getSignedPdf = async (tokenRequester: string) =>
  fetcher("/ilovepdf/download-signed", {
    method: "POST",
    body: JSON.stringify({ tokenRequester: tokenRequester }),
  });

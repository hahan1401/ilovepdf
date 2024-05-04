"use client";

import { getIlovepdfTockenAction } from "@/actions";
import { SignaruteRequested } from "@/type";
import React from "react";

const Ilovepdf = ({
  signaturesRequested,
}: {
  signaturesRequested: SignaruteRequested[];
}) => {
  console.log("signaturesRequested", signaturesRequested);
  return (
    <div>
      <button
        onClick={() => {
          void getIlovepdfTockenAction();
        }}
      >
        click
      </button>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-left px-2">Sender</th>
            <th className="text-left px-2">Reciever</th>
            <th className="text-left px-2">Status</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ilovepdf;

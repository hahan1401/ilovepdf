"use client";

import ILovePDFApi from "@ilovepdf/ilovepdf-nodejs";
import { useEffect } from "react";
import SignTask from "@ilovepdf/ilovepdf-js-core/tasks/sign/SignTask";
import SignatureFile from "@ilovepdf/ilovepdf-js-core/tasks/sign/elements/SignatureFile";
import Signer from "@ilovepdf/ilovepdf-js-core/tasks/sign/receivers/Signer";

export default function Home() {
  const instance = new ILovePDFApi(
    "project_public_01cc8a7ca79ae51e0581a4ee868beb03_4MNvs55130f5bb33943f49ce089da4c50f722",
    // "secret_key_a85681ca8ac387572696873553da4763_WuWXcae3e8b5e42020d84dda8a1321f1ee2b7"
  );

  const a = async () => {
    const task = instance.newTask("sign") as SignTask;

    // Promise-based way to use ILovePDFApi.
    task
      .start()
      .then(() => {
        return task.addFile("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf");
      })
      .then((file) => {
        const signatureFile = new SignatureFile(file, [
          {
            type: "signature",
            position: "300 -100",
            pages: "1",
            size: 28,
          },
        ]);

        return signatureFile;
      })
      .then((signatureFile) => {
        const signer = new Signer("hahan", "hanvietha141@gmail.com");
        signer.addFile(signatureFile);
        task.addReceiver(signer);
      })
      .then(() => {
        return task.process();
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <main>
      <button
        onClick={() => {
          void a();
        }}
      >
        click
      </button>
    </main>
  );
}

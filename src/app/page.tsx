
import Ilovepdf from "@/components/Ilovepdf";
import { getSignatureRequestedList } from "@/fetch";

export default async function Home() {
  const signaturesRequested = await getSignatureRequestedList()
  return (
    <main>
      <Ilovepdf signaturesRequested={signaturesRequested} />
    </main>
  );
}

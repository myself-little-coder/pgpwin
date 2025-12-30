import { Suspense } from "react";
import Loader from "@/components/Loader";
import WalletClient from "./WalletClient";

export default function WalletPage() {
  return (
    <Suspense
      fallback={
        <div className="h-dvh">
          <Loader />
        </div>
      }
    >
      <WalletClient />
    </Suspense>
  );
}

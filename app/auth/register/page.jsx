import { Suspense } from "react";
import RegisterClient from "./RegisterClient";
import Loader from "@/components/Loader";

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="h-dvh">
          <Loader />
        </div>
      }
    >
      <RegisterClient />
    </Suspense>
  );
}

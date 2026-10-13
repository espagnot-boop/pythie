"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { AppChat } from "@/components/app/chat";

function AppPageInner() {
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  return <AppChat initialQuestion={q} />;
}

export default function AppPage() {
  return (
    <Suspense>
      <AppPageInner />
    </Suspense>
  );
}

import Link from "next/link";
import { notFound } from "@/content/en";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center px-6">
      <p className="font-mono text-[96px] leading-none tabular-nums">{notFound.code}</p>
      <p className="mt-6 text-body">{notFound.message}</p>
      <span className="block-cursor mt-2" />
      <Button asChild className="mt-10">
        <Link href="/">{notFound.back}</Link>
      </Button>
    </div>
  );
}

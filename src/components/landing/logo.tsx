import Link from "next/link";
import { site } from "@/content/en";
import { PythieMark } from "@/components/brand/pythie-mark";
import { EuFlag } from "@/components/brand/eu-flag";

type LogoProps = {
  size?: number;
  showEu?: boolean;
};

export function Logo({ size = 32, showEu = true }: LogoProps) {
  const flagHeight = Math.max(20, Math.round(size * 0.78));

  return (
    <Link href="/" className="inline-flex min-w-0 items-center gap-3">
      <PythieMark size={size} className="shrink-0 text-foreground" />
      <div className="flex min-w-0 flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
        <span className="font-semibold text-[17px] leading-none tracking-tight">{site.name}</span>
        {showEu && (
          <div
            className="flex w-fit items-center gap-2.5 border border-[oklch(1_0_0/12%)] bg-[oklch(1_0_0/3%)] px-2.5 py-1.5"
            title="European Union · pythie.eu"
          >
            <EuFlag height={flagHeight} className="shrink-0 shadow-sm" />
            <div className="hidden min-[380px]:flex flex-col leading-tight">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Hosted in EU
              </span>
              <span className="font-mono text-[12px] tabular-nums text-foreground">pythie.eu</span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

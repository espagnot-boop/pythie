"use client";

import { useState } from "react";
import { waitlist } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Wipe } from "@/components/motion/wipe";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [count, setCount] = useState<number | null>(null);
  const [typedEmail, setTypedEmail] = useState("");

  const submit = async () => {
    setState("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; count?: number; error?: string };
      if (!res.ok) {
        setState("error");
        setErrorMsg(data.error === "invalid" ? waitlist.invalidEmail : waitlist.error);
        return;
      }
      if (typeof data.count === "number") setCount(data.count);
      setState("success");
      let i = 0;
      const type = () => {
        if (i <= email.length) {
          setTypedEmail(email.slice(0, i));
          i++;
          setTimeout(type, 20);
        }
      };
      type();
    } catch {
      setState("error");
      setErrorMsg(waitlist.error);
    }
  };

  return (
    <section id="attente" className="section-pad border-b border-border">
      <div className="grid-cols-12">
        <MaskLines text={waitlist.title} className="col-span-12 text-h2 lg:col-span-8" as="h2" />
        <div className="col-span-12 mt-12 max-w-xl">
          {state === "success" ? (
            <Wipe from="top">
              <p className="font-mono text-[16px]">{waitlist.success}</p>
              <p className="mt-2 font-mono text-[16px] text-muted-foreground">{typedEmail}</p>
            </Wipe>
          ) : (
            <div
              className={`flex border border-border-strong ${state === "error" ? "border-destructive" : ""}`}
            >
              <Input
                type="email"
                placeholder={waitlist.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={state === "loading"}
                className="h-14 border-0"
              />
              <Button
                className="h-14 shrink-0 border-0 border-l border-border-strong"
                loading={state === "loading"}
                onClick={() => void submit()}
              >
                {waitlist.submit}
              </Button>
            </div>
          )}
          {state === "error" && (
            <p className="mt-2 font-mono text-[13px] text-destructive">{errorMsg}</p>
          )}
          {count !== null && count >= 25 && (
            <p className="mt-4 font-mono text-[13px] text-muted-foreground">
              {count} {waitlist.countLabel}
            </p>
          )}
          <p className="mt-6 font-mono text-[12px] text-muted-foreground">{waitlist.gdpr}</p>
        </div>
      </div>
    </section>
  );
}

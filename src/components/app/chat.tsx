"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { app, site } from "@/content/en";
import { Logo } from "@/components/landing/logo";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "@/components/icons";
import { WaitlistForm } from "@/components/landing/waitlist-form";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function AppChat({ initialQuestion }: { initialQuestion: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState(initialQuestion);
  const [pending, setPending] = useState(false);
  const initialHandled = useRef(false);

  const showBetaGate = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setPending(true);
    setMessages([
      { id: newId(), role: "user", text: trimmed },
      { id: newId(), role: "assistant", text: app.betaGate.reply },
    ]);
    setInput("");
    setPending(false);
  };

  useEffect(() => {
    const text = initialQuestion.trim();
    if (!text || initialHandled.current) return;
    initialHandled.current = true;
    setMessages([
      { id: newId(), role: "user", text },
      { id: newId(), role: "assistant", text: app.betaGate.reply },
    ]);
    setInput("");
  }, [initialQuestion]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showBetaGate(input);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <Logo />
        <Link href="/#attente" className="link-hover font-mono text-[14px]">
          {app.betaGate.navCta}
        </Link>
      </header>
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-8">
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-h2">{app.emptyTitle}</h1>
            <p className="mt-4 text-body-sm">{app.emptyBody}</p>
            <p className="mt-6 font-mono text-[13px] text-muted-foreground">{app.betaGate.hint}</p>
          </div>
        ) : (
          <ul className="flex-1 space-y-8">
            {messages.map((m) => (
              <li key={m.id} className={m.role === "user" ? "text-right" : ""}>
                <p className="font-mono text-[12px] text-muted-foreground">
                  {m.role === "user" ? "you" : site.name}
                </p>
                <p className="mt-1 text-body">{m.text}</p>
                {m.role === "assistant" && (
                  <div className="mt-6 border border-border bg-muted/20 p-5 text-left">
                    <p className="font-mono text-[11px] text-accent">{app.betaGate.badge}</p>
                    <p className="mt-2 text-h3">{app.betaGate.title}</p>
                    <p className="mt-3 text-body-sm text-muted-foreground">{app.betaGate.body}</p>
                    <WaitlistForm className="mt-6 max-w-md" showGdpr />
                    <Link
                      href="/#attente"
                      className="mt-4 inline-block font-mono text-[13px] link-hover"
                    >
                      {app.betaGate.backToLanding}
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
        <form
          onSubmit={onSubmit}
          className="sticky bottom-0 border border-border-strong bg-background p-4"
        >
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={app.inputPlaceholder}
            className="min-h-[80px] text-[17px]"
          />
          <div className="mt-3 flex justify-end">
            <Button type="submit" loading={pending}>
              <Send className="mr-2" />
              {app.send}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

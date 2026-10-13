"use client";

import Link from "next/link";
import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import { app, site } from "@/content/en";
import { Logo } from "@/components/landing/logo";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "@/components/icons";

function messageText(parts: { type: string; text?: string }[]) {
  return parts
    .filter((p) => p.type === "text" && p.text)
    .map((p) => p.text)
    .join("");
}

export function AppChat({ initialQuestion }: { initialQuestion: string }) {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState(initialQuestion);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    void sendMessage({ text });
    setInput("");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <Logo />
        <Link href="/" className="link-hover font-mono text-[14px]">
          {site.name}
        </Link>
      </header>
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-8">
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-h2">{app.emptyTitle}</h1>
            <p className="mt-4 text-body-sm">{app.emptyBody}</p>
          </div>
        ) : (
          <ul className="flex-1 space-y-6">
            {messages.map((m) => (
              <li key={m.id} className={m.role === "user" ? "text-right" : ""}>
                <p className="font-mono text-[12px] text-muted-foreground">{m.role}</p>
                <p className="mt-1 text-body">{messageText(m.parts)}</p>
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
            <Button
              type="submit"
              loading={status === "streaming" || status === "submitted"}
            >
              <Send className="mr-2" />
              {app.send}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

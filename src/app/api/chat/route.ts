import { streamText } from "ai";
import { z } from "zod";

export const maxDuration = 30;

const bodySchema = z.object({
  messages: z.array(z.unknown()).optional(),
  id: z.string().optional(),
});

export async function POST(req: Request) {
  const json = (await req.json()) as unknown;
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return new Response("invalid body", { status: 400 });
  }

  const messages =
    (json as { messages?: { role: string; parts?: { type: string; text?: string }[]; content?: string }[] })
      .messages?.map((m) => ({
        role: m.role as "user" | "assistant" | "system",
        content:
          m.content ??
          m.parts
            ?.filter((p) => p.type === "text")
            .map((p) => p.text ?? "")
            .join("") ??
          "",
      })) ?? [];

  const result = streamText({
    model: "openai/gpt-4o-mini",
    system:
      "You are Pythie, a data analyst. Reply in English with precise figures and sources. Keep sentences short.",
    messages,
  });

  return result.toUIMessageStreamResponse();
}

import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { waitlist } from "@/lib/db/schema";
import { count } from "drizzle-orm";

const bodySchema = z.object({
  email: z.string().email(),
});

const memoryEmails = new Set<string>();

export async function POST(request: Request) {
  const json = (await request.json()) as unknown;
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const email = parsed.data.email.toLowerCase();
  const db = getDb();

  try {
    if (db) {
      await db.insert(waitlist).values({ email }).onConflictDoNothing();
      const [row] = await db.select({ value: count() }).from(waitlist);
      const total = row?.value ?? 0;
      return NextResponse.json({ ok: true, count: total });
    }
    memoryEmails.add(email);
    return NextResponse.json({ ok: true, count: memoryEmails.size });
  } catch {
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}

export async function GET() {
  const db = getDb();
  if (db) {
    const [row] = await db.select({ value: count() }).from(waitlist);
    return NextResponse.json({ count: row?.value ?? 0 });
  }
  return NextResponse.json({ count: memoryEmails.size });
}

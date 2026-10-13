import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const ROOT = join(process.cwd(), "src");

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return walk(p);
    if (/\.(tsx|css)$/.test(name)) return [p];
    return [];
  });
}

describe("no rounded corners in source", () => {
  it("has no rounded-* utility classes", () => {
    const files = walk(ROOT);
    const hits: string[] = [];
    for (const file of files) {
      const text = readFileSync(file, "utf8");
      if (/\brounded-/.test(text)) hits.push(file);
    }
    expect(hits).toEqual([]);
  });
});

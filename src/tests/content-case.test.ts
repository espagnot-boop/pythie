import { describe, expect, it } from "vitest";
import * as content from "@/content/en";

describe("content", () => {
  it("exports site name", () => {
    expect(content.site.name).toBe("pythie");
    expect(content.hero.title).toContain("Ask");
  });
});

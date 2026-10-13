import { finalCta } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { Wipe } from "@/components/motion/wipe";
import { ChatBar } from "@/components/landing/chat-bar";

export function FinalCta() {
  return (
    <section className="border-b border-border bg-accent py-16 text-accent-foreground lg:py-24">
      <Wipe from="bottom" className="grid-cols-12">
        <div className="col-span-12 text-center lg:col-span-10 lg:col-start-2">
          <MaskLines text={finalCta.title} className="text-display text-accent-foreground" as="h2" />
          <div className="mx-auto mt-12 max-w-2xl text-left">
            <ChatBar placeholderCycle={false} accentFrame submitLabel={finalCta.submit} />
          </div>
        </div>
      </Wipe>
    </section>
  );
}

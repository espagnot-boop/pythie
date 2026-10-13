import { faq } from "@/content/en";
import { SectionIconFaq } from "@/components/landing/section-icons";
import { MaskLines } from "@/components/motion/mask-lines";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="section-pad border-b border-border">
      <div className="grid-cols-12">
        <div className="col-span-12 flex items-start gap-4 lg:col-span-6">
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-border">
            <SectionIconFaq className="text-muted-foreground" />
          </span>
          <MaskLines text={faq.title} className="text-h2" as="h2" />
        </div>
        <div className="col-span-12 mt-12 lg:col-span-10">
          <Accordion type="single" collapsible className="w-full">
            {faq.items.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

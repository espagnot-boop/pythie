import { faq } from "@/content/en";
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
        <MaskLines text={faq.title} className="col-span-12 text-h2 lg:col-span-6" as="h2" />
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

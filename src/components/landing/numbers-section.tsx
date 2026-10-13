import { numbers } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { Odometer } from "@/components/motion/odometer";

export function NumbersSection() {
  return (
    <section id="chiffres" className="section-pad border-b border-border">
      <div className="grid-cols-12">
        <div className="col-span-12 lg:col-span-8">
          <MaskLines text={numbers.title} className="text-h2" as="h2" />
          <p className="mt-4 font-mono text-[13px] text-muted-foreground">{numbers.note}</p>
        </div>
        <div className="col-span-12 mt-16 grid grid-cols-2 gap-0 border-t border-border lg:grid-cols-4">
          {numbers.items.map((item, i) => (
            <div
              key={item.label}
              className={`border-border py-10 ${i > 0 ? "lg:border-l" : ""} ${i % 2 === 1 ? "border-l" : ""}`}
            >
              <p className="font-mono text-[clamp(28px,6vw,56px)] font-medium leading-none tracking-tight">
                <Odometer value={`${item.value}${item.suffix}`} />
              </p>
              <p className="mt-4 max-w-[200px] text-body-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

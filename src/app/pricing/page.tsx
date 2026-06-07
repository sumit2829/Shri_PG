import { PricingTable } from "@/components/PricingTable";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <section className="section bg-primary-50 pt-32 dark:bg-slate-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader eyebrow="Pricing" title="Transparent monthly PG plans" center>
          Compare AC, non AC, single, double, and triple sharing options with security deposit and included services.
        </SectionHeader>
        <div className="mt-10">
          <PricingTable />
        </div>
      </div>
    </section>
  );
}

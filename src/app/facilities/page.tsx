import { FacilityCard } from "@/components/FacilityCard";
import { SectionHeader } from "@/components/SectionHeader";
import { facilities } from "@/data/siteData";

export const metadata = { title: "Facilities" };

export default function FacilitiesPage() {
  return (
    <section className="section bg-primary-50 pt-32 dark:bg-slate-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader eyebrow="Facilities" title="Premium facilities for everyday student life" center>
          From WiFi and food to security, cleaning, parking, and support, the PG is built for practical comfort.
        </SectionHeader>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {facilities.map((item) => <FacilityCard key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  );
}

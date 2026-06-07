import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <section className="section bg-primary-50 pt-32 dark:bg-slate-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader eyebrow="Gallery" title="Rooms, food, facilities, and student life" center>
          Browse the PG spaces through a responsive masonry gallery with category filters and lightbox preview.
        </SectionHeader>
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}

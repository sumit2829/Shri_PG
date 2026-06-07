import { BookingForm } from "@/components/BookingForm";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Booking" };

export default function BookingPage() {
  return (
    <section className="section bg-primary-50 pt-32 dark:bg-slate-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader eyebrow="Booking" title="Reserve your room visit or booking" center>
          Submit your details and preferred room type. The form is validation-ready and structured for email integration.
        </SectionHeader>
        <div className="mt-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

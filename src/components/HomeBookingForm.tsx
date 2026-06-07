"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/constants";

const roomTypes = [
  "Single AC Room",
  "Single Non AC Room",
  "Double Sharing AC",
  "Double Sharing Non AC",
  "Triple Sharing AC",
  "Triple Sharing Non AC"
];

export function HomeBookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    college: "",
    roomType: "",
    date: "",
    message: ""
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = [
      "New Room Booking Request",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `College: ${form.college}`,
      `Room Type: ${form.roomType}`,
      `Check-in Date: ${form.date}`,
      `Message: ${form.message || "N/A"}`
    ].join("\n");

    window.open(`https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form onSubmit={submitBooking} className="mx-auto mt-6 w-full max-w-4xl rounded-3xl bg-white p-5 shadow-2xl dark:bg-slate-900 sm:p-8 lg:p-10">
      <div className="grid gap-5">
        <input
          required
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Your Name"
          className="h-14 rounded-2xl border border-slate-300 bg-white px-5 text-base outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 dark:border-white/10 dark:bg-slate-950 dark:text-white"
        />
        <input
          required
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder="Phone Number"
          className="h-14 rounded-2xl border border-slate-300 bg-white px-5 text-base outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 dark:border-white/10 dark:bg-slate-950 dark:text-white"
        />
        <input
          required
          value={form.college}
          onChange={(event) => updateField("college", event.target.value)}
          placeholder="College Name"
          className="h-14 rounded-2xl border border-slate-300 bg-white px-5 text-base outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 dark:border-white/10 dark:bg-slate-950 dark:text-white"
        />
        <select
          required
          value={form.roomType}
          onChange={(event) => updateField("roomType", event.target.value)}
          className="h-14 rounded-2xl border-2 border-slate-900 bg-white px-5 text-base outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 dark:border-white/20 dark:bg-slate-950 dark:text-white"
        >
          <option value="">Select Room Type</option>
          {roomTypes.map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
        <input
          required
          type="date"
          value={form.date}
          onChange={(event) => updateField("date", event.target.value)}
          className="h-14 rounded-2xl border border-slate-300 bg-white px-5 text-base outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 dark:border-white/10 dark:bg-slate-950 dark:text-white"
        />
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Message Boys & Girls and other Details"
          rows={5}
          className="rounded-2xl border border-slate-300 bg-white px-5 py-4 text-base outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 dark:border-white/10 dark:bg-slate-950 dark:text-white"
        />
        <button className="h-16 rounded-2xl bg-primary-700 text-lg font-black text-white transition hover:bg-primary-600">
          Send Booking on WhatsApp
        </button>
      </div>
    </form>
  );
}

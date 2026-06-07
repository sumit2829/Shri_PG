"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { rooms } from "@/data/siteData";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  university: z.string().min(2, "University is required"),
  roomType: z.string().min(1, "Select a room type"),
  checkIn: z.string().min(1, "Check-in date is required"),
  duration: z.string().min(1, "Duration is required"),
  requirements: z.string().optional()
});

type BookingValues = z.infer<typeof schema>;

export function BookingForm() {
  const [success, setSuccess] = useState(false);
  const { register, watch, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<BookingValues>({
    resolver: zodResolver(schema),
    defaultValues: { roomType: "double-sharing-ac", duration: "6 Months" }
  });
  const roomType = watch("roomType");
  const selectedRoom = useMemo(() => rooms.find((room) => room.slug === roomType) ?? rooms[0], [roomType]);

  const onSubmit = async (values: BookingValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("Email ready booking payload", values);
    setSuccess(true);
    reset();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_.8fr]">
      <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-5 sm:p-7">
        {success ? <div className="mb-5 rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">Booking request received. Our team will call you shortly.</div> : null}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" error={errors.name?.message}><input {...register("name")} className="input" /></Field>
          <Field label="Phone Number" error={errors.phone?.message}><input {...register("phone")} className="input" /></Field>
          <Field label="Email" error={errors.email?.message}><input type="email" {...register("email")} className="input" /></Field>
          <Field label="University" error={errors.university?.message}><input {...register("university")} className="input" /></Field>
          <Field label="Room Type" error={errors.roomType?.message}>
            <select {...register("roomType")} className="input">
              {rooms.map((room) => <option key={room.slug} value={room.slug}>{room.title}</option>)}
            </select>
          </Field>
          <Field label="Check In Date" error={errors.checkIn?.message}><input type="date" {...register("checkIn")} className="input" /></Field>
          <Field label="Duration" error={errors.duration?.message}>
            <select {...register("duration")} className="input">
              {["1 Month", "3 Months", "6 Months", "12 Months"].map((duration) => <option key={duration}>{duration}</option>)}
            </select>
          </Field>
          <Field label="Special Requirements" error={errors.requirements?.message}>
            <textarea {...register("requirements")} rows={4} className="input sm:col-span-2" />
          </Field>
        </div>
        <button disabled={isSubmitting} className="btn-primary mt-6 w-full disabled:opacity-60">{isSubmitting ? "Submitting..." : "Submit Booking Request"}</button>
      </form>
      <aside className="glass h-fit rounded-2xl p-6">
        <h3 className="text-xl font-black text-slate-950 dark:text-white">Pricing Summary</h3>
        <div className="mt-5 rounded-2xl bg-primary-50 p-5 dark:bg-white/10">
          <p className="text-sm font-bold text-primary-700 dark:text-blue-200">{selectedRoom.title}</p>
          <p className="mt-2 text-3xl font-black text-slate-950 dark:text-white">₹{selectedRoom.price.toLocaleString("en-IN")}</p>
          <p className="text-sm text-slate-500 dark:text-slate-300">per month</p>
        </div>
        <h4 className="mt-6 font-black text-slate-950 dark:text-white">Available Rooms</h4>
        <div className="mt-3 grid gap-3">
          {rooms.slice(0, 4).map((room) => (
            <div key={room.slug} className="flex items-center justify-between rounded-xl bg-white/70 p-3 text-sm dark:bg-white/10">
              <span className="font-semibold text-slate-700 dark:text-slate-200">{room.title}</span>
              <span className="text-primary-600 dark:text-blue-300">{room.available}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className={label === "Special Requirements" ? "sm:col-span-2" : ""}>
      <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs font-semibold text-red-500">{error}</span> : null}
    </label>
  );
}

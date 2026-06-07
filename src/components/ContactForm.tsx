"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ContactValues>();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSent(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-6">
      {sent ? <div className="mb-4 rounded-xl bg-emerald-50 p-3 text-sm font-bold text-emerald-700">Message sent successfully.</div> : null}
      <div className="grid gap-4">
        <input required placeholder="Name" {...register("name")} className="input" />
        <input required placeholder="Phone" {...register("phone")} className="input" />
        <input required type="email" placeholder="Email" {...register("email")} className="input" />
        <textarea required rows={5} placeholder="Message" {...register("message")} className="input" />
      </div>
      <button disabled={isSubmitting} className="btn-primary mt-5 w-full">{isSubmitting ? "Sending..." : "Send Message"}</button>
    </form>
  );
}

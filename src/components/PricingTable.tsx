import Link from "next/link";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { pricingPlans } from "@/data/siteData";

export function PricingTable() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {pricingPlans.map((plan) => (
        <article key={plan.name} className={`relative rounded-2xl border p-6 shadow-lg ${
          plan.recommended
            ? "border-primary-500 bg-primary-600 text-white"
            : "border-primary-100 bg-white text-slate-950 dark:border-white/10 dark:bg-white/10 dark:text-white"
        }`}>
          {plan.recommended ? (
            <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black text-primary-700">
              <FaStar /> Recommended
            </span>
          ) : null}
          <h3 className="pr-28 text-xl font-black">{plan.name}</h3>
          <p className="mt-5 text-4xl font-black">₹{plan.price.toLocaleString("en-IN")}</p>
          <p className={`mt-1 text-sm ${plan.recommended ? "text-blue-50" : "text-slate-500 dark:text-slate-300"}`}>per month</p>
          <p className={`mt-4 rounded-xl px-4 py-3 text-sm font-semibold ${plan.recommended ? "bg-white/15" : "bg-primary-50 text-primary-700 dark:bg-white/10 dark:text-blue-100"}`}>
            Security deposit: ₹{plan.deposit.toLocaleString("en-IN")}
          </p>
          <ul className="mt-5 grid gap-3 text-sm">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <FaCheckCircle className={plan.recommended ? "text-blue-100" : "text-primary-600 dark:text-blue-300"} />
                {feature}
              </li>
            ))}
          </ul>
          <Link href="/booking" className={plan.recommended ? "mt-6 flex rounded-full bg-white px-5 py-3 text-center text-sm font-black text-primary-700" : "btn-primary mt-6 w-full"}>
            Choose Plan
          </Link>
        </article>
      ))}
    </div>
  );
}

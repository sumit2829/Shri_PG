import type { IconType } from "react-icons";

export function FacilityCard({ title, text, icon: Icon }: { title: string; text: string; icon: IconType }) {
  return (
    <article className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-2">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-600 text-xl text-white">
        <Icon />
      </div>
      <h3 className="mt-5 text-lg font-black text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
    </article>
  );
}

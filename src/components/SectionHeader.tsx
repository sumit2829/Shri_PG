import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
};

export function SectionHeader({ eyebrow, title, children, center = false }: SectionHeaderProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {children ? <div className="section-copy">{children}</div> : null}
    </div>
  );
}

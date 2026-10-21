import type { ReactNode } from "react";

type PageCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function PageCard({ title, children, className = "" }: PageCardProps) {
  return (
    <article className={`page-card ${className}`.trim()}>
      <h1>{title}</h1>
      <div className="page-content">{children}</div>
    </article>
  );
}

import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
}

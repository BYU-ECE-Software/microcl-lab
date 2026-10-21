import type { Metadata } from "next";

import { ExternalLink } from "@/components/ExternalLink";
import { PageCard } from "@/components/PageCard";
import { relatedLinks } from "@/data/pages";

export const metadata: Metadata = {
  title: "Links",
  description: "Related university and research laboratory links.",
};

export default function LinksPage() {
  return (
    <PageCard title="Links" className="short-card links-card">
      <ul className="plain-list related-links">
        {relatedLinks.map((link) => (
          <li key={link.href}>
            <ExternalLink href={link.href}>{link.label}</ExternalLink>
          </li>
        ))}
      </ul>
    </PageCard>
  );
}

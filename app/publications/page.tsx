import type { Metadata } from "next";

import { ExternalLink } from "@/components/ExternalLink";
import { PageCard } from "@/components/PageCard";
import { news, patents, publicationSections } from "@/data/publications";
import type { Publication } from "@/data/types";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Journal articles, conference papers, patents, and news from the Micropower Circuits Laboratory.",
};

function PublicationList({ entries }: { entries: Publication[] }) {
  return (
    <ul className="plain-list publication-list">
      {entries.map((entry) => (
        <li key={entry.citation}>
          {entry.citation}{" "}
          {entry.href ? (
            <ExternalLink href={entry.href}>
              [{entry.linkLabel ?? "Link"}]
            </ExternalLink>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function PublicationsPage() {
  return (
    <PageCard title="Publications" className="publications-card">
      {publicationSections.map((section) => (
        <section className="publication-section" key={section.heading}>
          <h2>{section.heading}</h2>
          <PublicationList entries={section.entries} />
        </section>
      ))}
      <section className="publication-section">
        <h2>Patents:</h2>
        <PublicationList entries={patents} />
      </section>
      <section className="publication-section">
        <h2>News:</h2>
        <ul className="plain-list news-list">
          {news.map((item) => (
            <li key={item.href}>
              <ExternalLink href={item.href}>{item.label}</ExternalLink>
            </li>
          ))}
        </ul>
      </section>
    </PageCard>
  );
}

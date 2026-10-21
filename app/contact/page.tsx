import type { Metadata } from "next";

import { PageCard } from "@/components/PageCard";
import { contact } from "@/data/pages";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for the Micropower Circuits Laboratory.",
};

export default function ContactPage() {
  return (
    <PageCard title="Contact" className="short-card contact-card">
      <address>
        <p>
          {contact.name}
          <br />
          {contact.department}
          <br />
          {contact.university}
          <br />
          {contact.city}
        </p>
        <p>
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          <br />
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </address>
    </PageCard>
  );
}

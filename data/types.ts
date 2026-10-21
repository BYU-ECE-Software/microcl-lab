export type NavigationItem = {
  label: string;
  href: string;
};

export type ExternalLink = {
  label: string;
  href: string;
};

export type Course = {
  code: string;
  title: string;
};

export type CircuitChallenge = {
  prompt: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

export type StudentGroup = {
  heading: string;
  students: string[];
};

export type Publication = {
  citation: string;
  href?: string;
  linkLabel?: "Link" | "Media";
};

export type PublicationSection = {
  heading: string;
  entries: Publication[];
};

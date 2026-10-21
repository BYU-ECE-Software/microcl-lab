import type { NavigationItem } from "./types";

export const site = {
  name: "Micropower Circuits Laboratory",
  shortName: "MCL",
  description:
    "High-performance, low-power analog, mixed-signal, and RF integrated circuit research at Brigham Young University.",
  repositoryBasePath: "/microcl-lab",
  socialUrl: "https://x.com/micropowerclab",
} as const;

export const navigation: NavigationItem[] = [
  { label: "About", href: "/" },
  { label: "Biography", href: "/biography" },
  { label: "Publications", href: "/publications" },
  { label: "Teaching", href: "/teaching" },
  { label: "Students", href: "/students" },
  { label: "Links", href: "/links" },
  { label: "Contact", href: "/contact" },
];

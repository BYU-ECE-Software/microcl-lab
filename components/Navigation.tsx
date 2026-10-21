"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/data/site";

function normalizePath(pathname: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const withoutBasePath =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length)
      : pathname;
  return withoutBasePath.replace(/\/$/, "") || "/";
}

export function Navigation() {
  const pathname = normalizePath(usePathname());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="site-navigation" aria-label="Primary navigation">
      <button
        className="navigation-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>Menu</span>
        <span className="navigation-toggle-icon" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>
      <ul
        id="primary-navigation"
        className={`navigation-list${isOpen ? " is-open" : ""}`}
      >
        {navigation.map((item) => {
          const isCurrent = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isCurrent ? "is-current" : undefined}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

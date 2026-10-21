import type { Metadata } from "next";

import { PageCard } from "@/components/PageCard";
import { courses } from "@/data/pages";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Courses taught by Professor Shiuh-hua Wood Chiang.",
};

export default function TeachingPage() {
  return (
    <PageCard title="Teaching" className="short-card">
      <ul className="plain-list course-list">
        {courses.map((course) => (
          <li key={course.code}>
            {course.code} {course.title}
          </li>
        ))}
      </ul>
    </PageCard>
  );
}

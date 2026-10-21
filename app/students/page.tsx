import type { Metadata } from "next";

import { PageCard } from "@/components/PageCard";
import { studentGroups, studentsIntroduction } from "@/data/students";

export const metadata: Metadata = {
  title: "Students",
  description: "Current and former Micropower Circuits Laboratory students.",
};

export default function StudentsPage() {
  return (
    <PageCard title="Students" className="students-card">
      <p>{studentsIntroduction}</p>
      <div className="student-groups">
        {studentGroups.map((group) => (
          <section key={group.heading}>
            <h2>{group.heading}</h2>
            <ul className="plain-list">
              {group.students.map((student) => (
                <li key={student}>{student}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageCard>
  );
}

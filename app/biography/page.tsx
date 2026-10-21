import type { Metadata } from "next";
import Image from "next/image";

import { PageCard } from "@/components/PageCard";
import { biography } from "@/data/pages";
import { assetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Biography",
  description: "Biography of Professor Shiuh-hua Wood Chiang.",
};

const departmentName = "Department of Electrical and Computer Engineering";
const [beforeDepartment, afterDepartment] =
  biography.paragraphs[1].split(departmentName);

export default function BiographyPage() {
  return (
    <PageCard title="Biography" className="biography-card">
      <Image
        className="portrait"
        src={assetPath(biography.portrait)}
        alt={biography.portraitAlt}
        width={360}
        height={503}
        priority
      />
      <p>
        {biography.paragraphs[0]}{" "}
        {beforeDepartment}
        <a href={biography.departmentUrl}>{departmentName}</a>
        {afterDepartment}
      </p>
    </PageCard>
  );
}

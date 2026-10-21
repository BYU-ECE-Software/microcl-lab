import Image from "next/image";

import { ExternalLink } from "@/components/ExternalLink";
import { PageCard } from "@/components/PageCard";
import { about, circuitChallenges } from "@/data/pages";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assets";

export default function Home() {
  return (
    <PageCard title="About" className="about-card">
      <p>{about.introduction}</p>
      <p>
        MCL news are posted on X:{" "}
        <ExternalLink href={site.socialUrl}>{site.socialUrl}</ExternalLink>
      </p>
      <p>{about.invitation}</p>
      <ol className="circuit-challenges">
        {circuitChallenges.map((challenge) => (
          <li key={challenge.image}>
            <p>{challenge.prompt}</p>
            <Image
              className="circuit-image"
              src={assetPath(challenge.image)}
              alt={challenge.alt}
              width={challenge.width}
              height={challenge.height}
            />
          </li>
        ))}
      </ol>
    </PageCard>
  );
}

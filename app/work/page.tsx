import type { Metadata } from "next";
import { allProjects } from "@/lib/content";
import { ProjectList } from "@/components/projects/project-list";

export const metadata: Metadata = {
  title: "Projects",
  description: "Every project I have built, each with a case study.",
  alternates: { canonical: "/work" },
};

export default function Work() {
  return (
    <div className="shell pt-10 pb-24 md:pt-16 md:pb-32">
      <h1 className="enter text-display font-semibold">Projects</h1>
      <p className="enter mt-4 max-w-[46ch] text-lead text-fg-2" style={{ "--i": 1 } as React.CSSProperties}>
        Everything I have built, from client platforms to personal projects. Each one has a case study.
      </p>
      <div className="enter mt-14" style={{ "--i": 2 } as React.CSSProperties}>
        <ProjectList items={allProjects} />
      </div>
    </div>
  );
}

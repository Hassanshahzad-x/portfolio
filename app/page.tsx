import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { FIRST_STOP, SelectedWork } from "@/components/projects/selected-work";
import { Capabilities } from "@/components/capabilities/capabilities";
import { Experience } from "@/components/experience/experience";
import { Contact } from "@/components/contact/contact";
import { allProjects } from "@/lib/content";

// The homepage is one numbered trace: the start, who, nine projects, how I build, the path, next step.
const after = FIRST_STOP + allProjects.length;

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <Capabilities stop={after} />
      <Experience stop={after + 1} />
      <Contact stop={after + 2} />
    </>
  );
}

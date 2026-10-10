import { Hero } from "@/components/hero/hero";
import { SelectedWork } from "@/components/projects/selected-work";
import { Capabilities } from "@/components/capabilities/capabilities";
import { Experience } from "@/components/experience/experience";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Capabilities />
      <Experience />
      <About />
      <Contact />
    </>
  );
}

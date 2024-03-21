import Image from "next/image";
import { Landing, HowItWorks, AboutMe } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Landing />
      <HowItWorks />
      <AboutMe />
    </main>
  );
}

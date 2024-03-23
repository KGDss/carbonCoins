import Image from "next/image";
import { Landing, HowItWorks, AboutUs, OurTeam } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Landing />
      <HowItWorks />
      <AboutUs />
      <OurTeam />
    </main>
  );
}

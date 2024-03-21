import Image from "next/image";
import { Landing, HowItWorks, AboutUs } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Landing />
      <HowItWorks />
      <AboutUs />
    </main>
  );
}

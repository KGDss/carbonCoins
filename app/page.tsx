import { AboutUs, HowItWorks, Landing, OurTeam } from "@/components/home";

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

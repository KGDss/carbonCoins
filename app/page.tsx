import { AboutUs, HowItWorks, Landing, OurTeam } from "@/components/home";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Toaster richColors position="top-right" />
      <Landing />
      <HowItWorks />
      <AboutUs />
      <OurTeam />
    </main>
  );
}

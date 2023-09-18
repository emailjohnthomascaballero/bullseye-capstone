import { Oswald } from "next/font/google";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Hero from "src/pages/home/hero";
import Tactical from "src/pages/home/tacticalshootingtraining";
import Safe from "src/pages/home/safefunaffordable";
import Upcoming from "src/pages/home/upcomingevent";
import Some from "src/pages/home/someservice";
import FloatAnimation from "@/components/FloatAnimation";
import MoveRightAnimation from "src/components/MoveRightAnimation";

const oswald = Oswald({ subsets: ["latin"] });

export default function Index() {
  return (
    <div className={`${oswald.className}`}>
      <FloatAnimation />
      <MoveRightAnimation />
      <Navbar />
      <Hero />
      <Tactical />
      <Safe />
      <Upcoming />
      <Some />
      <Footer />
    </div>
  );
}

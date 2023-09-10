import { Oswald } from "next/font/google";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Hero from "src/pages/home/hero";
import Tactical from "src/pages/home/tacticalshootingtraining";
import Safe from "src/pages/home/safefunaffordable";

const oswald = Oswald({ subsets: ["latin"] });

export default function Index() {

  return (
    <div className={`${oswald.className}`}>
      <Navbar />
      <Hero />
      <Tactical />
      <Safe />
      <Footer />
    </div>
  );
}

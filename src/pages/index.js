import Image from "next/image";
import { Oswald } from "next/font/google";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";

const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`text-3xl ${oswald.className}`}>
      <Navbar />

      <h1>Hello World</h1>

      <Footer />
    </div>
  );
}

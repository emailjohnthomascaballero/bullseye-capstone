import Image from "next/image";
import { Oswald } from "next/font/google";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";

const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${oswald.className}`}>
      <Navbar />

      <h1>Hello World</h1> 

      <Footer />
    </div>
  );
}

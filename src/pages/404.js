import { Oswald } from "next/font/google";
import Error from "./404/404banner";
import Navbar from "src/components/navbar";
import Footer from "src/components/footer";
import FloatAnimation from "@/components/FloatAnimation";

const oswald = Oswald({ subsets: ["latin"] });

export default function Custom404() {
  return (
    <div className={`${oswald.className}`}>
      <FloatAnimation />
      <Navbar />
      <Error />
      <Footer />
    </div>
  );
}

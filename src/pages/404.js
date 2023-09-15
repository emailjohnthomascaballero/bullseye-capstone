import { Oswald } from "next/font/google";
import Error from "./404/404banner";
import Navbar from "src/components/navbar";
import Footer from "src/components/footer";

const oswald = Oswald({ subsets: ["latin"] });

export default function Custom404() {
  return (
    <div className={`${oswald.className}`}>
      <Navbar />
      <Error />
      <Footer />
    </div>
  );
}

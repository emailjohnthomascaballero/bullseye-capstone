import Image from "next/image";
import { Oswald } from "next/font/google";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Hero from "src/pages/home/heroSection";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const oswald = Oswald({ subsets: ["latin"] });

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`${oswald.className}`}>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

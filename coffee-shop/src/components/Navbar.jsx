import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" sticky top-0 z-50 bg-espresso text-cream ">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-2 ">

        {/* logo */}
        <a href="/">
          <img
            className="h-12 w-12 rounded-2xl object-cover"
            src={logo}
            alt="Coffee Shop Logo"
          />
        </a>

        {/* hamburger button: */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* menu + order button */}
<div
        className={`${isOpen ? "flex" : "hidden"} w-full flex-col items-center gap-4 py-4 font-medium md:flex md:flex-1 md:flex-row md:py-0`}
        >
        {/* links: yeh div center mein rahega */}
        <div className="flex flex-col items-center gap-4 md:flex-1 md:flex-row md:justify-center md:gap-8">
            <a href="/" className="hover:text-orange/70">Home</a>
            <a href="/about" className="hover:text-orange/70">About</a>
            <a href="/menu" className="hover:text-orange/70">Menu</a>
            <a href="/contact" className="hover:text-orange/70">Contact</a>
            <a href="/gallery" className="hover:text-orange/70">Gallery</a>
        </div>

        {/* order button */}
        <button className="cursor-pointer rounded-2xl bg-orange px-4 py-2 text-base font-medium text-cream hover:bg-orange/70 hover:text-black">
            Order Now
        </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
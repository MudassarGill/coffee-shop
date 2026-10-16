import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ShoppingCart } from "lucide-react";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-espresso text-cream">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-2">

        {/* logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            className="h-12 w-12 rounded-2xl object-cover"
            src={logo}
            alt="Coffee Shop Logo"
          />
        </Link>

        {/* cart icon + hamburger (mobile par dono hamesha nazar aate hain) */}
        <div className="flex items-center gap-5 md:order-last">
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            aria-label="Cart"
            className="relative"
          >
            <ShoppingCart size={26} />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange text-xs font-bold text-espresso">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* menu + order button */}
        <div
          className={`${isOpen ? "flex" : "hidden"} w-full flex-col items-center gap-4 py-4 font-medium md:flex md:flex-1 md:flex-row md:py-0`}
        >
          {/* links: center mein */}
          <div className="flex flex-col items-center gap-4 md:flex-1 md:flex-row md:justify-center md:gap-8">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-orange/70">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-orange/70">About</Link>
            <Link to="/menu" onClick={() => setIsOpen(false)} className="hover:text-orange/70">Menu</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-orange/70">Contact</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-orange/70">Gallery</Link>
          </div>

          {/* order button */}
          <Link
            to="/menu"
            onClick={() => setIsOpen(false)}
            className="rounded-2xl bg-orange px-4 py-2 text-base font-medium text-espresso hover:bg-orange/70"
          >
            Order Now
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
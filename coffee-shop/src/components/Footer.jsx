import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-espresso px-6 pb-6 pt-14 text-cream">
      <div className="mx-auto max-w-6xl">

        {/* upar wala hissa: chaar columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* 1: brand */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <img
                src={logo}
                alt="Ember Coffee logo"
                className="h-12 w-12 rounded-2xl object-cover"
              />
              <span className="font-heading text-2xl font-bold">Ember Coffee</span>
            </div>
            <p className="text-cream/80">Good coffee, good company.</p>
          </div>

          {/* 2: quick links */}
          <div>
            <h3 className="mb-3 font-bold">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-cream/80">
              <li><a href="/" className="hover:text-orange">Home</a></li>
              <li><a href="/about" className="hover:text-orange">About</a></li>
              <li><a href="/menu" className="hover:text-orange">Menu</a></li>
              <li><a href="/contact" className="hover:text-orange">Contact</a></li>
              <li><a href="/gallery" className="hover:text-orange">Gallery</a></li>
            </ul>
          </div>

          {/* 3: opening hours */}
          <div>
            <h3 className="mb-3 font-bold">Opening Hours</h3>
            <p className="text-cream/80">Mon - Fri: 5PM - 10PM</p>
            <p className="text-cream/80">Sat - Sun: 10AM - 6PM</p>
          </div>

          {/* 4: contact */}
          <div>
            <h3 className="mb-3 font-bold">Find Us</h3>
            <p className="text-cream/80">Lahore Punjab Pakistan</p>
            <p className="text-cream/80">+923051565030</p>
            <p className="text-cream/80">info@embercoffee.com</p>
          </div>

        </div>

        {/* neeche wala hissa: copyright */}
        <p className="mt-12 border-t border-cream/20 pt-6 text-center text-sm text-cream/70">
          © {new Date().getFullYear()} Ember Coffee. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <header className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-12 md:flex-row md:gap-12 md:py-20 ">
      {/* left: text */}
      <div className="flex-1 text-center md:text-left">
        <p className="mb-3 text-sm font-bold tracking-widest text-roast">
          FRESHLY ROASTED DAILY
        </p>

        <h1 className="mb-5 font-heading text-4xl font-bold leading-tight md:text-6xl">
          Your day starts better with a great cup.
        </h1>

        <p className="mx-auto mb-8 max-w-md text-lg md:mx-0">
          Small-batch coffee, warm pastries and a quiet corner to enjoy them.
          Come in, sit down, stay a while.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="/menu"
            className="rounded-2xl bg-espresso px-8 py-4 font-bold text-cream hover:bg-orange hover:text-black"
          >
            View Menu
          </a>
          <a
            href="/about"
            className="rounded-2xl border-2 border-espresso px-8 py-3.5 font-bold hover:bg-espresso hover:text-cream"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* right: image */}
      <div className="w-full flex-1  shadow-lg shadow-espresso/40 rounded-3xl md:max-w-lg">
        <img
          src={heroImg}
          alt="Latte served on a wooden table"
          className="h-80 w-full rounded-3xl object-cover md:h-[480px] "
        />
      </div>

    </header>
  );
}

export default Hero;
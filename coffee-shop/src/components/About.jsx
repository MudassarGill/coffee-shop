import aboutImg from "../assets/about-barista.jpg";

function AboutSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:gap-12">

      {/* left: image */}
      <div className="w-full flex-1  shadow-lg shadow-espresso/40 rounded-3xl md:max-w-lg">
        <img
          src={aboutImg}
          alt="Barista preparing coffee"
          className="h-80 w-full rounded-3xl object-cover shadow-xl shadow-espresso/30 md:h-[420px]"
        />
      </div>

      {/* right: text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="mb-4 font-heading text-4xl font-bold leading-tight">
          Made with care, served with a smile
        </h2>

        <p className="mb-8 text-lg">
          Yahan apni kahani likho: aap kaun ho aur aap ne yeh coffee shop
          kyun shuru ki. Do teen jumlay kaafi hain.
        </p>

        <a
          href="/about"
          className="inline-block rounded-full bg-roast px-8 py-4 font-bold text-white hover:bg-espresso"
        >
          Visit Us Today
        </a>
      </div>

    </section>
  );
}

export default AboutSection;
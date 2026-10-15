import { useState } from "react";

const galleryImages = [
  {
    src: "/images/espresso.jpg",
    title: "Classic Espresso",
    category: "Hot Coffee",
  },
  {
    src: "/images/cappuccino.jpg",
    title: "Creamy Cappuccino",
    category: "Hot Coffee",
  },
  {
    src: "/images/latte.jpg",
    title: "Smooth Latte",
    category: "Hot Coffee",
  },
  {
    src: "/images/americano.jpg",
    title: "Rich Americano",
    category: "Hot Coffee",
  },
  {
    src: "/images/mocha.jpg",
    title: "Chocolate Mocha",
    category: "Special Coffee",
  },
  {
    src: "/images/caramel-macchiato.jpg",
    title: "Caramel Macchiato",
    category: "Special Coffee",
  },
  {
    src: "/images/iced-coffee.jpg",
    title: "Refreshing Iced Coffee",
    category: "Cold Coffee",
  },
  {
    src: "/images/chocolate-frappe.jpg",
    title: "Chocolate Frappe",
    category: "Cold Coffee",
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Hot Coffee", "Special Coffee", "Cold Coffee"];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-cream text-espresso ">
      <section className="bg-black px-6 py-20 text-center text-cream md:py-28">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange">
          A Taste of Our World
        </p>

        <h1 className="mb-5 font-heading text-4xl font-bold md:text-6xl">
          Our Gallery
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-7 text-cream/80 md:text-lg">
          Every cup tells a story. Explore our coffee creations and discover
          the warmth, flavor, and passion behind every sip.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold md:text-4xl">
            Coffee Moments
          </h2>

          <p className="text-espresso/70">
            Explore our collection of handcrafted coffee favorites.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-2xl cursor-pointer px-5 py-3 text-sm font-bold transition ${
                activeCategory === category
                  ? "bg-espresso text-cream"
                  : "border border-espresso/40 bg-white text-espresso hover:bg-orange hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image) => (
            <article
              key={image.src}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-espresso/10 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-right from-black to-roast px-6 py-20 text-center text-cream" />

                <div className="absolute bottom-0 left-0 p-5 text-cream">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange">
                    {image.category}
                  </p>

                  <h3 className="font-heading text-xl font-bold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-orange/20 px-6 py-16 text-center">
        <h2 className="mb-4 font-heading text-3xl font-bold">
          Your Next Favorite Cup Awaits
        </h2>

        <p className="mx-auto max-w-xl leading-7 text-espresso/80">
          Discover your favorite flavor and make every coffee break special.
        </p>
      </section>
    </main>
  );
}

export default Gallery;
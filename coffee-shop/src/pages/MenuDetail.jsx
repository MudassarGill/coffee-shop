import { Link, useParams } from "react-router";
import { menuItems } from "../data/menuData";

function MenuDetail() {
  const { id } = useParams();
  const item = menuItems.find((menuItem) => menuItem.id === Number(id));

  if (!item) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24 text-center shadow-lg shadow-espresso/40 ">
        <h1 className="mb-4 font-heading text-4xl font-bold">Item not found</h1>
        <p className="mb-8 text-lg">Sorry, we could not find this item.</p>
        <Link
          to="/menu"
          className="inline-block rounded-2xl bg-espresso px-8 py-4 font-bold text-cream hover:bg-roast"
        >
          Back to Menu
        </Link>
      </section>
    );
  }

  // agar item mil jaye
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:gap-12">

      {/* left: image */}
      <div className="w-full flex-1">
        <img
          src={item.image}
          alt={item.name}
          className="h-80 w-full rounded-2xl object-cover shadow-3xl shadow-espresso/50 md:h-[480px]"
        />
      </div>

      {/* right: details */}
      <div className="flex-1 text-center md:text-left">
        <p className="mb-2 text-sm font-bold tracking-widest text-roast">
          {item.category.toUpperCase()}
        </p>
        <h1 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
          {item.name}
        </h1>
        <p className="mb-6 text-3xl font-bold text-roast">Rs. {item.price}</p>
        <p className="mb-8 text-lg">{item.description}</p>

        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <button className="cursor-pointer rounded-2xl bg-orange px-8 py-4 font-bold text-espresso hover:bg-espresso hover:text-cream">
            Order Now
          </button>
          <Link
            to="/menu"
            className="rounded-2xl border-2 border-espresso px-8 py-3.5 font-bold hover:bg-espresso hover:text-cream"
          >
            Back to Menu
          </Link>
        </div>
      </div>

    </section>
  );
}

export default MenuDetail;
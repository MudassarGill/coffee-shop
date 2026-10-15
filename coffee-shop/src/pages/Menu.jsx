
import { menuItems } from "../data/menuData";
import MenuCard from "../components/MenuCard";

function Menu() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
          Our Menu
        </h1>

        <p className="mx-auto max-w-2xl text-lg">
          Explore our collection of freshly prepared coffee and
          discover your next favorite drink.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;

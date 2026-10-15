import { Link } from "react-router";

function MenuCard({ id, image, name, description, price, category }) {
  return (
    <Link
      to={`/menu/${id}`}
      className="group block overflow-hidden rounded-3xl bg-cream shadow-lg shadow-espresso/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl "
    >
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 "
      />

      <div className="p-5">
        <p className="mb-1 text-xs font-bold tracking-widest text-roast">
          {category.toUpperCase()}
        </p>
        <h3 className="mb-2 font-heading text-xl font-bold transition-colors duration-300 group-hover:text-orange">
          {name}
        </h3>
        <p className="mb-4 text-sm">{description}</p>
        <p className="text-lg font-bold text-roast">Rs. {price}</p>
      </div>
    </Link>
  );
}

export default MenuCard;
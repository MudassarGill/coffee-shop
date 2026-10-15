function TeamCard({ image, name, role }) {
  return (
    <article className="group text-center">
      <div className="mb-4 overflow-hidden rounded-3xl shadow-lg shadow-espresso/20">
        <img
          src={image}
          alt={name}
          className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-heading text-xl font-bold transition-colors duration-300 group-hover:text-orange">
        {name}
      </h3>
      <p className="text-roast">{role}</p>
    </article>
  );
}

export default TeamCard;
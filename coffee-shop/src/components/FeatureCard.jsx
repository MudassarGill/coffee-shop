function FeatureCard({ image, title, description }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-cream shadow-lg shadow-espresso/40 ">
      <img src={image} alt={title} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110" />

      <div className="p-6">
        <h3 className="mb-2 font-heading text-2xl font-bold ransition-colors duration-400 group-hover:text-orange">{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default FeatureCard;
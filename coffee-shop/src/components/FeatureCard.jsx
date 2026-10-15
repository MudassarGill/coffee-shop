function FeatureCard({ image, title, description }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-cream">
      <img src={image} alt={title} className="h-52 w-full object-cover" />

      <div className="p-6">
        <h3 className="mb-2 font-heading text-2xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default FeatureCard;
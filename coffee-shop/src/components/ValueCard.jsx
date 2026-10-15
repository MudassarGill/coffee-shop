function ValueCard({ icon, title, description }) {
  return (
    <article className="rounded-3xl bg-cream p-8 text-center shadow-lg shadow-espresso/40">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-espresso text-orange">
        {icon}
      </div>
      <h3 className="mb-2 font-heading text-2xl font-bold">{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ValueCard;
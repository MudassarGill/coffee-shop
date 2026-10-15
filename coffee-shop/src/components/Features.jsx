import FeatureCard from "./FeatureCard";
import beansImg from "../assets/feature-beans.jpg";
import pastryImg from "../assets/feature-pastry.jpg";
import interiorImg from "../assets/feature-interior.jpg";

function Features() {
  return (
    <section className="bg-latte px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-2 text-center font-heading text-4xl font-bold ">
          Why people love Ember
        </h2>
        <p className="mb-12 text-center text-lg">
          Three things we never compromise on.
        </p>

        <div className="grid gap-7 md:grid-cols-3">
          <FeatureCard
            image={beansImg}
            title="Fresh Roasted Beans"
            description="Ethically sourced beans, roasted in small batches every week for rich, balanced flavour."
          />
          <FeatureCard
            image={pastryImg}
            title="Baked Every Morning"
            description="Croissants, cookies and cakes baked fresh each day to pair perfectly with your drink."
          />
          <FeatureCard
            image={interiorImg}
            title="A Cozy Place to Stay"
            description="Soft lighting, comfy seats and free Wi-Fi. Work, read or catch up with friends."
          />
        </div>

      </div>
    </section>
  );
}

export default Features;
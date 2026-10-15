import { Coffee, Heart, Leaf } from "lucide-react";
import ValueCard from "../components/ValueCard";
import TeamCard from "../components/TeamCard";
import bannerImg from "../assets/about-banner.jpg";
import storyImg from "../assets/about-story.jpg";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";

function About() {
  return (
    <>
      {/* 1. banner */}
      <section className="relative">
        <img
          src={bannerImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center text-cream md:py-32">
          <p className="mb-3 text-sm font-bold tracking-widest text-orange">
            ABOUT US
          </p>
          <h1 className="font-heading text-4xl font-bold md:text-6xl">
            The story behind every cup
          </h1>
        </div>
      </section>

      {/* 2. our story */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="mb-4 font-heading text-4xl font-bold">Our Story</h2>
          <p className="mb-4 text-lg">
            Ember Coffee started with a simple idea: everyone deserves a really
            good cup of coffee and a warm place to enjoy it.
          </p>
          <p className="text-lg">
            We roast our beans in small batches, bake fresh every morning, and
            make every drink by hand. Our door is always open, whether you
            want a quick espresso or a long afternoon with a book.
          </p>
        </div>

        <div className="w-full flex-1">
          <img
            src={storyImg}
            alt="Coffee being roasted"
            className="h-80 w-full rounded-3xl object-cover shadow-3xl shadow-espresso/30 md:h-[420px] shadow"
          />
        </div>
      </section>

      {/* 3. values */}
      <section className="bg-latte px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-center font-heading text-4xl font-bold">
            What we believe in
          </h2>
          <p className="mb-12 text-center text-lg">Three promises we keep.</p>

          <div className="grid gap-7 md:grid-cols-3 shadow">
            <ValueCard
              icon={<Coffee size={32} />}
              title="Quality First"
              description="We choose our beans carefully and never rush a single cup."
            />
            <ValueCard
              icon={<Heart size={32} />}
              title="Community"
              description="Our shop is a place for neighbours, friends and new faces."
            />
            <ValueCard
              icon={<Leaf size={32} />}
              title="Responsible Sourcing"
              description="We work with growers who care for their land and their people."
            />
          </div>
        </div>
      </section>

      {/* 4. team */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-2 text-center font-heading text-4xl font-bold">
          Meet our team
        </h2>
        <p className="mb-12 text-center text-lg">
          The people behind your coffee.
        </p>

        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3">
          <TeamCard image={team1} name="Ayesha Khan" role="Head Barista" />
          <TeamCard image={team2} name="Usman Ali" role="Pastry Chef" />
          <TeamCard image={team3} name="Sara Ahmed" role="Shop Manager" />
        </div>
      </section>

      {/* 5. call to action */}
      <section className="bg-roast px-6 py-16 text-center text-white">
        <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
          Come say hello
        </h2>
        <p className="mx-auto mb-8 max-w-md text-lg">
          The coffee is hot and the door is open.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-2xl bg-cream px-8 py-4 font-bold text-espresso hover:bg-orange"
        >
          Visit Us
        </a>
      </section>
    </>
  );
}

export default About;
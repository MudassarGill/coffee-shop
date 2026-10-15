import React from "react";
function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! Your message form is ready.");
  }

  return (
    <main className="bg-cream text-espresso">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-black to-roast px-6 py-20 text-center text-cream">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange">
          We'd Love To Hear From You
        </p>

        <h1 className="mb-5 font-heading text-4xl font-bold md:text-6xl">
          Get In Touch
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-7 text-cream/80 md:text-lg">
          Have a question, a suggestion, or just want to talk coffee?
          Send us a message. We'd love to hear from you.
        </p>
      </section>

      {/* Contact section */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* Contact information */}
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-roast">
            Contact Information
          </p>

          <h2 className="mb-5 font-heading text-3xl font-bold md:text-4xl">
            Let's Start a Conversation
          </h2>

          <p className="mb-10 leading-7 text-espresso/70">
            Whether you need help with an order or want to learn more
            about our coffee, we're here to help.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange text-xl">
                
              </div>
              <div>
                <h3 className="mb-1 font-bold">Our Location</h3>
                <p className="text-espresso/70">
                  Add your coffee shop address here
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange text-xl">
                
              </div>
              <div>
                <h3 className="mb-1 font-bold">Phone Number</h3>
                <p className="text-espresso/70">
                  Add your phone number here
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange text-xl">
                
              </div>
              <div>
                <h3 className="mb-1 font-bold">Email Address</h3>
                <p className="text-espresso/70">
                  Add your email address here
                </p>
              </div>
            </div>
          </div>

          {/* Opening hours */}
          <div className="mt-10 rounded-2xl bg-white p-6 shadow-lg shadow-espresso/60">
            <h3 className="mb-4 font-heading text-xl font-bold">
              Opening Hours
            </h3>

            <div className="flex justify-between gap-4 border-b border-espresso/10 py-3">
              <span>Monday - Friday</span>
              <span className="font-semibold">9 AM - 10 PM</span>
            </div>

            <div className="flex justify-between gap-4 py-3">
              <span>Saturday - Sunday</span>
              <span className="font-semibold">10 AM - 11 PM</span>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-3xl bg-white p-6 shadow-lg shadow-espresso/60 md:p-10">
          <h2 className="mb-2 font-heading text-2xl font-bold md:text-3xl">
            Send Us a Message
          </h2>

          <p className="mb-8 text-sm leading-6 text-espresso/60">
            Fill in the form below and tell us how we can help.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-espresso/20 bg-cream/50 px-4 py-3 outline-none transition focus:border-roast focus:ring-2 focus:ring-orange/30"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-espresso/20 bg-cream/50 px-4 py-3 outline-none transition focus:border-roast focus:ring-2 focus:ring-orange/30"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                required
                className="w-full rounded-xl border border-espresso/20 bg-cream/50 px-4 py-3 outline-none transition focus:border-roast focus:ring-2 focus:ring-orange/30"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full resize-y rounded-xl border border-espresso/20 bg-cream/50 px-4 py-3 outline-none transition focus:border-roast focus:ring-2 focus:ring-orange/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-espresso px-6 py-4 font-bold text-cream transition hover:bg-roast"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;

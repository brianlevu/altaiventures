import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-36">
      <div className="container-shell">
        {/* Header */}
        <Reveal variant="up">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-champagne">
              Contact
            </p>
            <h2 className="display mb-8 text-[clamp(2rem,4vw,3.5rem)] text-navy">
              Begin Your Inquiry
            </h2>
            <p className="text-base leading-[1.8] text-navy/80">
              Interested in Santa Ray for a short stay, or want updates when a
              long-term home becomes available? We respond within two business days.
            </p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal variant="up" delay={40}>
          <form className="mx-auto max-w-2xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="group border-b border-taupe/60 pb-3 transition-colors duration-200 ease-out focus-within:border-champagne">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full bg-transparent text-base text-navy placeholder:text-slate/60 outline-none"
                  required
                />
              </div>
              <div className="group border-b border-taupe/60 pb-3 transition-colors duration-200 ease-out focus-within:border-champagne">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent text-base text-navy placeholder:text-slate/60 outline-none"
                  required
                />
              </div>
              <div className="border-b border-taupe/60 pb-3 transition-colors duration-200 ease-out focus-within:border-champagne md:col-span-2">
                <select
                  name="interest"
                  className="w-full bg-transparent text-base text-slate/70 outline-none appearance-none cursor-pointer"
                >
                  <option value="">Area of Interest</option>
                  <option value="santa-ray">769 Santa Ray — Short-term booking</option>
                  <option value="delaney">2717 Delaney Ct — Long-term waitlist</option>
                  <option value="yeandle">20649 Yeandle Ave — Long-term waitlist</option>
                  <option value="general">General inquiry</option>
                </select>
              </div>
              <div className="border-b border-taupe/60 pb-3 transition-colors duration-200 ease-out focus-within:border-champagne md:col-span-2">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full resize-none bg-transparent text-base text-navy placeholder:text-slate/60 outline-none"
                />
              </div>
            </div>

            <div className="mt-16 text-center">
              <button
                type="submit"
                className="border border-navy px-12 py-4 text-xs uppercase tracking-[0.25em] text-navy transition-all duration-150 ease-out hover:bg-navy hover:text-ivory active:scale-[0.98]"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

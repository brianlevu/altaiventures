import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-36">
      <div className="container-shell">
        {/* Header */}
        <Reveal variant="up">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-champagne">
              Contact
            </p>
            <h2 className="display mb-8 text-[clamp(2rem,4vw,3.5rem)] text-navy">
              Begin Your Inquiry
            </h2>
            <p className="text-sm leading-[1.9] text-slate">
              Interested in Santa Ray for a short stay, or want updates when a
              long-term home becomes available? We respond within two business days.
            </p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal variant="up" delay={200}>
          <form className="mx-auto max-w-2xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="group border-b border-taupe/60 pb-3 transition-colors duration-500 focus-within:border-champagne">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full bg-transparent text-sm text-navy placeholder:text-slate/30 outline-none tracking-wide"
                  required
                />
              </div>
              <div className="group border-b border-taupe/60 pb-3 transition-colors duration-500 focus-within:border-champagne">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent text-sm text-navy placeholder:text-slate/30 outline-none tracking-wide"
                  required
                />
              </div>
              <div className="border-b border-taupe/60 pb-3 transition-colors duration-500 focus-within:border-champagne md:col-span-2">
                <select
                  name="interest"
                  className="w-full bg-transparent text-sm text-slate/60 outline-none tracking-wide appearance-none cursor-pointer"
                >
                  <option value="">Area of Interest</option>
                  <option value="santa-ray">769 Santa Ray — Short-term booking</option>
                  <option value="delaney">2717 Delaney Ct — Long-term waitlist</option>
                  <option value="yeandle">20649 Yeandle Ave — Long-term waitlist</option>
                  <option value="general">General inquiry</option>
                </select>
              </div>
              <div className="border-b border-taupe/60 pb-3 transition-colors duration-500 focus-within:border-champagne md:col-span-2">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full resize-none bg-transparent text-sm text-navy placeholder:text-slate/30 outline-none tracking-wide"
                />
              </div>
            </div>

            <div className="mt-16 text-center">
              <button
                type="submit"
                className="border border-navy px-12 py-4 text-[10px] uppercase tracking-[0.35em] text-navy transition-all duration-500 hover:bg-navy hover:text-ivory"
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

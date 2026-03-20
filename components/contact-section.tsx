import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ivory px-6 py-28 md:px-0">
      <div className="mx-auto w-full max-w-[960px]">
        {/* Header */}
        <Reveal variant="up">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium tracking-[4px] text-champagne">
              CONTACT
            </p>
            <h2 className="display mb-4 text-[clamp(2rem,4vw,2.75rem)] text-navy">
              Begin Your Inquiry
            </h2>
            <p className="mb-4 text-[15px] leading-[1.8] text-navy/80">
              Interested in Santa Ray for a short stay, or want updates when a
              long-term home becomes available? We respond within two business days.
            </p>
            <div className="mx-auto h-px w-12 bg-champagne/40" />
          </div>
        </Reveal>

        {/* Form */}
        <Reveal variant="up" delay={40}>
          <form className="mx-auto max-w-2xl">
            <div className="flex flex-col gap-9">
              <div className="grid gap-12 md:grid-cols-2">
                <div className="border-b border-navy/10 pb-3.5 transition-colors duration-200 ease-out focus-within:border-champagne">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full bg-transparent text-base text-navy placeholder:text-slate/40 outline-none"
                    required
                  />
                </div>
                <div className="border-b border-navy/10 pb-3.5 transition-colors duration-200 ease-out focus-within:border-champagne">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent text-base text-navy placeholder:text-slate/40 outline-none"
                    required
                  />
                </div>
              </div>
              <div className="border-b border-navy/10 pb-3.5 transition-colors duration-200 ease-out focus-within:border-champagne">
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
              <div className="border-b border-navy/10 pb-3.5 transition-colors duration-200 ease-out focus-within:border-champagne">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full resize-none bg-transparent text-base text-navy placeholder:text-slate/40 outline-none"
                />
              </div>
            </div>

            <div className="mt-10 text-center">
              <button
                type="submit"
                className="bg-navy px-14 py-4 text-xs font-medium tracking-[4px] text-white transition-all duration-150 ease-out hover:bg-navy/90 active:scale-[0.98]"
              >
                SEND INQUIRY
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

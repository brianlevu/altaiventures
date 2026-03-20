import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Altai Ventures properties and LandlordHours app.",
};

export default function TermsPage() {
  return (
    <section className="bg-ivory pt-32 pb-28">
      <div className="mx-auto max-w-[760px] px-6">
        <p className="mb-4 text-xs font-medium tracking-[4px] text-champagne">
          LEGAL
        </p>
        <h1 className="display mb-4 text-[clamp(2.5rem,5vw,3.5rem)] text-navy">
          Terms & Conditions
        </h1>
        <p className="mb-16 text-sm text-navy/50">
          Last updated: March 20, 2026
        </p>

        <div className="space-y-12 text-[15px] leading-[1.85] text-navy/80">
          {/* 1 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by Altai Ventures (&quot;Company,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), including our website at altaiventures.co and the
              LandlordHours mobile application (collectively, the &quot;Services&quot;), you agree
              to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree
              to these Terms, please do not use our Services.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">2. Services Description</h2>
            <p className="mb-4">
              Altai Ventures operates a residential real estate portfolio in the East Bay
              area of California, including short-term and long-term rental properties.
              We also develop and offer the LandlordHours mobile application, which helps
              landlords and real estate investors track activity hours toward IRS tax
              qualification thresholds.
            </p>
            <p>
              The LandlordHours app is designed as a tracking and documentation tool.
              It does not provide tax advice, legal advice, or accounting services.
              Users should consult qualified tax professionals regarding their specific
              tax situations.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">3. LandlordHours App</h2>
            <h3 className="mb-2 text-base font-semibold text-navy">3.1 License</h3>
            <p className="mb-4">
              We grant you a limited, non-exclusive, non-transferable, revocable license
              to use the LandlordHours app for personal, non-commercial purposes in
              accordance with these Terms.
            </p>
            <h3 className="mb-2 text-base font-semibold text-navy">3.2 Purchases</h3>
            <p className="mb-4">
              LandlordHours Pro is available as a one-time in-app purchase. All purchases
              are processed through Apple&apos;s App Store and are subject to Apple&apos;s terms
              and conditions. Refund requests must be directed to Apple.
            </p>
            <h3 className="mb-2 text-base font-semibold text-navy">3.3 Data & Privacy</h3>
            <p>
              LandlordHours stores your data locally on your device and optionally syncs
              via iCloud. We do not collect, store, or have access to your personal data
              or hour-tracking records. Your data remains entirely under your control.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">4. Rental Properties</h2>
            <h3 className="mb-2 text-base font-semibold text-navy">4.1 Short-Term Rentals</h3>
            <p className="mb-4">
              Short-term rental bookings at 769 Santa Ray Ave are facilitated through
              third-party platforms (such as Airbnb). These bookings are subject to the
              respective platform&apos;s terms of service in addition to these Terms.
            </p>
            <h3 className="mb-2 text-base font-semibold text-navy">4.2 Long-Term Rentals</h3>
            <p>
              Long-term rental inquiries are subject to separate lease agreements.
              Availability, pricing, and terms are determined on a case-by-case basis.
              Submitting an inquiry through our website does not constitute a binding
              agreement.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">5. User Conduct</h2>
            <p>
              You agree not to: (a) use our Services for any unlawful purpose;
              (b) attempt to gain unauthorized access to our systems;
              (c) interfere with the proper functioning of our Services;
              (d) submit false or misleading information through our contact forms;
              (e) reproduce, distribute, or create derivative works from our content
              without written permission.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">6. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property displayed on our
              website and within the LandlordHours app are owned by Altai Ventures.
              You may not use, copy, or distribute any of our intellectual property
              without prior written consent.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">7. Disclaimer of Warranties</h2>
            <p>
              Our Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of
              any kind, either express or implied. We do not warrant that the Services
              will be uninterrupted, error-free, or free of viruses or other harmful
              components. The LandlordHours app is a tracking tool and does not guarantee
              IRS qualification or tax benefits.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Altai Ventures shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages,
              including but not limited to loss of profits, data, or tax benefits,
              arising out of or in connection with your use of our Services.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">9. Privacy Policy</h2>
            <p>
              Your use of our Services is also governed by our Privacy Policy. The
              LandlordHours app does not collect personal data — all information is
              stored locally on your device or in your personal iCloud account. Our
              website may collect information submitted through contact forms solely
              for the purpose of responding to inquiries.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be
              effective immediately upon posting to our website. Your continued use of
              our Services after any changes constitutes acceptance of the updated Terms.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the
              laws of the State of California, without regard to its conflict of law
              provisions. Any disputes arising under these Terms shall be subject to
              the exclusive jurisdiction of the courts located in Alameda County,
              California.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="display mb-4 text-2xl text-navy">12. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:{" "}
              <a
                href="mailto:hello@altaiventures.co"
                className="text-champagne transition-colors duration-150 hover:text-navy"
              >
                hello@altaiventures.co
              </a>
            </p>
            <p className="mt-4">
              Altai Ventures<br />
              East Bay, California
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-taupe/40 pt-8">
          <Link
            href="/"
            className="text-xs font-medium tracking-[3px] text-champagne transition-colors duration-150 hover:text-navy"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </section>
  );
}

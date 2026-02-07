import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | Lina Motor Assessors & Valuers",
  description:
    "Get in touch with Lina Motor Assessors & Valuers for professional motor assessment and valuation services. Contact us today for expert consultation.",
};

const ContactPage = () => {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <Image
          src="/images/contact-hero.webp"
          alt="Contact Lina Motor Assessors & Valuers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl text-white">
              <h1 className="text-white mb-6">Contact Us</h1>
              <p className="text-lg text-white/90 leading-relaxed">
                Get in touch with our team of professional motor assessors and
                valuers. We&apos;re here to assist with your vehicle assessment
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* CONTACT INFORMATION */}
            <div>
              <h2 className="mb-8">Get in Touch</h2>

              <p className="text-text-secondary leading-relaxed mb-10">
                Contact Lina Motor Assessors & Valuers for professional,
                independent, and timely motor assessment services. Our team is
                ready to assist you with all your vehicle valuation and
                assessment needs.
              </p>

              {/* CONTACT DETAILS */}
              <div className="space-y-6 mb-10">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+254-xxx-xxx-xxx"
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      +254 XXX XXX XXX
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@linamotors.co.ke"
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      info@linamotors.co.ke
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Location
                    </h3>
                    <p className="text-text-secondary">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Business Hours
                    </h3>
                    <div className="text-text-secondary space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* QUICK LINKS */}
              <div className="bg-soft rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/services/accident-assessment"
                      className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Accident Assessment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/vehicle-valuation"
                      className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Vehicle Valuation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/quality-assurance"
                      className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Quality Assurance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="bg-white border border-border rounded-xl p-8 shadow-card">
              <h2 className="mb-6">Send Us a Message</h2>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input-base"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input-base"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="input-base"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="input-base"
                  >
                    <option value="">Select a service</option>
                    <option value="accident-assessment">
                      Accident Assessment
                    </option>
                    <option value="vehicle-valuation">
                      Vehicle Valuation
                    </option>
                    <option value="quality-assurance">
                      Quality Assurance
                    </option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="input-base resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>

                <p className="text-xs text-text-muted text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP SECTION (PLACEHOLDER) ================= */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="mb-4">Visit Our Office</h2>
            <p className="text-text-secondary">
              We&apos;re conveniently located in Nairobi, Kenya
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-[400px] bg-surface rounded-xl border border-border flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-primary mx-auto mb-4" />
              <p className="text-text-muted">
                Map integration coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="section section-soft">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>

          <p className="text-text-secondary leading-relaxed mb-8">
            Contact Lina Motor Assessors & Valuers today for professional motor
            assessment and valuation services you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254-xxx-xxx-xxx" className="btn btn-primary gap-2">
              <Phone size={18} />
              Call Us Now
            </a>
            <a href="mailto:info@linamotors.co.ke" className="btn btn-secondary gap-2">
              <Mail size={18} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <Image
        src="/images/home-hero-bg.webp"
        alt="Professional motor vehicle assessment and valuation in Kenya"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay (decorative) */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl text-white">
            <h1
              id="hero-heading"
              className="text-white"
            >
              Independent Motor Assessors &amp; Valuers You Can Trust
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Lina Motor Assessors &amp; Valuers provides accurate, independent
              motor vehicle assessment and valuation services for insurance
              companies, corporates, and individual clients across Kenya.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="btn btn-primary btn-cta"
                aria-label="Request a professional motor vehicle valuation"
              >
                Get a Valuation
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/about"
                className="btn btn-secondary border-white text-white hover:bg-white hover:text-primary"
                aria-label="Learn more about Lina Motor Assessors and Valuers"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
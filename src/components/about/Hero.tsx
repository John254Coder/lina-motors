import Image from "next/image";

const AboutHero = () => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      <Image
        src="/images/about-motor-assessment.webp"
        alt="Professional motor vehicle assessment and valuation process"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

            <div className="text-white max-w-xl">

              {/* Brand Accent */}
              <div className="w-16 h-1 bg-[#7A1F2B] mb-6" />

              <h1
                id="about-hero-heading"
                className="text-white leading-tight"
              >
                About Us
              </h1>

              <p className="mt-4 text-lg tracking-wide text-white/85">
                Assessors <span className="mx-2 text-white/50">|</span>
                Valuers <span className="mx-2 text-white/50">|</span>
                Consultants
              </p>

            </div>

            <div aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

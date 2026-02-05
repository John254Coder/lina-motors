import Link from "next/link";

const SoftCTA = () => {
  return (
    <section className="section bg-soft" aria-labelledby="soft-cta-heading">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          id="soft-cta-heading"
          className="text-primary text-2xl md:text-3xl font-semibold mb-4"
        >
          Ready to Get a Professional Valuation?
        </h2>
        <p className="text-text-secondary text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Contact Lina Motor Assessors &amp; Valuers today to schedule a thorough,
          independent, and reliable motor vehicle assessment or valuation. Our
          team is ready to assist insurers, corporates, financial institutions, and
          private clients with professional expertise.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="btn btn-primary btn-cta px-8 py-3"
            aria-label="Request a motor vehicle assessment"
          >
            Request an Assessment
          </Link>
          <Link
            href="/get-quote"
            className="btn btn-secondary border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
            aria-label="Get a valuation quote"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SoftCTA;

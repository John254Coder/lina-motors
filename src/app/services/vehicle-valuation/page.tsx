import Image from "next/image";
import ServiceLayout from "@/components/layout/ServiceLayout";

export const metadata = {
  title: "Vehicle Valuation Services | Lina Motor Assessors & Valuers",
  description:
    "Professional motor vehicle valuation services providing accurate market value assessments for insurance, sale, purchase, and financial purposes.",
};

const VehicleValuationPage = () => {
  return (
    <ServiceLayout
      title="Vehicle Valuation"
      description="Accurate, independent motor vehicle valuations based on condition, usage, and prevailing market factors."
      heroImage="/images/vehicle-valuation-hero.webp"
      heroAlt="Professional vehicle valuation inspection"
      ctaTitle="Request a Vehicle Valuation"
      ctaDescription="Contact Lina Motor Assessors & Valuers for a professional and independent vehicle valuation you can rely on."
      ctaLabel="Get a Valuation"
    >
      {/* ================= OVERVIEW ================= */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-justify">
              <h2 className="mb-6">Professional Vehicle Valuation Services</h2>

              <p className="mb-5 text-text-secondary leading-relaxed">
                Our valuation services assess vehicle age, mileage, mechanical
                history, and condition to determine accurate market value.
              </p>

              <p className="mb-5 text-text-secondary leading-relaxed">
                Valuations are conducted using recognized principles supported
                by thorough inspection and factual analysis.
              </p>

              <p className="text-text-secondary leading-relaxed">
                Services apply to all vehicle types for insurance, sale,
                purchase, financing, and related purposes.
              </p>
            </div>

            <div className="relative w-full h-[420px] lg:h-[520px]">
              <Image
                src="/images/vehicle-valuation-process.webp"
                alt="Vehicle inspection and valuation process"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="mb-6">Our Valuation Process</h2>

          <p className="text-text-secondary leading-relaxed mb-10">
            Each valuation assignment follows a structured and transparent
            process.
          </p>

          <ul className="space-y-5 text-left max-w-3xl mx-auto">
            <li className="flex items-start gap-4">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="text-text-secondary">
                Road testing and physical inspection of the vehicle.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="text-text-secondary">
                Review of mechanical condition, usage history, and wear.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="text-text-secondary">
                Issuance of valuation report within 24 hours via soft copy.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default VehicleValuationPage;

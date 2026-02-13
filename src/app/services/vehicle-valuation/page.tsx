import Image from "next/image";
import ServiceLayout from "@/components/layout/ServiceLayout";

export const metadata = {
  title: "Vehicle Valuation Services | Lina Motor Assessors & Valuers",
  description:
    "Professional motor vehicle valuation services providing accurate market value assessments for insurance, sale, purchase, and financial purposes.",
};

export default function VehicleValuationPage() {
  return (
    <ServiceLayout
      title="Vehicle Valuation"
      description={
        <div className="space-y-4">
          <p className="text-lg font-medium text-white/95">
            Accurate, independent motor vehicle valuations based on condition,
            usage, and prevailing market factors.
          </p>

          <ul className="space-y-2 text-white/90">
            <li className="flex items-start gap-2">
              <span className="text-white font-semibold">✔</span>
              <span>Valuation reports issued within 24 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white font-semibold">✔</span>
              <span>Recognized by insurers & financial institutions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white font-semibold">✔</span>
              <span>All vehicle categories covered</span>
            </li>
          </ul>
        </div>
      }
      heroImage="/images/vehicle-valuation.avif"
      heroAlt="Professional vehicle valuation inspection"
      ctaTitle="Need a Vehicle Valuation?"
      ctaDescription="Engage our certified valuers for accurate, independent, and professionally documented vehicle market assessments."
      ctaLabel="Request Valuation"
    >

      {/* ================= OVERVIEW ================= */}
<section className="section section-light">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* TEXT SIDE */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Professional Vehicle Valuation Services
        </h2>

        <div className="space-y-10 text-left">
          
          {/* BLOCK 1 */}
          <div className="pl-5 border-l-2 border-primary/30">
            <p className="text-text-secondary leading-relaxed">
              Our valuation services assess vehicle age, mileage, mechanical
              history, and condition to determine accurate market value.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div className="pl-5 border-l-2 border-primary/30">
            <p className="text-text-secondary leading-relaxed">
              Valuations are conducted using recognized principles supported
              by thorough inspection and factual analysis.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="pl-5 border-l-2 border-primary/30">
            <p className="text-text-secondary leading-relaxed">
              Services apply to all vehicle types for insurance, sale,
              purchase, financing, and related purposes.
            </p>
          </div>

        </div>
      </div>

      {/* IMAGE SIDE */}
      <div className="relative w-full h-[320px] lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/images/vehicle-valuation-service.avif"
          alt="Vehicle inspection and valuation process"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>

    </div>
  </div>
</section>


     {/* ================= PROCESS ================= */}
<section className="section section-light">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="mb-6">Our Valuation Process</h2>

    <p className="text-secondary leading-relaxed mb-12">
      Each valuation assignment follows a structured and transparent process.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* STEP 1 */}
      <div className="text-center relative">
        <div className="inline-flex items-center justify-center mb-8 relative">
          {/* Outer dashed circle */}
          <svg className="absolute w-40 h-40" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#4a6bb8"
              strokeWidth="2"
              strokeDasharray="8,8"
              opacity="0.4"
            />
          </svg>
          {/* Inner solid circle */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-light/20 to-primary/10 grid place-items-center relative z-10">
            <span className="text-4xl font-bold text-primary">01</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Testing</h3>
        <p className="text-muted leading-relaxed">
          Road testing and physical inspection of the vehicle.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="text-center relative">
        <div className="inline-flex items-center justify-center mb-8 relative">
          {/* Outer dashed circle */}
          <svg className="absolute w-40 h-40" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#4a6bb8"
              strokeWidth="2"
              strokeDasharray="8,8"
              opacity="0.4"
            />
          </svg>
          {/* Inner solid circle */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-light/20 to-primary/10 grid place-items-center relative z-10">
            <span className="text-4xl font-bold text-primary">02</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Review</h3>
        <p className="text-muted leading-relaxed">
          Review of mechanical condition, usage history, and wear.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="text-center relative">
        <div className="inline-flex items-center justify-center mb-8 relative">
          {/* Outer dashed circle */}
          <svg className="absolute w-40 h-40" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#4a6bb8"
              strokeWidth="2"
              strokeDasharray="8,8"
              opacity="0.4"
            />
          </svg>
          {/* Inner solid circle */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-light/20 to-primary/10 grid place-items-center relative z-10">
            <span className="text-4xl font-bold text-primary">03</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Reporting</h3>
        <p className="text-muted leading-relaxed">
          Issuance of valuation report within 24 hours via soft copy.
        </p>
      </div>

    </div>
  </div>
</section>
    </ServiceLayout>
  );
};


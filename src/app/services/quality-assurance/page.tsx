import Image from "next/image";
import ServiceLayout from "@/components/layout/ServiceLayout";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Quality Assurance | Lina Motor Assessors & Valuers",
  description:
    "Professional quality assurance services ensuring high standards in motor vehicle repairs, assessments, and reporting.",
};

const QualityAssurancePage = () => {
  return (
    <ServiceLayout
      title="Quality Assurance"
      description="Ensuring repair quality, professional standards, and service consistency through independent inspection and continuous performance review."
      heroImage="/images/quality-assurance-hero.webp"
      heroAlt="Motor vehicle quality assurance and inspection"
      ctaTitle="Trusted Quality. Consistent Standards."
      ctaDescription="Engage Lina Motor Assessors & Valuers for independent quality assurance services that protect value, uphold standards, and reinforce confidence in motor repair and assessment outcomes."
      ctaLabel="Request Quality Assurance Support"
    >
      {/* ================= OVERVIEW ================= */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* TEXT CONTENT */}
            <div className="text-justify">
              <h2 className="mb-6">Our Quality Assurance Approach</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Lina Motor Assessors &amp; Valuers maintains a strong commitment
                to quality assurance across all services provided. We regularly
                evaluate the quality of our assessments, reports, and repair
                monitoring activities to ensure consistency with professional
                standards and client expectations.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                Our quality assurance process incorporates continuous review of
                service delivery, analysis of client feedback, and implementation
                of corrective measures where necessary. This structured approach
                enables ongoing improvement and reinforces confidence in our
                professional output.
              </p>

              <p className="text-text-secondary leading-relaxed mb-8">
                By monitoring industry practices and market developments, we
                ensure that our methodologies remain current, effective, and
                aligned with accepted standards within the motor assessment and
                valuation profession.
              </p>

              {/* KEY QUALITY ASSURANCE AREAS */}
              <ul className="space-y-4">
                {[
                  "Regular review of assessment and valuation reports",
                  "Monitoring repair workmanship and approved estimates",
                  "Client feedback evaluation and service improvement",
                  "Adherence to professional and ethical standards",
                  "Continuous process refinement and best practice adoption",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-primary mt-1 flex-shrink-0"
                    />
                    <span className="text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[420px] lg:h-[520px]">
              <Image
                src="/images/quality-assurance.webp"
                alt="Inspection and quality review of vehicle repairs"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default QualityAssurancePage;
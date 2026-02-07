import Image from "next/image";
import ServiceLayout from "@/components/layout/ServiceLayout";

export const metadata = {
  title: "Accident Assessment Services | Lina Motor Assessors & Valuers",
  description:
    "Professional and independent accident assessment services to determine repair costs and support efficient insurance claim resolution.",
};

export default function AccidentAssessmentPage() {
  return (
    <ServiceLayout
      title="Accident Assessment"
      description="Professional and independent assessment of accident-damaged vehicles to establish accurate repair costs and support fast, effective insurance claim resolution."
      heroImage="/images/services/accident-hero.webp"
      heroAlt="Motor vehicle accident assessment by professional assessors"
      ctaTitle="Need an Accident Assessment?"
      ctaDescription="Engage our professional motor assessors for accurate, independent, and timely accident assessments that support informed decisions and efficient claims processing."
      ctaLabel="Request Assessment"
    >
      {/* ================= OVERVIEW ================= */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-justify">
            <p className="mb-6">
              Lina Motor Assessors &amp; Valuers enables insurers and clients to
              determine actual repair costs of vehicles involved in accidents
              through accurate, professional, and cost-effective assessment
              services.
            </p>

            <p className="mb-6">
              Assessments are conducted promptly, often on the day of appointment,
              with detailed reports issued within two working days to facilitate
              quick and effective claims processing.
            </p>

            <p>
              Where reporting timelines may be affected due to incomplete
              documentation or further examination, any delays are formally
              communicated within 24 hours to ensure transparency.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SCOPE ================= */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div>
              <h2 className="mb-8">Scope of Accident Assessment Services</h2>

              <div className="space-y-8 text-justify">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Inspection Reports
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Each assessment begins with a detailed inspection based on
                    accident circumstances, vehicle condition, age, mileage,
                    and fitted accessories.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Continuous Repair Assessment
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    We monitor repairs at approved garages to ensure quality
                    workmanship, correct parts usage, and adherence to approved
                    estimates.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Post-Inspection Reports
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Final inspections confirm that completed repairs meet
                    professional standards, insurer requirements, and client
                    expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[420px] lg:h-[520px]">
              <Image
                src="/images/services/accident-detail.webp"
                alt="Accident damaged vehicle inspection process"
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
}

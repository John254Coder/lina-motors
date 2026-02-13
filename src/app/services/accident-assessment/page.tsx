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
      description={
        <div className="space-y-4">
          <p className="text-lg font-medium text-white/95">
            Independent, professional assessment of accident-damaged vehicles.
          </p>

          <ul className="space-y-2 text-white/90">
            <li className="flex items-start gap-2">
              <span className="text-white font-semibold">✔</span>
              <span>Accurate repair cost evaluation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white font-semibold">✔</span>
              <span>Faster insurance claim resolution</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white font-semibold">✔</span>
              <span>Trusted by insurers and vehicle owners</span>
            </li>
          </ul>
        </div>
      }
      heroImage="/images/accident-assessment.avif"
      heroAlt="Motor vehicle accident assessment by professional assessors"
      ctaTitle="Need an Accident Assessment?"
      ctaDescription="Engage our professional motor assessors for accurate, independent, and timely accident assessments that support informed decisions and efficient claims processing."
      ctaLabel="Request Assessment"
    >
      {/* ================= OVERVIEW ================= */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* WHAT WE DO */}
            <div className="bg-white border border-border/50 rounded-xl p-8 hover:shadow-2xl hover:border-accent/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all grid place-items-center text-3xl">
                📋
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                What We Do
              </h3>
              <p className="text-text-muted leading-relaxed">
                We provide accurate, independent assessments of accident-damaged
                vehicles to determine repair scope and costs in line with
                professional and insurer standards.
              </p>
            </div>

            {/* TURNAROUND TIME */}
            <div className="bg-white border border-border/50 rounded-xl p-8 hover:shadow-2xl hover:border-accent/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all grid place-items-center text-3xl">
                ⏱️
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                Turnaround Time
              </h3>
              <p className="text-text-muted leading-relaxed">
                Inspections are conducted promptly—often on the day of
                appointment—with detailed assessment reports issued within two
                working days.
              </p>
            </div>

            {/* TRANSPARENCY PROMISE */}
            <div className="bg-white border border-border/50 rounded-xl p-8 hover:shadow-2xl hover:border-accent/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all grid place-items-center text-3xl">
                ✔️
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                Transparency Promise
              </h3>
              <p className="text-text-muted leading-relaxed">
                Where timelines may be affected by documentation gaps or further
                examination, any delays are formally communicated within 24
                hours to ensure clarity and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCOPE ================= */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div>
              <h2 className="mb-4">Scope of Accident Assessment Services</h2>
              <p className="text-text-secondary max-w-xl mb-10">
                Our assessment process covers every critical stage of accident
                evaluation, ensuring accuracy, compliance, and accountability
                throughout the repair lifecycle.
              </p>

              <div className="space-y-8 text-left">
                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Inspection Reports
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Each assessment begins with a detailed inspection based on
                    accident circumstances, vehicle condition, age, mileage, and
                    fitted accessories to establish accurate repair scope and
                    costs.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Continuous Repair Assessment
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Repairs are monitored at approved garages to ensure quality
                    workmanship, correct parts usage, and strict adherence to
                    approved estimates, reducing disputes and rework.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary/30">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Post-Inspection Reports
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Final inspections confirm that completed repairs meet
                    professional standards, insurer requirements, and client
                    expectations before claim closure.
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/accident-assessment.webp"
                alt="Accident damaged vehicle inspection process"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
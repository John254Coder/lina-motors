import React from "react";

const ComplianceSection = () => {
  const compliancePillars = [
    {
      title: "Legal & Regulatory Alignment",
      description:
        "All services are carried out in strict adherence to laws and regulations governing motor assessment, valuation, and insurance-related professional services.",
    },
    {
      title: "Professional Standards",
      description:
        "Assessments and valuations are performed using recognized methodologies, ensuring accuracy, consistency, and reliability in all findings and reports.",
    },
    {
      title: "Ethical Practice & Independence",
      description:
        "We maintain strict ethical standards, upholding independence and objectivity in every assignment without external influence or conflicts of interest.",
    },
  ];

  return (
    <section
      className="section section-light"
      aria-labelledby="compliance-heading"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2
            id="compliance-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Regulatory &amp; Professional Compliance
          </h2>

          <p className="text-text-secondary leading-relaxed">
            Lina Motor Assessors &amp; Valuers operates as a fully established professional firm, 
            conducting all motor assessment and valuation assignments in accordance with applicable 
            laws, industry regulations, and professional best practice.
          </p>
        </div>

        {/* Compliance Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {compliancePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-border/50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Assurance Statement */}
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-text-secondary leading-relaxed">
            By adhering to regulatory requirements and professional best practices, Lina Motor Assessors &amp; Valuers delivers credible, defensible, and industry-compliant reports for insurers, corporates, financial institutions, and other stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

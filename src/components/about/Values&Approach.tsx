import Image from "next/image";
import { CheckCircle } from "lucide-react";

const ValuesApproachSection = () => {
  const values = [
    "Independence & Objectivity",
    "Accuracy & Attention to Detail",
    "Professional Standards",
    "Ethical Practice",
    "Clear Reporting & Documentation",
    "Client-Focused Service",
  ];

  return (
    <section
      className="section section-light"
      aria-labelledby="values-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: IMAGE — VERTICALLY CENTERED */}
          <div className="flex items-center justify-center h-[420px] lg:h-[520px] relative">
            <Image
              src="/images/core-values.jpg"
              alt="Professional motor vehicle assessment and valuation process"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div>
            <h2
              id="values-heading"
              className="mb-6"
            >
              Our Values &amp; Professional Approach
            </h2>

            <p className="text-text-secondary leading-relaxed mb-5 text-justify">
              Lina Motor Assessors &amp; Valuers operates as an independent
              professional firm, providing objective motor vehicle assessment
              and valuation services across insurance, corporate, and private
              engagements.
            </p>

            <p className="text-text-secondary leading-relaxed mb-5 text-justify">
              Each assignment is approached with careful inspection, factual
              analysis, and clear documentation to ensure that every report
              produced is accurate, defensible, and aligned with accepted
              industry and professional standards.
            </p>

            {/* <p className="text-text-secondary leading-relaxed mb-8 text-justify">
              We recognize the importance of impartial professional opinion and
              consistently apply sound technical judgment while maintaining
              independence from external influence.
            </p> */}

            {/* VALUES LIST — CLEAN, NO BACKGROUNDS */}
            <ul className="space-y-5">
              {values.map((value, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4"
                >
                  <CheckCircle
                    size={22}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="text-text-secondary font-medium">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValuesApproachSection;

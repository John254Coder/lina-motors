const CompanyOverview = () => {
  return (
    <section
      className="section section-light min-h-[400px]"
      aria-labelledby="company-overview-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[300px]">

          {/* LEFT: HEADING */}
          <div className="flex flex-col justify-center items-center text-center">
            <h2
              id="company-overview-heading"
              className="leading-tight"
            >
              Who We Are
            </h2>

            <div className="w-20 h-1 bg-[#7A1F2B]  mt-4 mb-6 rounded-full" />
          </div>

          {/* RIGHT: NARRATIVE — JUSTIFIED */}
          <div className="max-w-2xl text-text-secondary leading-relaxed text-justify">
            <p className="mb-5">
              Lina Motor Assessors &amp; Valuers is an independent professional
              firm specializing in motor vehicle assessment, valuation, and
              related advisory services. The firm provides objective and
              well-documented reports intended to support informed and
              defensible decision-making.
            </p>

            <p className="mb-5">
              Our services are utilized by insurance companies, corporate
              organizations, financial institutions, and individual clients
              requiring accurate evaluation of vehicle condition, damage
              extent, repair requirements, and market value.
            </p>

            <p>
              Each assignment is undertaken with a focus on physical inspection,
              factual analysis, and clear reporting, ensuring that all
              assessments and valuations are carried out in accordance with
              accepted professional and industry standards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

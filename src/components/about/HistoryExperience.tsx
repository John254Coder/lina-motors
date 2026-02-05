const HistoryExperience = () => {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column — Experience Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card text-center">
              <h3 className="text-primary mb-1">15+ Years</h3>
              <p className="text-sm text-secondary">
                Industry experience in motor assessment &amp; valuation
              </p>
            </div>

            <div className="card text-center">
              <h3 className="text-primary mb-1">Extensive</h3>
              <p className="text-sm text-secondary">
                Claims &amp; valuation case exposure
              </p>
            </div>

            <div className="card text-center">
              <h3 className="text-primary mb-1">Wide Range</h3>
              <p className="text-sm text-secondary">
                Private &amp; commercial vehicle assessments
              </p>
            </div>

            <div className="card text-center">
              <h3 className="text-primary mb-1">Trusted</h3>
              <p className="text-sm text-secondary">
                By insurers, corporates &amp; individual clients
              </p>
            </div>
          </div>

          {/* Right Column — History Narrative */}
          <div>
            <h2 className="mb-6">
              Our History &amp; Experience
            </h2>

            <p className="mb-5">
              Lina Motor Assessors &amp; Valuers was established in{" "}
              <strong>[YEAR]</strong> with the objective of providing
              independent, professional motor assessment and valuation services.
            </p>

            <p className="mb-5">
              Over the years, the firm has gained extensive experience handling a
              wide range of motor assessment assignments, including routine
              insurance claims, complex valuation cases, and specialized
              inspection engagements.
            </p>

            <p className="text-secondary">
              This experience enables us to deliver accurate, consistent, and
              defensible reports that meet the expectations of insurers,
              corporates, and other stakeholders.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HistoryExperience;

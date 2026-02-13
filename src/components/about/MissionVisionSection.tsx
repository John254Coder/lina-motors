import React from 'react';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="section bg-white no-x-scroll">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="relative overflow-hidden h-[80vh]">
          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 h-full gap-0">
            
            {/* Row 1, Column 1 - Mission Text */}
            <div className="flex items-center justify-center px-8 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 border-b border-border/30 md:border-r md:border-r-border/30">
              <div className="w-full">
                <h2 className="leading-tight">
                  Mission
                </h2>
                <p className="text-text-secondary leading-relaxed text-justify mt-4">
                  To provide comprehensive, factual and accurate reports that reflect the correct representation of market values in motor assessment and valuation.
                </p>
              </div>
            </div>

            {/* Row 1, Column 2 - Mission Decorative Line */}
            <div className="flex items-center justify-start border-b border-border/30 relative overflow-hidden">
              <div className="flex items-center w-3/4 ml-8 md:ml-12 lg:ml-16">
                <div className="w-3 h-3 rounded-full bg-[#7A1F2B] flex-shrink-0"></div>
                <div className="flex-1 h-[2px] bg-[#7A1F2B] opacity-80"></div>
              </div>
            </div>

            {/* Row 2, Column 1 - Vision Decorative Line */}
            <div className="flex items-center justify-end md:border-r md:border-r-border/30 relative overflow-hidden">
              <div className="flex items-center w-3/4 mr-8 md:mr-12 lg:mr-16">
                <div className="flex-1 h-[2px] bg-[#7A1F2B] opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-[#7A1F2B] flex-shrink-0"></div>
              </div>
            </div>

            {/* Row 2, Column 2 - Vision Text */}
            <div className="flex items-center justify-center px-8 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
              <div className="w-full">
                <h2 className="leading-tight">
                  Vision
                </h2>
                <p className="text-text-secondary leading-relaxed text-justify mt-4">
                  To be the preferred motor service industry provider in the East African Region.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
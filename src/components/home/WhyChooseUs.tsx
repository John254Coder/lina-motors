"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      title: "Technical Expertise",
      description:
        "Highly trained professionals with deep knowledge of motor assessment and valuation standards.",
    },
    {
      title: "Fast Response Times",
      description:
        "Quick turnaround on assessments and reports, ensuring minimal disruption to your operations.",
    },
    {
      title: "Nationwide Coverage",
      description:
        "Consistent service delivery across all regions of Kenya, maintaining the same high standards everywhere.",
    },
  ];

  // Scroll-trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[var(--color-soft)] via-[var(--color-background)] to-[var(--color-surface)]"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2
              className={`text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              Why Choose Lina Motors?
            </h2>
            <p
              className={`text-[var(--color-text-muted)] text-lg mb-10 leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              We pride ourselves on reliability, expert knowledge, quality reports, 
              and efficient response times. Our commitment to excellence has made us 
              a trusted partner in the Kenyan insurance and financial sectors.
            </p>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-5 group transition-all duration-700 delay-${idx * 150} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)/20] to-[var(--color-primary-light)/20] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="text-[var(--color-primary)]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-primary-dark)] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats / Visual Container */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              <Image
                src="/images/why-bg.webp"
                alt="Technical automotive illustration"
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="absolute inset-0 z-0"
              />

              {/* Gradient Overlay like Hero section */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40 z-10"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-20 flex items-center justify-center h-full p-12">
                <div className="text-center">
                  <p className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent mb-6">
                    18+
                  </p>
                  <p className="text-2xl text-white font-bold">
                    Years of Professional Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

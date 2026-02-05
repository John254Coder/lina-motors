"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background Image + Transparent Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.avif" 
          alt="CTA background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div> {/* Transparent overlay */}
      </div>

      {/* Content */}
      <div
        className={`container mx-auto px-6 text-center relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg sm:text-xl md:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
          Contact us today for professional motor assessment and valuation services
          backed by years of industry expertise.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="btn btn-primary btn-cta"
            aria-label="Request a professional motor vehicle valuation"
          >
            Get a Quote
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/get-quote"
            className="btn btn-secondary"
            aria-label="Request a quote for vehicle assessment"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

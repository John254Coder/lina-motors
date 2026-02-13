import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ServiceLayoutProps {
  title: string;
  description: React.ReactNode;
  heroImage: string;
  heroAlt: string;
  children: React.ReactNode;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  description,
  heroImage,
  heroAlt,
  children,
  ctaTitle = "Request This Service",
  ctaDescription = "Contact Lina Motor Assessors & Valuers for professional, independent, and timely service.",
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
}) => {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl text-white">
              <h1 className="text-white mb-6">{title}</h1>
              <div className="text-lg text-white/90 leading-relaxed">
                {description}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PAGE CONTENT ================= */}
      {children}

      {/* ================= SOFT CTA ================= */}
      <section className="section section-soft">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">{ctaTitle}</h2>

          <p className="text-text-secondary leading-relaxed mb-8">
            {ctaDescription}
          </p>

          <Link
            href={ctaHref}
            className="btn btn-primary"
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServiceLayout;
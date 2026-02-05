"use client";

import React from "react";
import Link from "next/link";
import {
  Shield,
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  Award,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const services: ServiceItem[] = [
  {
    title: "Motor Vehicle Assessment",
    description:
      "Comprehensive vehicle evaluations for insurance claims, providing accurate damage assessments and repair cost estimates.",
    icon: <Shield size={32} className="text-accent" />,
    href: "/services/assessment",
  },
  {
    title: "Vehicle Valuation",
    description:
      "Professional market value assessments for vehicles, ensuring fair and accurate valuations for various purposes.",
    icon: <TrendingUp size={32} className="text-accent" />,
    href: "/services/valuation",
  },
  {
    title: "Insurance Claims",
    description:
      "Expert handling of insurance claims with detailed documentation and efficient processing for quick resolutions.",
    icon: <CheckCircle size={32} className="text-accent" />,
    href: "/services/claims",
  },
  {
    title: "Pre-Purchase Inspection",
    description:
      "Thorough vehicle inspections before purchase, identifying potential issues and ensuring informed buying decisions.",
    icon: <Clock size={32} className="text-accent" />,
    href: "/services/inspection",
  },
  {
    title: "Fleet Management",
    description:
      "Comprehensive fleet assessment and management services for businesses, ensuring optimal vehicle performance and value.",
    icon: <Users size={32} className="text-accent" />,
    href: "/services/fleet",
  },
  {
    title: "Expert Consultation",
    description:
      "Professional advice and consultation on all motor-related matters, backed by years of industry expertise.",
    icon: <Award size={32} className="text-accent" />,
    href: "/services/consultation",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Core Services
          </h2>
          <p className="text-text-muted text-lg">
            Comprehensive motor assessment solutions designed to exceed client
            expectations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-border/50 rounded-xl p-8 hover:shadow-2xl hover:border-accent/50 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={service.href}
                className="inline-flex items-center text-accent hover:text-secondary font-semibold group-hover:translate-x-2 transition-transform"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

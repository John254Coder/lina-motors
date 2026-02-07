"use client";

import React from "react";
import Link from "next/link";
import {
  Wrench,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const services: ServiceItem[] = [
  {
    title: "Accident Assessment",
    description:
      "Professional and independent assessment of accident-damaged vehicles to establish accurate repair costs and support fast, effective insurance claim resolution.",
    icon: <Wrench size={32} className="text-accent" />,
    href: "/services/accident-assessment",
  },
  {
    title: "Vehicle Valuation",
    description:
      "Accurate, independent motor vehicle valuations based on condition, usage, and prevailing market factors for insurance, sale, purchase, and financial purposes.",
    icon: <TrendingUp size={32} className="text-accent" />,
    href: "/services/vehicle-valuation",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensuring repair quality, professional standards, and service consistency through independent inspection and continuous performance review.",
    icon: <CheckCircle size={32} className="text-accent" />,
    href: "/services/quality-assurance",
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
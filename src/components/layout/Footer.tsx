"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Motor Vehicle Assessment", href: "/services/assessment" },
    { name: "Vehicle Valuation", href: "/services/valuation" },
    { name: "Insurance Claims", href: "/services/claims" },
    { name: "Pre-Purchase Inspection", href: "/services/inspection" },
    { name: "Fleet Management", href: "/services/fleet" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info - Updated with Image Logo */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="relative w-18 h-18">
                <Image
                  src="/logo.webp"
                  alt="Lina Motors Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-tight">
                  LINA MOTORS
                </span>
                <span className="text-white/80 text-[10px] uppercase tracking-wider">
                  Assessors & Valuers
                </span>
              </div>
            </div>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Professional motor service provider in the Insurance risk management 
              and financial sector within the Kenyan business landscape since 2006.
            </p>
            <div className="flex items-center gap-3">
              {[{Icon: Facebook, href:"https://facebook.com"}, {Icon: Twitter, href:"https://twitter.com"}, {Icon: Linkedin, href:"https://linkedin.com"}, {Icon: Instagram, href:"https://instagram.com"}].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[var(--color-primary-dark)] rounded-md flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-white/75 hover:text-white hover:translate-x-1 transition-all text-[15px] flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/50 rounded-full group-hover:w-1.5 group-hover:h-1.5 transition-all"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-white hover:translate-x-1 transition-all text-[15px] flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/50 rounded-full group-hover:w-1.5 group-hover:h-1.5 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+254-xxx-xxx-xxx"
                  className="flex items-start gap-3 text-white/75 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary-dark)] transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium">+254 XXX XXX XXX</p>
                    <p className="text-xs text-white/50 mt-0.5">Mon-Fri 8am-6pm</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@linamotors.co.ke"
                  className="flex items-start gap-3 text-white/75 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary-dark)] transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium break-all">info@linamotors.co.ke</p>
                    <p className="text-xs text-white/50 mt-0.5">24/7 Email Support</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/75">
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium">Nairobi, Kenya</p>
                    <p className="text-xs text-white/50 mt-0.5">Serving all regions</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold text-base mb-1.5">
                Stay Updated
              </h4>
              <p className="text-white/70 text-[15px]">
                Subscribe to our newsletter for industry insights and updates
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white text-[15px] placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary hover:bg-white/90 font-semibold rounded-md transition-all whitespace-nowrap text-[15px] shadow-sm hover:shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-white/65">
            <p className="text-center md:text-left">
              &copy; {currentYear} Lina Motor Assessors & Valuers. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-white/30">•</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span className="text-white/30">•</span>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
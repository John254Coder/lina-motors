"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Check if link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const services = [
    {
      name: "Motor Assessments",
      description: "Professional vehicle damage assessment and evaluation",
      icon: "📋",
      href: "/services/assessments",
    },
    {
      name: "Vehicle Valuation",
      description: "Accurate market value appraisal for all vehicles",
      icon: "💰",
      href: "/services/valuation",
    },
    {
      name: "Insurance Claims",
      description: "Expert support for motor insurance claims",
      icon: "🛡️",
      href: "/services/claims",
    },
    {
      name: "Pre-Purchase Inspection",
      description: "Comprehensive vehicle inspection before buying",
      icon: "🔍",
      href: "/services/inspection",
    },
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Top Bar - Contact Info (Desktop Only) */}
      <div className="hidden lg:block bg-primary text-white/90 py-2.5 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <a
                href="tel:+254-xxx-xxx-xxx"
                className="flex items-center gap-2 text-white hover:text-slate-300 transition-colors"
              >
                <Phone size={14} className="opacity-80" />
                <span>+254 XXX XXX XXX</span>
              </a>
              <a
                href="mailto:info@linamotors.co.ke"
                className="flex items-center gap-2 text-white hover:text-slate-300 transition-colors"
              >
                <Mail size={14} className="opacity-80" />
                <span>info@linamotors.co.ke</span>
              </a>
            </div>
            <div className=" text-white hover:text-slate-300 transition-colors text-xs">
              Professional Motor Assessment Services Since 2006
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card-hover"
            : "bg-white shadow-card"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Updated with Image */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-18 h-18 transition-all duration-200 group-hover:scale-105">
                <Image
                  src="/logo.webp"
                  alt="Lina Motors Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold text-xl leading-tight tracking-tight group-hover:text-primary-light transition-colors">
                  LINA MOTORS
                </span>
                <span className="text-text-muted text-[10px] font-medium uppercase tracking-wider">
                  Assessors & Valuers
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center ml-12">
              <Link
                href="/"
                className={`px-4 py-2 text-[15px] transition-colors rounded-md relative ${
                  isActiveLink("/")
                    ? "text-[#1e3a8a] font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-[#1e3a8a] after:rounded-full hover:bg-soft/50"
                    : "text-text font-medium hover:text-primary hover:bg-surface"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-4 py-2 text-[15px] transition-colors rounded-md relative ${
                  isActiveLink("/about")
                    ? "text-[#1e3a8a] font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-[#1e3a8a] after:rounded-full hover:bg-soft/50"
                    : "text-text font-medium hover:text-primary hover:bg-surface"
                }`}
              >
                About
              </Link>

              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-[15px] transition-colors rounded-md relative ${
                    isActiveLink("/services")
                      ? "text-[#1e3a8a] font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-[#1e3a8a] after:rounded-full hover:bg-soft/50"
                      : "text-text font-medium hover:text-primary hover:bg-surface"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] transition-all duration-200 ${
                    activeDropdown === "services"
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-md border border-border overflow-hidden">
                    {/* Mega Menu Header */}
                    <div className="bg-soft px-6 py-4 border-b border-border">
                      <h3 className="text-lg font-semibold text-primary">
                        Our Services
                      </h3>
                      <p className="text-sm text-text-muted mt-1">
                        Professional motor assessment & valuation services
                      </p>
                    </div>

                    {/* Services Grid - 2x2 */}
                    <div className="grid grid-cols-2 gap-px bg-border">
                      {services.map((service, idx) => (
                        <Link
                          key={idx}
                          href={service.href}
                          className="bg-white p-6 hover:bg-soft transition-all duration-200 group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
                              {service.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-primary text-base mb-1 group-hover:text-primary-dark transition-colors">
                                {service.name}
                              </h4>
                              <p className="text-sm text-text-muted leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="bg-surface px-6 py-4 border-t border-border">
                      <Link
                        href="/services"
                        className="text-sm font-medium text-primary hover:text-primary-dark inline-flex items-center gap-1 group"
                      >
                        View All Services
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className={`px-4 py-2 text-[15px] transition-colors rounded-md relative ${
                  isActiveLink("/contact")
                    ? "text-[#1e3a8a] font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-[#1e3a8a] after:rounded-full hover:bg-soft/50"
                    : "text-text font-medium hover:text-primary hover:bg-surface"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href="/get-quote"
              className="hidden lg:inline-flex bg-primary text-white hover:bg-primary-dark px-6 py-2.5 rounded-md text-[15px] font-semibold transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-text hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-text/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 lg:hidden transition-transform duration-300 ease-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header - Updated with Image */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Lina Motors Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold text-lg leading-tight tracking-tight">
                  LINA MOTORS
                </span>
                <span className="text-text-muted text-[10px] uppercase tracking-wider">
                  Assessors & Valuers
                </span>
              </div>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-text hover:text-primary transition-colors p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3.5 text-[15px] transition-colors border-b border-border/30 relative ${
                  isActiveLink("/")
                    ? "text-[#1e3a8a] font-bold pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-[#1e3a8a] before:rounded-full hover:bg-soft/30"
                    : "text-text font-medium hover:text-primary hover:bg-surface"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3.5 text-[15px] transition-colors border-b border-border/30 relative ${
                  isActiveLink("/about")
                    ? "text-[#1e3a8a] font-bold pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-[#1e3a8a] before:rounded-full hover:bg-soft/30"
                    : "text-text font-medium hover:text-primary hover:bg-surface"
                }`}
              >
                About Us
              </Link>

              {/* Services Section - Enhanced */}
              <div className="border-b border-border/30">
                <button
                  onClick={() => toggleDropdown("mobile-services")}
                  className={`w-full flex items-center justify-between py-3.5 text-[15px] transition-colors relative ${
                    isActiveLink("/services")
                      ? "text-[#1e3a8a] font-bold pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-[#1e3a8a] before:rounded-full hover:bg-soft/30"
                      : "text-text font-medium hover:text-primary hover:bg-surface"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "mobile-services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === "mobile-services"
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-3 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block p-3 rounded-lg hover:bg-soft transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{service.icon}</span>
                          <div className="flex-1">
                            <div className="font-medium text-primary group-hover:text-primary-dark transition-colors text-[14px]">
                              {service.name}
                            </div>
                            <div className="text-xs text-text-muted mt-0.5">
                              {service.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3.5 text-[15px] transition-colors border-b border-border/30 relative ${
                  isActiveLink("/contact")
                    ? "text-[#1e3a8a] font-bold pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-[#1e3a8a] before:rounded-full hover:bg-soft/30"
                    : "text-text font-medium hover:text-primary hover:bg-surface"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile CTA Button */}
            <div className="px-6 mt-8">
              <Link
                href="/get-quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-md text-center text-[15px] font-semibold transition-all shadow-sm hover:shadow-md"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Contact Info */}
            <div className="px-6 mt-8 pt-8 border-t border-border">
              <h4 className="text-primary font-semibold text-xs uppercase tracking-wider mb-4">
                Contact Us
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+254-xxx-xxx-xxx"
                  className="flex items-center gap-3 text-[14px] text-text-muted hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 bg-soft rounded-md flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <span>+254 XXX XXX XXX</span>
                </a>
                <a
                  href="mailto:info@linamotors.co.ke"
                  className="flex items-center gap-3 text-[14px] text-text-muted hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 bg-soft rounded-md flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <span>info@linamotors.co.ke</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-border bg-surface/50">
            <p className="text-text-muted text-xs text-center">
              Professional Motor Assessment Services Since 2006
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
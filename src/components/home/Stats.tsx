"use client";

import React, { useEffect, useState, useRef } from "react";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "18+", label: "Years Experience" },
  { value: "5000+", label: "Assessments Done" },
  { value: "200+", label: "Insurance Partners" },
  { value: "98%", label: "Client Satisfaction" },
];

const parseNumber = (value: string) => parseInt(value.replace(/[^\d]/g, ""), 10);

const Statistics: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounts();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% of the section is visible
    );

    observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 1500; // animation duration in ms
    const frameRate = 30; // frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);

    const finalValues = stats.map((stat) => parseNumber(stat.value));
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCounts(finalValues.map((val) => Math.round(val * progress)));

      if (frame === totalFrames) clearInterval(counter);
    }, 1000 / frameRate);
  };

  return (
    <section
      ref={statsRef}
      className="py-20 bg-gradient-to-br from-[var(--color-soft)] via-[var(--color-background)] to-[var(--color-surface)]"
      aria-labelledby="stats-heading"
    >
      <div className="container mx-auto px-6">
        <h2 id="stats-heading" className="sr-only">
          Company Statistics
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => {
            const displayValue = stat.value.includes("+")
              ? counts[idx] + "+"
              : stat.value.includes("%")
              ? counts[idx] + "%"
              : counts[idx];

            return (
              <div key={idx} className="text-center group">
                <div
                  className="text-5xl md:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform"
                  style={{
                    background: `linear-gradient(to right, var(--color-primary), var(--color-primary-light))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {displayValue}
                </div>
                <p className="text-text-muted font-semibold text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

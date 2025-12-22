'use client';

import { Award, CheckCircle, Users } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Award,
    number: '5+',
    label: 'Years of Experience',
    description: 'Serving the community',
  },
  {
    id: 2,
    icon: CheckCircle,
    number: '1000+',
    label: 'Completed Projects',
    description: 'Satisfied customers',
  },
  {
    id: 3,
    icon: Users,
    number: '100%',
    label: 'Client Satisfaction',
    description: 'Quality guaranteed',
  },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative bg-white border-2 border-zinc-200 rounded-3xl p-8 transition-all duration-300 hover:border-accent hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon className="w-10 h-10" />
                  </div>

                  {/* Number */}
                  <h3 className="font-heading text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>

                  {/* Label */}
                  <p className="font-heading text-xl font-bold text-primary mb-2">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-600 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

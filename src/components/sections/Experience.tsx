import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Company Name',
    period: '2024 — Present',
    location: 'Germany / Remote',
    description:
      'Developing and maintaining modern web applications, collaborating with designers and backend engineers, and improving application usability and performance.',
    achievements: [
      'Built reusable UI components.',
      'Improved frontend architecture and maintainability.',
      'Collaborated on responsive interfaces and API integrations.',
    ],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Previous Company',
    period: '2022 — 2024',
    location: 'Location',
    description:
      'Worked on frontend development, user interface implementation, and integration with backend services.',
    achievements: [
      'Implemented responsive web interfaces.',
      'Worked with REST APIs.',
      'Maintained and improved existing features.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-border">
      <div className="container-main">
        <SectionHeading
          number="04"
          label="Career"
          title="Where I've worked."
          description="My professional journey and experience building digital products."
        />

        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.company}-${index}`}>
              <article className="grid gap-6 rounded-2xl border border-border bg-surface p-6 md:grid-cols-[220px_1fr] md:p-8">
                <div>
                  <p className="font-mono text-sm text-accent">{experience.period}</p>

                  <p className="mt-2 text-xs text-muted">{experience.location}</p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold">{experience.role}</h3>

                      <p className="mt-1 text-sm text-muted">{experience.company}</p>
                    </div>

                    <ArrowUpRight size={20} className="text-accent" />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted">{experience.description}</p>

                  <ul className="mt-5 space-y-3">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3 text-sm text-muted">
                        <span className="text-accent">↗</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

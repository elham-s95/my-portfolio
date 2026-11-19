import { Code2, Gauge, Layout, Workflow } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const strengths = [
  {
    icon: Code2,
    title: 'Clean engineering',
    description: 'Writing maintainable, reusable, and well-structured code.',
  },
  {
    icon: Layout,
    title: 'UI engineering',
    description: 'Building intuitive interfaces with attention to detail.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Creating fast, accessible, and optimized experiences.',
  },
  {
    icon: Workflow,
    title: 'Problem solving',
    description: 'Turning complex requirements into practical solutions.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding section-border">
      <div className="container-main">
        <SectionHeading
          number="02"
          label="About me"
          title="Good design meets great engineering."
          description="I build enterprise web applications with a focus on real-time data, usability, and performance."
        />

        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-6 text-base leading-8 text-muted">
              <p>
                I'm a frontend engineer with 4+ years of experience developing enterprise scale
                applications with Angular and AngularJS. At Faraabeen, I work on real-time
                communication network monitoring systems.
              </p>

              <p>
                I build KPI dashboards, dynamic and customizable interfaces, and reliable live data
                experiences. My work includes performance optimization, API integration, and
                collaboration with backend and network engineers.
              </p>

              <p>
                My core toolkit includes Angular, TypeScript, RxJS, JavaScript, SCSS, Syncfusion,
                and Highcharts. I also have practical experience with React and Next.js.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="h-full rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40">
                    <Icon size={24} className="text-accent" />

                    <h3 className="mt-5 font-semibold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

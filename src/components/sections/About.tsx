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
          description="I enjoy building products where thoughtful design and solid engineering work together."
        />

        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-6 text-base leading-8 text-muted">
              <p>
                I'm a frontend developer with 3–5 years of experience building modern web
                applications and creating meaningful user experiences.
              </p>

              <p>
                My approach combines attention to visual detail with an engineering mindset. I care
                about code quality, accessibility, performance, and maintainable architecture.
              </p>

              <p>
                I'm always interested in challenging problems, learning new technologies, and
                collaborating with people who care about building great products.
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

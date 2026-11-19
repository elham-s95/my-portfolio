import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Angular 10+', 'AngularJS', 'TypeScript', 'RxJS', 'JavaScript ES6+', 'React', 'Next.js'],
  },
  {
    title: 'UI & Visualization',
    skills: ['Angular Material', 'Syncfusion', 'Highcharts', 'SCSS / SASS', 'Responsive Design'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['REST APIs', 'Angular HTTP Client', 'State Management', 'Git', 'npm', 'ESLint', 'Prettier', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section className="section-padding section-border">
      <div className="container-main">
        <SectionHeading
          number="03"
          label="My toolkit"
          title="Technologies I work with."
          description="The tools and technologies I use to design, develop, and deliver modern web applications."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <span className="font-mono text-sm text-accent">0{index + 1}</span>

                <h3 className="mt-5 text-xl font-semibold">{group.title}</h3>

                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border px-3 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { projects } from '@/data/projects';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
  return (
    <section id="work" className="section-padding section-border">
      <div className="container-main">
        <SectionHeading
          number="01"
          label="Selected work"
          title="Things I've built."
          description="A selection of projects demonstrating my approach to frontend engineering, design, and problem-solving."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.slug} className={project.number === '01' ? 'md:col-span-2' : ''}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

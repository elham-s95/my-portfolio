import Link from 'next/link';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      <Link
        href={`/projects/${project.slug}`}
        className="block"
        aria-label={`View ${project.title} project`}
      >
        <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-[#171e22]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#b5f36d12,transparent_65%)]" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/20 bg-background/70 text-accent transition-transform duration-500 group-hover:scale-110">
            <Layers3 size={36} strokeWidth={1.2} />
          </div>

          <span className="absolute left-6 top-6 font-mono text-xs text-muted">
            / {project.number}
          </span>

          <span className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-accent transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-background">
            <ArrowUpRight size={19} />
          </span>
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="text-xs uppercase tracking-wider text-accent">{project.category}</span>
            <span className="text-xs text-muted">{project.year}</span>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}

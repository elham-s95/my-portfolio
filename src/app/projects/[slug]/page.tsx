import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} | Elham Shojaei` : 'Project not found',
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen">
      <div className="container-main py-12 md:py-20">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mt-20">
          <p className="font-mono text-sm text-accent">PROJECT / {project.number}</p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{project.description}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-16 flex aspect-video items-center justify-center rounded-2xl border border-border bg-surface">
            <span className="text-center text-sm text-muted">
              Add your project screenshots here
            </span>
          </div>

          <section className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-semibold">Project overview</h2>

            <p className="mt-5 leading-8 text-muted">
              Replace this section with the real project background, your responsibilities,
              architecture decisions, technical challenges, and measurable results.
            </p>
          </section>

          <Link href="/#contact" className="mt-12 inline-flex items-center gap-2 text-accent">
            Discuss a similar project
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, CodeXml } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(90vh-76px)] items-center overflow-hidden">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[130px]"
      />

      <div className="container-main relative py-28 md:py-36">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="accent-dot" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted sm:text-sm">
              Frontend Developer · Open to opportunities
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px]">
            Building digital
            <br />
            experiences that
            <br />
            <span className="text-gradient">make an impact.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-9 max-w-xl text-base leading-8 text-muted md:text-lg">
            I'm a frontend developer with 3–5 years of experience creating performant, accessible,
            and scalable web applications. I turn complex ideas into intuitive digital experiences.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#work"
              className="group flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-background transition-all hover:shadow-[0_0_30px_#b5f36d35]"
            >
              Explore my work
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Download CV ↓
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-14 flex items-center gap-5">
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <CodeXml size={20} />
            </Link>

            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <BriefcaseBusiness size={20} />
            </Link>

            <span className="h-5 w-px bg-border" />

            <span className="text-xs text-muted">Based in Germany · Available worldwide</span>
          </div>
        </Reveal>

        <div className="mt-20 hidden items-center gap-3 text-xs uppercase tracking-widest text-muted md:flex">
          <ArrowDown size={15} className="text-accent" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}

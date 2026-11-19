import Link from 'next/link';
import { ArrowUpRight, Mail, BriefcaseBusiness, CodeXml } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-border">
      <div className="container-main">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 md:p-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/10 blur-[100px]"
            />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <span className="accent-dot" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted">What's next?</span>
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Have an interesting project in mind?
                <span className="text-accent"> Let's talk.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-muted">
                I'm always open to discussing new opportunities, interesting projects, and ways to
                create something meaningful.
              </p>

              <Link
                href="mailto:eli.shojaei.95@gmail.com"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-background transition-transform hover:scale-105"
              >
                Get in touch
                <ArrowUpRight size={18} />
              </Link>

              <div className="mt-12 flex flex-wrap gap-6 border-t border-border pt-8">
                <Link
                  href="mailto:eli.shojaei.95@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Mail size={17} />
                  Email
                </Link>

                <Link
                  href="https://github.com/elham-s95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <CodeXml size={17} />
                  GitHub
                </Link>

                <Link
                  href="https://www.linkedin.com/in/eli-shojaei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <BriefcaseBusiness size={17} />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

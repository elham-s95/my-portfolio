import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="container-main flex min-h-[76px] items-center justify-between gap-4"
      >
        <Link href="/" className="text-xl font-bold tracking-tight">
          Elham Shojaei<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden text-sm text-muted transition-colors hover:text-accent sm:block"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background transition-transform hover:scale-105 sm:text-sm"
          >
            Let's talk
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

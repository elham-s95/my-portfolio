import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-main flex flex-col items-center justify-between gap-5 sm:flex-row">
        <Link href="/" className="text-lg font-bold tracking-tight">
          YOURNAME<span className="text-accent">.</span>
        </Link>

        <p className="text-center text-xs text-muted">
          © {new Date().getFullYear()} Your Name. Built with Next.js and care.
        </p>

        <Link
          href="#"
          className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUp size={16} />
        </Link>
      </div>
    </footer>
  );
}

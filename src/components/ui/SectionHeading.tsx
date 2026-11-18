import Reveal from './Reveal';

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ number, label, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14">
      <div className="mb-5 flex items-center gap-3 text-sm">
        <span className="font-mono text-accent">{number}</span>
        <span className="h-px w-8 bg-border" />
        <span className="uppercase tracking-[0.18em] text-muted">{label}</span>
      </div>

      <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{description}</p>
      )}
    </Reveal>
  );
}

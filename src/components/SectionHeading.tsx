import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: { label: string; href: string };
};

export default function SectionHeading({ eyebrow, title, subtitle, action }: Props) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-[2.25rem]">{title}</h2>
        {subtitle ? <p className="muted mt-3 max-w-2xl text-base sm:text-[17px]">{subtitle}</p> : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className="muted inline-flex shrink-0 items-center gap-1.5 text-[15px] font-medium transition hover:text-accent"
        >
          {action.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}

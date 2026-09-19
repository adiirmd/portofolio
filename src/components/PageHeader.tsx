type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="glow-backdrop pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="shell pb-10 pt-14 sm:pt-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle ? <p className="muted mt-4 max-w-2xl text-sm sm:text-base">{subtitle}</p> : null}
      </div>
    </section>
  );
}

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="shell pb-10 pt-12 sm:pt-16">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {subtitle ? <p className="muted mt-4 max-w-2xl text-[17px] leading-relaxed">{subtitle}</p> : null}
    </section>
  );
}

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="shell pb-8 pt-8 sm:pb-10 sm:pt-16">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl">{title}</h1>
      {subtitle ? (
        <p className="muted mt-5 max-w-3xl text-[17px] leading-[1.75]">{subtitle}</p>
      ) : null}
    </section>
  );
}

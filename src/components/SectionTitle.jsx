export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6 md:mb-8">
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-[var(--color-accent-2)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 muted max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}

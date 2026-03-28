import clsx from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={clsx("mb-12", centered && "text-center")}>
      <h2
        className={clsx(
          "font-heading text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <div
        className={clsx(
          "mt-3 h-1 w-16 rounded-full bg-gold",
          centered && "mx-auto"
        )}
      />
      {subtitle && (
        <p
          className={clsx(
            "mt-4 max-w-2xl text-lg leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/70" : "text-charcoal/60"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

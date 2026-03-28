import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "forest";
}

const variants = {
  default: "bg-sage/20 text-forest",
  gold: "bg-gold/15 text-gold-dark",
  forest: "bg-forest/10 text-forest",
};

export default function Badge({
  children,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-block rounded-full px-3 py-1 text-xs font-medium",
        variants[variant]
      )}
    >
      {children}
    </span>
  );
}

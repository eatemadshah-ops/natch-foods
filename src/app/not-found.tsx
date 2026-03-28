import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-6xl font-bold text-forest">404</h1>
      <h2 className="mt-4 font-heading text-2xl font-semibold text-charcoal">
        Page Not Found
      </h2>
      <p className="mt-2 text-charcoal/60">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}

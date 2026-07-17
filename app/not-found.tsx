import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col justify-center px-5 py-16">
      <h1 className="font-heading text-4xl font-semibold text-[var(--ink)]">
        Page not found
      </h1>
      <p className="mt-3 text-[var(--muted)]">
        This decision page may be unpublished or the link may be incorrect.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex w-fit text-[var(--accent)] hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border px-5 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="t-lead">{title}</h1>
        {description && (
          <p className="t-body mx-auto mt-4 max-w-xl">{description}</p>
        )}
      </div>
    </section>
  );
}

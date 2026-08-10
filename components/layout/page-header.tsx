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
        <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.8] text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

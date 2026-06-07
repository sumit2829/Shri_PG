export function SkeletonLoader() {
  return (
    <div className="mx-auto grid max-w-7xl gap-5 px-4 py-28 sm:px-6 md:grid-cols-3 lg:px-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="h-64 animate-pulse rounded-2xl bg-primary-100 dark:bg-white/10" />
      ))}
    </div>
  );
}

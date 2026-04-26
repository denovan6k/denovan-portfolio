export default function Loading() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse rounded-lg border border-emerald-900/40 bg-zinc-900/40 h-80" />
          ))}
        </div>
        <p className="mt-6 text-center text-zinc-400 text-sm">Loading projects...</p>
      </div>
    </div>
  )
}
// Meaningful loading states improve perceived performance and UX in the App Router [^2].

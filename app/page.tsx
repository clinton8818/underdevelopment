function UnderDevelopment() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808] px-4 text-white">
      <div className="flex w-full max-w-md flex-col items-center text-center">
        {/* Construction GIF */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-2xl">
          <img
            src="/underdev.gif"
            alt="Page under development"
            className="block h-auto w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
            Under Development
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Still Under Development
          </h1>

          <p className="mx-auto max-w-sm text-sm leading-6 text-zinc-500">
            We&apos;re working behind the scenes to bring you something amazing.
            This page will be available soon.
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-600 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
        </div>
      </div>
    </main>
  );
}

export default UnderDevelopment;

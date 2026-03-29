export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            test-landing
          </span>
          <nav className="hidden gap-8 sm:flex">
            <a href="#features" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              Features
            </a>
            <a href="#about" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 pt-16">
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 py-32 text-center">
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            Built with Next.js &amp; Tailwind CSS
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
            Build something{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              amazing
            </span>{" "}
            today
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400">
            A modern landing page template to kickstart your next project.
            Fast, responsive, and beautifully designed.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Learn More
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-zinc-500 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} test-landing. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

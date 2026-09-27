import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="relative isolate min-h-svh overflow-hidden bg-ink font-sans text-ink">
    <img
      class="absolute inset-0 -z-10 h-full w-full object-cover object-[58%_45%] md:object-center"
      src="/hero-placeholder.jpg"
      alt=""
      fetchpriority="high"
    />
    <div class="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,24,20,0.2),transparent_75%)]" aria-hidden="true"></div>

    <a
      class="absolute bottom-5 right-5 z-10 inline-flex size-12 items-center justify-center rounded-full bg-paper text-ink shadow-lg transition-colors hover:bg-rust hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper md:bottom-8 md:right-8"
      href="https://www.instagram.com/allroadworks/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit ALLROADWORKS on Instagram"
      title="Instagram: @allroadworks"
    >
      <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    </a>

    <section
      class="relative flex min-h-svh items-center justify-center p-5 items-start md:justify-start md:p-10 lg:p-16"
      aria-labelledby="brand-title"
    >
      <div class="w-full max-w-2xl bg-paper px-6 py-7 shadow-2xl sm:px-9 sm:py-9">
        <div class="mb-5 h-1 w-12 bg-rust" aria-hidden="true"></div>
        <h1 id="brand-title" class="font-display text-[2.5rem] font-bold leading-[0.9] tracking-normal min-[390px]:text-[2.75rem] min-[440px]:text-6xl sm:text-7xl">
          ALLROADWORKS
        </h1>
        <h2 class="mt-5 max-w-lg font-display text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
          Strength Coaching for Cyclists
        </h2>
        <hr class="my-6 border-ink/20" />
        <p class="max-w-xl text-base leading-relaxed sm:text-lg">
          Individual strength coaching designed around your cycling, your goals, and your schedule. Build the strength and fatigue resistance to ride harder for longer.
        </p>
        <p class="mt-5 text-sm font-semibold leading-relaxed text-ink/75 sm:text-base">
          Online coaching or in-person in Mainz, Germany.
        </p>
      </div>
    </section>
  </main>
`

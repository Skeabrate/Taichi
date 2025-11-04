export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[500px] flex-col items-center justify-center sm:min-h-[840px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[350px] w-[350px] sm:h-[800px] sm:w-[800px]">
          <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-200">
            <div className="absolute top-0 right-0 h-full w-1/2 bg-white" />
            <div className="absolute top-1/4 right-1/4 z-10 h-10 w-10 rounded-full bg-neutral-200 sm:h-24 sm:w-24" />
            <div className="absolute bottom-1/4 left-1/4 z-10 h-10 w-10 rounded-full bg-white sm:h-24 sm:w-24" />
            <div className="absolute top-0 left-1/4 h-1/2 w-1/2 rounded-full bg-white" />
            <div className="absolute right-1/4 bottom-0 h-1/2 w-1/2 rounded-full bg-neutral-200" />
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-4 h-16 w-16 border-t-6 border-l-6 border-neutral-300 sm:top-8 sm:left-8" />
      <div className="absolute top-4 right-4 h-16 w-16 border-t-6 border-r-6 border-neutral-300 sm:top-8 sm:right-8" />
      <div className="absolute bottom-4 left-4 h-16 w-16 border-b-6 border-l-6 border-neutral-300 sm:bottom-8 sm:left-8" />
      <div className="absolute right-4 bottom-4 h-16 w-16 border-r-6 border-b-6 border-neutral-300 sm:right-8 sm:bottom-8" />

      <div className="fade-in z-10 px-4 text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-wider sm:text-8xl">
          太極拳
        </h1>
        <h2 className="mb-4 text-3xl font-light sm:text-5xl">TAICHI QUAN</h2>
        <p className="mb-12 text-xl text-gray-600 sm:text-2xl">
          Jarosław Świeczkowski 5 Duan
        </p>

        <nav className="flex flex-wrap justify-center gap-6">
          <a
            href="#o-mnie"
            className="border-b-2 border-transparent pb-px text-lg transition-colors hover:border-neutral-700"
          >
            O MNIE
          </a>
          <a
            href="#zajecia"
            className="border-b-2 border-transparent pb-px text-lg transition-colors hover:border-neutral-700"
          >
            ZAJĘCIA
          </a>
          <a
            href="#kontakt"
            className="border-b-2 border-transparent pb-px text-lg transition-colors hover:border-neutral-700"
          >
            KONTAKT
          </a>
        </nav>
      </div>
    </section>
  );
}

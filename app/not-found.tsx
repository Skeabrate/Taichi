import { Navigation } from "@/components/Navigation";
import { YinYangBackground } from "@/components/YinYangBackground";

export default function NotFound() {
  return (
    <section className="relative flex h-screen min-h-[500px] flex-col items-center justify-center overflow-hidden">
      <YinYangBackground />

      <div className="fade-in z-10 px-4 text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-wider sm:text-8xl">
          404
        </h1>
        <p className="mb-12 text-xl text-gray-600 sm:text-2xl">
          Nie znaleziono strony, spróbuj jednego z poniższych linków
        </p>

        <Navigation basePath="/" />
      </div>
    </section>
  );
}

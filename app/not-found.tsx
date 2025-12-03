import { Navigation } from "@/components/Navigation";
import { YinYang } from "@/components/YinYang";

export default function NotFound() {
  return (
    <section className="from-muted/50 to-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <YinYang
          className="text-foreground h-[500px] w-[500px]"
          withDots={true}
        />
      </div>

      <div className="z-10 px-4 text-center">
        <h1 className="font-heading text-foreground mb-6 text-6xl font-bold tracking-wider sm:text-8xl">
          404
        </h1>
        <p className="text-muted-foreground mb-12 text-xl sm:text-2xl">
          Nie znaleziono strony, spróbuj jednego z poniższych linków
        </p>

        <Navigation basePath="/" />
      </div>
    </section>
  );
}
